export const APP_CONFIG = {
  JWT_SECRET: process.env.JWT_SECRET || 'fallback-secret-key',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS || '12'),
  MAGIC_LINK_EXPIRES_MINUTES: parseInt(process.env.MAGIC_LINK_EXPIRES_MINUTES || '15'),
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3001',
  PORT: parseInt(process.env.PORT || '3001'),
};

export const RATE_LIMIT_CONFIG = {
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
};

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 1000,
  BIO_MAX_LENGTH: 500,
  LATITUDE_MIN: -90,
  LATITUDE_MAX: 90,
  LONGITUDE_MIN: -180,
  LONGITUDE_MAX: 180,
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_MESSAGES = {
  // Auth errors
  INVALID_EMAIL: 'Invalid email address',
  INVALID_TOKEN: 'Invalid or expired token',
  UNAUTHORIZED: 'Authorization required',
  FORBIDDEN: 'Access forbidden',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  USERNAME_TAKEN: 'Username already taken',
  MAGIC_LINK_EXPIRED: 'Magic link has expired',
  MAGIC_LINK_USED: 'Magic link has already been used',
  
  // Spot errors
  SPOT_NOT_FOUND: 'Spot not found',
  INVALID_COORDINATES: 'Invalid coordinates provided',
  SPOT_ALREADY_EXISTS: 'A spot already exists at this location',
  
  // Category errors
  CATEGORY_NOT_FOUND: 'Category not found',
  CATEGORY_ALREADY_EXISTS: 'Category already exists',
  
  // File upload errors
  FILE_TOO_LARGE: 'File size exceeds maximum allowed',
  INVALID_FILE_TYPE: 'Invalid file type',
  UPLOAD_FAILED: 'File upload failed',
  
  // General errors
  VALIDATION_ERROR: 'Validation error',
  INTERNAL_ERROR: 'Internal server error',
  NOT_FOUND: 'Resource not found',
  RATE_LIMIT_EXCEEDED: 'Too many requests, please try again later',
} as const;

export const SUCCESS_MESSAGES = {
  MAGIC_LINK_SENT: 'Magic link sent to your email',
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGOUT_SUCCESS: 'Successfully logged out',
  SPOT_CREATED: 'Spot created successfully',
  SPOT_UPDATED: 'Spot updated successfully',
  SPOT_DELETED: 'Spot deleted successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  COLLECTION_CREATED: 'Collection created successfully',
  FILE_UPLOADED: 'File uploaded successfully',
} as const;