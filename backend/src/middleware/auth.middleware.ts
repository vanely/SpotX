import { Request, Response, NextFunction } from 'express';
import { verifyToken, extractTokenFromHeader } from '@/utils/jwt.util';
import { AuthService } from '@/services/auth.service';
import { ERROR_MESSAGES, HTTP_STATUS } from '@/utils/constants';

const authService = new AuthService();

export interface AuthenticatedRequest extends Request {
  user: any;
  userId: string;
}

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (!token) {
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        message: ERROR_MESSAGES.UNAUTHORIZED,
      });
      return;
    }

    const payload = verifyToken(token);
    const user = await authService.getUserById(payload.userId);

    if (!user) {
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        message: ERROR_MESSAGES.USER_NOT_FOUND,
      });
      return;
    }

    // Attach user to request
    (req as AuthenticatedRequest).user = user;
    (req as AuthenticatedRequest).userId = user.id;

    next();
  } catch (error) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: error instanceof Error ? error.message : ERROR_MESSAGES.INVALID_TOKEN,
    });
  }
};

export const optionalAuthenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (token) {
      const payload = verifyToken(token);
      const user = await authService.getUserById(payload.userId);

      if (user) {
        (req as AuthenticatedRequest).user = user;
        (req as AuthenticatedRequest).userId = user.id;
      }
    }

    next();
  } catch (error) {
    // Silently fail for optional authentication
    next();
  }
};

export const requireEmailVerification = (req: Request, res: Response, next: NextFunction): void => {
  const user = (req as AuthenticatedRequest).user;

  if (!user?.emailVerified) {
    res.status(HTTP_STATUS.FORBIDDEN).json({
      success: false,
      message: 'Email verification required',
    });
    return;
  }

  next();
};
