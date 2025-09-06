import { api } from '@/lib/api-client';
import axios from 'axios';
import { 
  FileValidationRequest, 
  FileValidationResponse, 
  PresignedUrlRequest, 
  PresignedUrlResponse,
  FileInfo
} from '@/types/uploads';

export const validateFile = async (data: FileValidationRequest): Promise<FileValidationResponse> => {
  return api.post('/uploads/validate', data);
};

export const getPresignedUrl = async (data: PresignedUrlRequest): Promise<PresignedUrlResponse> => {
  return api.post('/uploads/sign', data);
};

export const getMultiplePresignedUrls = async (files: PresignedUrlRequest[]): Promise<PresignedUrlResponse[]> => {
  return api.post('/uploads/sign-multiple', { files });
};

export const uploadToPresignedUrl = async (
  presignedData: PresignedUrlResponse,
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {
  try {
    // Check if it's a Cloudflare R2 presigned URL (has fields property)
    if (presignedData.fields) {
      // Cloudflare R2 / S3 compatible POST upload
      const formData = new FormData();
      
      // Add all the required fields first
      Object.entries(presignedData.fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // File must be the last field
      formData.append('file', file);
      
      await axios.post(presignedData.uploadUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress(progress);
          }
        },
      });
    } else {
      // Direct PUT upload
      await axios.put(presignedData.uploadUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress(progress);
          }
        },
      });
    }
    
    return presignedData.publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const getFileInfo = async (url: string): Promise<FileInfo> => {
  return api.get('/uploads/info', { params: { url } });
};

export const deleteFile = async (fileKey: string): Promise<{ success: boolean }> => {
  return api.delete(`/uploads/file/${fileKey}`);
};
