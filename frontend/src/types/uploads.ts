export interface FileValidationRequest {
  fileName: string;
  fileType: string;
  fileSize: number;
}

export interface FileValidationResponse {
  isValid: boolean;
  validations: {
    validType: boolean;
    validSize: boolean;
    maxSize: number;
    allowedTypes: string[];
  };
  fileName: string;
  fileType: string;
  fileSize: number;
}

export interface PresignedUrlRequest {
  fileName: string;
  fileType: string;
  fileSize: number;
}

export interface PresignedUrlResponse {
  uploadUrl: string;
  fileKey: string;
  publicUrl: string;
  fields?: Record<string, string>;
}

export interface FileInfo {
  key: string;
  isValid: boolean;
}
