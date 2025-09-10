import { User } from '../lib/prisma';
import crypto from 'crypto';
import { db } from '../config/database.config';
import { generateToken } from '../utils/jwt.util';
import { APP_CONFIG, ERROR_MESSAGES } from '../utils/constants';
import { EmailService } from './email.service';
import { AuthenticatedUser, MagicLinkData } from '../types/auth.types';

export class AuthService {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  async sendMagicLink(email: string): Promise<void> {
    // Generate secure token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + APP_CONFIG.MAGIC_LINK_EXPIRES_MINUTES * 60 * 1000);

    // Check if user exists
    let user = await db.user.findUnique({
      where: { email },
    });

    // Create magic link record (with or without userId)
    await db.magicLink.create({
      data: {
        email,
        token,
        expiresAt,
        userId: user?.id || null, // Will be null for new users
      },
    });

    // Send email
    const magicLinkUrl = `${APP_CONFIG.FRONTEND_URL}/auth/verify?token=${token}`;
    await this.emailService.sendMagicLink(email, magicLinkUrl, user?.displayName || undefined);
  }

  async verifyMagicLink(token: string): Promise<{ user: AuthenticatedUser; accessToken: string; isNewUser: boolean }> {
    // Find and validate magic link
    const magicLink = await db.magicLink.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!magicLink) {
      throw new Error(ERROR_MESSAGES.INVALID_TOKEN);
    }

    if (magicLink.used) {
      throw new Error(ERROR_MESSAGES.MAGIC_LINK_USED);
    }

    if (magicLink.expiresAt < new Date()) {
      throw new Error(ERROR_MESSAGES.MAGIC_LINK_EXPIRED);
    }

    let user: User;
    let isNewUser = false;

    // Get or create user
    if (magicLink.user) {
      user = magicLink.user;
    } else {
      // Create new user
      user = await db.user.create({
        data: {
          email: magicLink.email,
          emailVerified: true,
        },
      });
      isNewUser = true;
    }

    // Mark magic link as used
    await db.magicLink.update({
      where: { id: magicLink.id },
      data: { used: true, userId: user.id },
    });

    // Mark email as verified if not already
    if (!user.emailVerified) {
      user = await db.user.update({
        where: { id: user.id },
        data: { emailVerified: true },
      });
    }

    // Generate JWT token
    const accessToken = generateToken({
      userId: user.id,
      email: user.email,
    });

    // Convert dates to strings for response
    const authenticatedUser: AuthenticatedUser = {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };

    return {
      user: authenticatedUser,
      accessToken,
      isNewUser,
    };
  }

  async getUserById(userId: string): Promise<AuthenticatedUser | null> {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  async getUserByEmail(email: string): Promise<AuthenticatedUser | null> {
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  async updateUserProfile(
    userId: string,
    data: {
      username?: string;
      displayName?: string;
      bio?: string;
      avatar?: string;
    }
  ): Promise<AuthenticatedUser> {
    // Check if username is taken (if provided)
    if (data.username) {
      const existingUser = await db.user.findFirst({
        where: {
          username: data.username,
          id: { not: userId },
        },
      });

      if (existingUser) {
        throw new Error(ERROR_MESSAGES.USERNAME_TAKEN);
      }
    }

    const user = await db.user.update({
      where: { id: userId },
      data,
    });

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  async deleteExpiredMagicLinks(): Promise<void> {
    await db.magicLink.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
  }

  async getUserStats(userId: string): Promise<{
    spotsCount: number;
    ratingsCount: number;
    collectionsCount: number;
    reputation: number;
  }> {
    const [spotsCount, ratingsCount, collectionsCount, user] = await Promise.all([
      db.spot.count({ where: { userId } }),
      db.spotRating.count({ where: { userId } }),
      db.collection.count({ where: { userId } }),
      db.user.findUnique({ where: { id: userId }, select: { reputation: true } }),
    ]);

    return {
      spotsCount,
      ratingsCount,
      collectionsCount,
      reputation: user?.reputation || 0,
    };
  }
}
