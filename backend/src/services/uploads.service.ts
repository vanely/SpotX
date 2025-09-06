import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2Client, r2Config } from '@/config/r2.config';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { ERROR_MESSAGES } from '@/utils/constants';

export class UploadsService {
  async generatePresignedUploadUrl(
    fileName: string,
    fileType: string,
    fileSize: number,
    userId: string
  ): Promise<{
    uploadUrl: string;
    fileKey: string;
    publicUrl: string;
  }> {
    // Validate file type
    if (!r2Config.allowedFileTypes.includes(fileType)) {
      throw new Error(ERROR_MESSAGES.INVALID_FILE_TYPE);
    }

    // Validate file size
    if (fileSize > r2Config.maxFileSize) {
      throw new Error(ERROR_MESSAGES.FILE_TOO_LARGE);
    }

    // Generate unique file key
    const fileExtension = path.extname(fileName);
    const uniqueFileName = `${uuidv4()}${fileExtension}`;
    const fileKey = `uploads/${userId}/${Date.now()}-${uniqueFileName}`;

    // Create presigned URL for upload
    const command = new PutObjectCommand({
      Bucket: r2Config.bucketName,
      Key: fileKey,
      ContentType: fileType,
      ContentLength: fileSize,
    });

    const uploadUrl = await getSignedUrl(r2Client, command, {
      expiresIn: r2Config.presignedUrlExpires,
    });

    // Generate public URL
    const publicUrl = `${r2Config.publicUrl}/${fileKey}`;

    return {
      uploadUrl,
      fileKey,
      publicUrl,
    };
  }

  async generatePresignedUploadUrls(
    files: Array<{
      fileName: string;
      fileType: string;
      fileSize: number;
    }>,
    userId: string
  ): Promise<Array<{
    fileName: string;
    uploadUrl: string;
    fileKey: string;
    publicUrl: string;
  }>> {
    const results = await Promise.all(
      files.map(async (file) => {
        const result = await this.generatePresignedUploadUrl(
          file.fileName,
          file.fileType,
          file.fileSize,
          userId
        );
        return {
          fileName: file.fileName,
          ...result,
        };
      })
    );

    return results;
  }

  async deleteFile(fileKey: string): Promise<void> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: r2Config.bucketName,
        Key: fileKey,
      });

      await r2Client.send(command);
    } catch (error) {
      console.error('Failed to delete file from R2:', error);
      throw new Error('Failed to delete file');
    }
  }

  async deleteFiles(fileKeys: string[]): Promise<void> {
    await Promise.all(fileKeys.map((key) => this.deleteFile(key)));
  }

  getPublicUrl(fileKey: string): string {
    return `${r2Config.publicUrl}/${fileKey}`;
  }

  extractFileKeyFromUrl(url: string): string | null {
    try {
      const publicUrlBase = r2Config.publicUrl;
      if (publicUrlBase && url.startsWith(publicUrlBase)) {
        return url.substring(publicUrlBase.length + 1);
      }
      return null;
    } catch {
      return null;
    }
  }

  validateFileType(fileType: string): boolean {
    return r2Config.allowedFileTypes.includes(fileType);
  }

  validateFileSize(fileSize: number): boolean {
    return fileSize <= r2Config.maxFileSize;
  }

  generateThumbnailKey(originalKey: string): string {
    const pathParts = originalKey.split('/');
    const fileName = pathParts.pop() || '';
    const directory = pathParts.join('/');
    const nameWithoutExt = path.parse(fileName).name;
    const ext = path.parse(fileName).ext;
    
    return `${directory}/thumbnails/${nameWithoutExt}_thumb${ext}`;
  }

  // Helper to get file info from URL
  getFileInfo(url: string): { key: string; isValid: boolean } {
    const key = this.extractFileKeyFromUrl(url);
    return {
      key: key || '',
      isValid: !!key,
    };
  }
}
