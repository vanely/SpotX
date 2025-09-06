import { Response } from 'express';
import { UploadsService } from '@/services/uploads.service';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '@/utils/constants';
import { asyncHandler } from '@/middleware/error.middleware';
import { AuthenticatedRequest } from '@/middleware/auth.middleware';

export class UploadsController {
  private uploadsService: UploadsService;

  constructor() {
    this.uploadsService = new UploadsService();
  }

  // Generate presigned URL for single file upload
  generateUploadUrl = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { fileName, fileType, fileSize } = req.body;
    const userId = req.userId;

    const result = await this.uploadsService.generatePresignedUploadUrl(
      fileName,
      fileType,
      fileSize,
      userId
    );

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.FILE_UPLOADED,
      data: result,
    });
  });

  // Generate presigned URLs for multiple file uploads
  generateUploadUrls = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { files } = req.body; // Array of { fileName, fileType, fileSize }
    const userId = req.userId;

    const results = await this.uploadsService.generatePresignedUploadUrls(files, userId);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.FILE_UPLOADED,
      data: {
        files: results,
      },
    });
  });

  // Delete a file
  deleteFile = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { fileKey } = req.params;
    
    await this.uploadsService.deleteFile(fileKey as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'File deleted successfully',
    });
  });

  // Get file info
  getFileInfo = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { url } = req.query;

    if (!url || typeof url !== 'string') {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        message: 'URL parameter is required',
      });
      return;
    }

    const fileInfo = this.uploadsService.getFileInfo(url as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: fileInfo,
    });
  });

  // Validate file before upload
  validateFile = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { fileName, fileType, fileSize } = req.body;

    const validations = {
      validType: this.uploadsService.validateFileType(fileType),
      validSize: this.uploadsService.validateFileSize(fileSize),
      maxSize: 10 * 1024 * 1024, // 10MB in bytes
      allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
    };

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        isValid: validations.validType && validations.validSize,
        validations,
        fileName,
        fileType,
        fileSize,
      },
    });
  });
}
