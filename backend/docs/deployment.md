# SpotX Backend Deployment Guide

## Overview

This guide covers deploying the SpotX backend API to production environments. The application is designed to be deployed on cloud platforms with PostgreSQL database and Cloudflare R2 for file storage.

## Prerequisites

- Node.js 18+

- PostgreSQL 14+ with PostGIS extension

- Cloudflare account with R2 storage

- Email service (Gmail, SendGrid, etc.)

- Domain name (optional but recommended)

## Environment Setup

### Production Environment Variables

Create a `.env.production` file with the following variables:

```
# Database
DATABASE_URL="postgresql://username:password@host:5432/spotx_prod?schema=public"

# JWT Security
JWT_SECRET="your-very-secure-production-jwt-secret-key-min-32-chars"
JWT_EXPIRES_IN="7d"

# Email Configuration
EMAIL_FROM="noreply@yourdomain.com"
EMAIL_SERVICE="gmail"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-production-email@gmail.com"
EMAIL_PASS="your-app-specific-password"

# Cloudflare R2 Storage
R2_ACCESS_KEY_ID="your-production-r2-access-key"
R2_SECRET_ACCESS_KEY="your-production-r2-secret-key"
R2_BUCKET_NAME="spotx-prod-uploads"
R2_ACCOUNT_ID="your-cloudflare-account-id"
R2_PUBLIC_URL="https://spotx-uploads.yourdomain.com"

# Application Configuration
NODE_ENV="production"
PORT="3001"
FRONTEND_URL="https://spotx.yourdomain.com"
API_BASE_URL="https://api.spotx.yourdomain.com"

# Security & Performance
BCRYPT_SALT_ROUNDS="12"
RATE_LIMIT_WINDOW_MS="900000"
RATE_LIMIT_MAX_REQUESTS="100"
MAGIC_LINK_EXPIRES_MINUTES="15"

# File Upload Limits
MAX_FILE_SIZE_MB="10"
ALLOWED_FILE_TYPES="image/jpeg,image/png,image/webp"
```

## Database Setup

### 1. PostgreSQL with PostGIS

Install PostgreSQL and PostGIS extension:

```
-- Connect to your PostgreSQL instance
CREATE DATABASE spotx_prod;

-- Connect to the spotx_prod database
\c spotx_prod;

-- Enable PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;

-- Verify PostGIS installation
SELECT postgis_version();
```

### 2. Run Migrations

```
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Seed the database with initial data
npm run db:seed
```

## Cloudflare R2 Setup

### 1. Create R2 Bucket

1. $1

2. $1

3. $1

Configure bucket settings:

- **Public Access**: Enable for public file access

- **CORS Policy**: Configure for your domain

### 2. CORS Configuration

Add CORS policy to your R2 bucket:

```
[
  {
    "AllowedOrigins": [
      "https://yourdomain.com",
      "https://api.yourdomain.com"
    ],
    "AllowedMethods": [
      "GET",
      "PUT",
      "POST",
      "DELETE"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [
      "ETag"
    ],
    "MaxAgeSeconds": 3000
  }
]
```

### 3. Generate API Tokens

1. $1

Create token with permissions:

- **Object Read & Write**

- **Scope**: Specific bucket

2. $1

### 4. Custom Domain (Optional)

Set up a custom domain for R2 bucket:

1. $1

2. $1

3. $1

## Deployment Options

### Option 1: Railway

Railway provides easy deployment with PostgreSQL:

**Connect Repository**:
```
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

**Configure Services**:

- Add PostgreSQL service

- Set environment variables

- Configure custom domain

**Database Setup**:
```
# Connect to Railway PostgreSQL
railway run npx prisma migrate deploy
railway run npm run db:seed
```

### Option 2: Heroku

Deploy to Heroku with Heroku Postgres:

**Create Heroku App**:
```
# Install Heroku CLI
heroku create spotx-api

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:mini

# Enable PostGIS
heroku pg:psql -c "CREATE EXTENSION IF NOT EXISTS postgis;"
```

**Configure Environment**:
```
# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-secret
# ... set all other environment variables
```

**Deploy**:
```
git push heroku main

# Run migrations
heroku run npx prisma migrate deploy
heroku run npm run db:seed
```

### Option 3: DigitalOcean App Platform

**Create App**:

- Connect GitHub repository

- Configure build and run commands

**Database**:

- Create DigitalOcean Managed PostgreSQL

- Enable PostGIS extension

**Environment Variables**:

- Set all required environment variables

- Configure custom domain

### Option 4: AWS/Google Cloud/Azure

For cloud platforms:

**Container Deployment**:
```
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001

USER node
CMD ["npm", "start"]
```

**Database**:

- Use managed PostgreSQL service

- Enable PostGIS extension

- Configure connection string

**Load Balancer**:

- Configure SSL/TLS termination

- Set up health checks on `/health`

## Security Checklist

### SSL/TLS

-  Enable HTTPS with valid SSL certificate

-  Redirect HTTP to HTTPS

-  Use HSTS headers

### Environment

-  Secure JWT secret (min 32 characters)

-  Strong database passwords

-  Rotate API keys regularly

-  Limit environment variable access

### Database

-  Enable connection encryption

-  Use connection pooling

-  Regular backups configured

-  Access limited to application IPs

### API Security

-  Rate limiting configured

-  CORS properly configured

-  Security headers enabled (Helmet.js)

-  Input validation on all endpoints

### File Storage

-  R2 bucket permissions configured

-  File type validation enforced

-  File size limits enforced

-  Malware scanning (optional)

## Monitoring & Logging

### Health Checks

The API provides health check endpoints:

- `GET /health` - Basic health check

- `GET /api` - API info and endpoints

### Logging

Configure structured logging:

```
// In production, use structured logging
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

### Metrics

Monitor key metrics:

- Request response times

- Error rates

- Database connection pool

- Memory and CPU usage

- File upload success rates

## Backup & Recovery

### Database Backups

```
# Automated daily backups
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql

# Point-in-time recovery setup
# Configure WAL archiving for PostgreSQL
```

### File Storage Backups

```
# R2 bucket replication or backup
# Use Cloudflare's built-in durability
# Consider cross-region replication for critical data
```

## Performance Optimization

### Database

-  Connection pooling configured

-  Query optimization with indexes

-  Regular VACUUM and ANALYZE

-  Monitor slow queries

### API

-  Response compression enabled

-  Caching headers configured

-  Rate limiting tuned

-  Response time monitoring

### File Storage

-  CDN configured for R2

-  Image optimization pipeline

-  Lazy loading for large files

-  Cache-Control headers set

## Troubleshooting

### Common Issues

**Database Connection Issues**:
```
# Check connection string
# Verify SSL requirements
# Check firewall rules
npx prisma db execute --stdin < test-connection.sql
```

**File Upload Failures**:
```
# Verify R2 credentials
# Check CORS configuration
# Validate file size limits
```

**Email Delivery Issues**:
```
# Verify SMTP credentials
# Check spam filters
# Test with different email providers
```

### Debug Mode

Enable debug logging:

```
NODE_ENV=development npm start
# Or set specific debug flags
DEBUG=spotx:* npm start
```

## Scaling Considerations

### Horizontal Scaling

- Use load balancer with session affinity

- Share JWT secret across instances

- Use external session store if needed

### Database Scaling

- Read replicas for read-heavy workloads

- Connection pooling (PgBouncer)

- Database sharding for very large datasets

### File Storage Scaling

- R2 automatically scales

- Consider CDN for global distribution

- Implement file compression/optimization

## Support

For deployment issues:

1. $1

2. $1

3. $1

4. $1

5. $1

Remember to test thoroughly in a staging environment before deploying to production!