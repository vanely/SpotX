import { Request, Response } from 'express';
import { AuthService } from '@/services/auth.service';
import { EmailService } from '@/services/email.service';
import { HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES } from '@/utils/constants';
import { asyncHandler } from '@/middleware/error.middleware';
import { AuthenticatedRequest } from '@/middleware/auth.middleware';
import { LoginRequest, VerifyMagicLinkRequest } from '@/types/auth.types';

export class AuthController {
  private authService: AuthService;
  private emailService: EmailService;

  constructor() {
    this.authService = new AuthService();
    this.emailService = new EmailService();
  }

  // Send magic link to user's email
  sendMagicLink = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email }: LoginRequest = req.body;

    await this.authService.sendMagicLink(email);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.MAGIC_LINK_SENT,
    });
  });

  // Verify magic link and authenticate user
  verifyMagicLink = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { token }: VerifyMagicLinkRequest = req.body;

    const result = await this.authService.verifyMagicLink(token);

    // Send welcome email for new users
    if (result.isNewUser) {
      try {
        await this.emailService.sendWelcomeEmail(result.user.email, result.user.displayName || undefined);
      } catch (error) {
        // Don't fail the login if welcome email fails
        console.error('Failed to send welcome email:', error);
      }
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
      data: {
        user: result.user,
        accessToken: result.accessToken,
        isNewUser: result.isNewUser,
      },
    });
  });

  // Get current user profile
  getProfile = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const user = req.user;
    const stats = await this.authService.getUserStats(user.id);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        user,
        stats,
      },
    });
  });

  // Update user profile
  updateProfile = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;
    const updateData = req.body;

    const updatedUser = await this.authService.updateUserProfile(userId, updateData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.PROFILE_UPDATED,
      data: {
        user: updatedUser,
      },
    });
  });

  // Logout (client-side token removal, server cleanup)
  logout = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    // Clean up expired magic links for this user
    await this.authService.deleteExpiredMagicLinks();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.LOGOUT_SUCCESS,
    });
  });

  // Validate current token (for client-side auth checks)
  validateToken = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const user = req.user;

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        user,
        isValid: true,
      },
    });
  });

  // Get user by ID (for admin or public profile views)
  getUserById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    const user = await this.authService.getUserById(userId as string);

    if (!user) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: ERROR_MESSAGES.USER_NOT_FOUND,
      });
      return;
    }

    // Remove sensitive information for public view
    const publicUser = {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      avatar: user.avatar,
      bio: user.bio,
      reputation: user.reputation,
      createdAt: user.createdAt,
    };

    const stats = await this.authService.getUserStats(user.id);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        user: publicUser,
        stats,
      },
    });
  });
}
