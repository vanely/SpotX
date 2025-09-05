# SpotX API Documentation

## Overview

The SpotX API is a RESTful API built with Express.js, TypeScript, and PostgreSQL. It provides endpoints for authentication, file uploads, and community-driven spot management.

## Base URL

- Development: `http://localhost:3001/api`

- Production: `https://api.spotx.app/api`

## Authentication

The API uses JWT (JSON Web Tokens) with magic link authentication. Users receive a magic link via email to sign in.

### Headers

All protected endpoints require an Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Response Format

All API responses follow this format:

```
{
  "success": boolean,
  "message"?: string,
  "data"?: any,
  "errors"?: string[]
}
```

## Endpoints

### Authentication

#### Send Magic Link

Send a magic link to the user's email for authentication.

```
POST /auth/send-magic-link
```

**Request Body:**

```
{
  "email": "user@example.com"
}
```

**Response:**

```
{
  "success": true,
  "message": "Magic link sent to your email"
}
```

#### Verify Magic Link

Verify the magic link token and authenticate the user.

```
POST /auth/verify-magic-link
```

**Request Body:**

```
{
  "token": "magic_link_token"
}
```

**Response:**

```
{
  "success": true,
  "message": "Successfully logged in",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "username": "john_doe",
      "displayName": "John Doe",
      "avatar": "https://...",
      "bio": "Skateboarding enthusiast",
      "reputation": 150,
      "emailVerified": true,
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    "accessToken": "jwt_token",
    "isNewUser": false
  }
}
```

#### Get Profile

Get the current user's profile and stats.

```
GET /auth/profile
Authorization: Bearer <token>
```

**Response:**

```
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "username": "john_doe",
      "displayName": "John Doe",
      "avatar": "https://...",
      "bio": "Skateboarding enthusiast",
      "reputation": 150,
      "emailVerified": true,
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    "stats": {
      "spotsCount": 25,
      "ratingsCount": 50,
      "collectionsCount": 3,
      "reputation": 150
    }
  }
}
```

#### Update Profile

Update the current user's profile information.

```
PUT /auth/profile
Authorization: Bearer <token>
```

**Request Body:**

```
{
  "username": "new_username",
  "displayName": "New Display Name",
  "bio": "Updated bio text"
}
```

**Response:**

```
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      // Updated user object
    }
  }
}
```

#### Validate Token

Validate the current JWT token.

```
GET /auth/validate
Authorization: Bearer <token>
```

**Response:**

```
{
  "success": true,
  "data": {
    "user": {
      // User object
    },
    "isValid": true
  }
}
```

#### Logout

Logout and cleanup expired magic links.

```
POST /auth/logout
Authorization: Bearer <token>
```

**Response:**

```
{
  "success": true,
  "message": "Successfully logged out"
}
```

#### Get User by ID

Get public user profile by user ID.

```
GET /auth/users/{userId}
```

**Response:**

```
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "username": "john_doe",
      "displayName": "John Doe",
      "avatar": "https://...",
      "bio": "Skateboarding enthusiast",
      "reputation": 150,
      "createdAt": "2023-01-01T00:00:00Z"
    },
    "stats": {
      "spotsCount": 25,
      "ratingsCount": 50,
      "collectionsCount": 3,
      "reputation": 150
    }
  }
}
```

### File Uploads

#### Generate Upload URL

Generate a presigned URL for uploading a single file to Cloudflare R2.

```
POST /uploads/sign
Authorization: Bearer <token>
```

**Request Body:**

```
{
  "fileName": "spot-photo.jpg",
  "fileType": "image/jpeg",
  "fileSize": 2048576
}
```

**Response:**

```
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "uploadUrl": "https://...",
    "fileKey": "uploads/user-id/timestamp-unique-name.jpg",
    "publicUrl": "https://pub-domain.r2.dev/uploads/user-id/timestamp-unique-name.jpg"
  }
}
```

#### Generate Multiple Upload URLs

Generate presigned URLs for uploading multiple files.

```
POST /uploads/sign-multiple
Authorization: Bearer <token>
```

**Request Body:**

```
{
  "files": [
    {
      "fileName": "photo1.jpg",
      "fileType": "image/jpeg",
      "fileSize": 2048576
    },
    {
      "fileName": "photo2.png",
      "fileType": "image/png",
      "fileSize": 1536000
    }
  ]
}
```

**Response:**

```
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "files": [
      {
        "fileName": "photo1.jpg",
        "uploadUrl": "https://...",
        "fileKey": "uploads/user-id/timestamp-photo1.jpg",
        "publicUrl": "https://pub-domain.r2.dev/uploads/user-id/timestamp-photo1.jpg"
      },
      {
        "fileName": "photo2.png",
        "uploadUrl": "https://...",
        "fileKey": "uploads/user-id/timestamp-photo2.png",
        "publicUrl": "https://pub-domain.r2.dev/uploads/user-id/timestamp-photo2.png"
      }
    ]
  }
}
```

#### Validate File

Validate file before upload.

```
POST /uploads/validate
Authorization: Bearer <token>
```

**Request Body:**

```
{
  "fileName": "photo.jpg",
  "fileType": "image/jpeg",
  "fileSize": 2048576
}
```

**Response:**

```
{
  "success": true,
  "data": {
    "isValid": true,
    "validations": {
      "validType": true,
      "validSize": true,
      "maxSize": 10485760,
      "allowedTypes": ["image/jpeg", "image/png", "image/webp"]
    },
    "fileName": "photo.jpg",
    "fileType": "image/jpeg",
    "fileSize": 2048576
  }
}
```

#### Delete File

Delete a file from storage.

```
DELETE /uploads/file/{fileKey}
Authorization: Bearer <token>
```

**Response:**

```
{
  "success": true,
  "message": "File deleted successfully"
}
```

#### Get File Info

Get information about a file from its URL.

```
GET /uploads/info?url={fileUrl}
Authorization: Bearer <token>
```

**Response:**

```
{
  "success": true,
  "data": {
    "key": "uploads/user-id/timestamp-photo.jpg",
    "isValid": true
  }
}
```

## Error Codes

```
Status CodeDescription400Bad Request - Invalid input data401Unauthorized - Missing or invalid token403Forbidden - Access denied404Not Found - Resource not found409Conflict - Resource already exists422Unprocessable Entity - Validation error429Too Many Requests - Rate limit exceeded500Internal Server Error - Server error
```

## Rate Limiting

The API implements rate limiting to prevent abuse:

- **Window**: 15 minutes

- **Max Requests**: 100 per IP address per window

- **Headers**: Rate limit info is included in response headers

## File Upload Guidelines

### Supported File Types

- `image/jpeg`

- `image/png`

- `image/webp`

### File Size Limits

- Maximum file size: 10MB

- Recommended: Under 5MB for better performance

### Upload Process

1. $1

2. $1

3. $1

## Security

- All sensitive endpoints require JWT authentication

- Rate limiting prevents abuse

- File uploads are validated for type and size

- CORS is configured for allowed origins

- Security headers are applied with Helmet.js

## Development

### Environment Variables

Required environment variables for development:

```
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/spotx_dev?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Email
EMAIL_FROM="noreply@spotx.app"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"

# Cloudflare R2
R2_ACCESS_KEY_ID="your-r2-access-key-id"
R2_SECRET_ACCESS_KEY="your-r2-secret-access-key"
R2_BUCKET_NAME="spotx-uploads"
R2_ACCOUNT_ID="your-cloudflare-account-id"
R2_PUBLIC_URL="https://your-bucket.your-account-id.r2.cloudflarestorage.com"

# App Config
NODE_ENV="development"
PORT="3001"
FRONTEND_URL="http://localhost:5173"
API_BASE_URL="http://localhost:3001"
```

### Running Locally

1. $1

2. $1

3. $1

4. $1

5. $1

### Testing

Run the test suite:

```
npm test           # Run all tests
npm run test:watch # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```