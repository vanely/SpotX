export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface ErrorResponse extends ApiResponse {
  success: false;
  message: string;
  errors?: string[];
  code?: string;
}

export interface SuccessResponse<T = any> extends ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export interface UploadUrlResponse {
  uploadUrl: string;
  fileKey: string;
  publicUrl: string;
}

export interface FileUploadRequest {
  fileName: string;
  fileType: string;
  fileSize: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface SortParams {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface RequestContext {
  userId?: string;
  user?: any;
  isAuthenticated: boolean;
}

// Express Request extension
declare global {
  namespace Express {
    interface Request {
      user?: any;
      context?: RequestContext;
    }
  }
}
