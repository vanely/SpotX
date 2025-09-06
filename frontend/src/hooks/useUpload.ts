import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { uploadsApi } from '@/api';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '@/lib/constants';

interface FileUploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
}

interface UseUploadReturn {
  uploadState: Record<string, FileUploadState>;
  uploadFile: (file: File) => Promise<string | null>;
  uploadMultipleFiles: (files: File[]) => Promise<string[]>;
  validateFile: (file: File) => Promise<boolean>;
}

const useUpload = (): UseUploadReturn => {
  const [uploadState, setUploadState] = useState<Record<string, FileUploadState>>({});
  const { toast } = useToast();

  const validateFile = async (file: File): Promise<boolean> => {
    try {
      // Local basic validation
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast({
          title: 'Invalid file type',
          description: `File type ${file.type} is not allowed.`,
          variant: 'destructive',
        });
        return false;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: 'File too large',
          description: `Maximum file size is ${MAX_FILE_SIZE / (1024 * 1024)}MB.`,
          variant: 'destructive',
        });
        return false;
      }

      // Server-side validation
      const validationResult = await uploadsApi.validateFile({
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
      });

      if (!validationResult.isValid) {
        toast({
          title: 'File validation failed',
          description: 'The file does not meet server requirements.',
          variant: 'destructive',
        });
        return false;
      }

      return true;
    } catch (error) {
      toast({
        title: 'Validation error',
        description: error instanceof Error ? error.message : 'An error occurred during file validation.',
        variant: 'destructive',
      });
      return false;
    }
  };

  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      // Initialize state for this file
      setUploadState((prev) => ({
        ...prev,
        [file.name]: {
          isUploading: true,
          progress: 0,
          error: null,
        },
      }));

      // Validate file
      const isValid = await validateFile(file);
      if (!isValid) {
        setUploadState((prev) => ({
          ...prev,
          [file.name]: {
            isUploading: false,
            progress: 0,
            error: 'File validation failed',
          },
        }));
        return null;
      }

      // Get presigned URL
      const presignedData = await uploadsApi.getPresignedUrl({
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
      });

      // Upload to storage
      const publicUrl = await uploadsApi.uploadToPresignedUrl(
        presignedData,
        file,
        (progress) => {
          setUploadState((prev) => ({
            ...prev,
            [file.name]: {
              ...prev[file.name],
              progress,
            },
          }));
        }
      );

      // Update state on success
      setUploadState((prev) => ({
        ...prev,
        [file.name]: {
          isUploading: false,
          progress: 100,
          error: null,
        },
      }));

      return publicUrl;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      
      setUploadState((prev) => ({
        ...prev,
        [file.name]: {
          isUploading: false,
          progress: 0,
          error: errorMessage,
        },
      }));
      
      toast({
        title: 'Upload failed',
        description: errorMessage,
        variant: 'destructive',
      });
      
      return null;
    }
  };

  const uploadMultipleFiles = async (files: File[]): Promise<string[]> => {
    // Validate all files first
    const validatedFiles = await Promise.all(
      files.map(async (file) => {
        const isValid = await validateFile(file);
        return { file, isValid };
      })
    );

    const validFiles = validatedFiles.filter((item) => item.isValid).map((item) => item.file);

    if (validFiles.length === 0) {
      toast({
        title: 'No valid files',
        description: 'None of the selected files are valid for upload.',
        variant: 'destructive',
      });
      return [];
    }

    // Upload all valid files in parallel
    const uploadPromises = validFiles.map((file) => uploadFile(file));
    const results = await Promise.all(uploadPromises);

    // Filter out any failed uploads
    const successfulUploads = results.filter((url): url is string => url !== null);

    return successfulUploads;
  };

  return {
    uploadState,
    uploadFile,
    uploadMultipleFiles,
    validateFile,
  };
};

export default useUpload;
