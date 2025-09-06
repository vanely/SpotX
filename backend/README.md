# SpotX - Community-Driven Spots Repository

Show Image
Show Image
Show Image
SpotX is a community-driven platform for discovering and sharing spots for outdoor activities like skateboarding, rollerblading, parkour, BMX, and more. Users can contribute spots, rate and tag them, create collections, and discover new places through an interactive map interface.

## 🚀 Features

### Core Features

- **🗺️ Interactive Map Discovery** - Find spots near you with location-based search

- **📍 Community Contributions** - Add new spots with photos, descriptions, and precise coordinates

- **🏷️ Smart Tagging System** - Tag spots with attributes like surface type, difficulty, features

- **⭐ Rating & Reviews** - Community-driven rating system with comments

- **📚 Collections** - Create and share curated lists of favorite spots

- **🔐 Magic Link Authentication** - Secure, password-less login via email

- **📤 File Upload** - Upload photos directly to Cloudflare R2 storage

- **🏆 Reputation System** - Gamified contributions with user reputation scores

### Technical Features

- **🌍 PostGIS Integration** - Advanced geospatial queries and location search

- **🔧 Type-Safe API** - Full TypeScript implementation with Zod validation

- **📊 Real-time Stats** - Community statistics and analytics

- **🛡️ Security First** - Rate limiting, CORS, input validation, JWT auth

- **🧪 Comprehensive Testing** - Full test coverage with Jest

- **📈 Scalable Architecture** - Designed for horizontal scaling

## 🏗️ Architecture

### Backend Stack

- **Runtime**: Node.js + TypeScript

- **Framework**: Express.js

- **Database**: PostgreSQL with PostGIS extension

- **ORM**: Prisma

- **Authentication**: JWT + Email magic links

- **File Storage**: Cloudflare R2 (S3-compatible)

- **Validation**: Zod

- **Testing**: Jest + Supertest

- **Security**: Helmet.js, CORS, Rate limiting

### Frontend Stack (Coming Next)

- **Framework**: React 18 + TypeScript

- **Build Tool**: Vite

- **Router**: React Router v6

- **UI Library**: shadcn/ui + Tailwind CSS

- **State Management**: TanStack Query v5 + Zustand

- **Maps**: MapLibre GL JS + OpenStreetMap

## 🗂️ Project Structure

```
spotx/
├── backend/                 # Express.js API server
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Auth, validation, errors
│   │   ├── routes/          # API route definitions
│   │   ├── utils/           # Helper functions
│   │   ├── types/           # TypeScript definitions
│   │   └── config/          # Database, R2, email setup
│   ├── prisma/              # Database schema & migrations
│   ├── tests/               # Test suites
│   └── docs/                # API & deployment docs
├── frontend/                # React application (coming next)
└── docs/                    # Project documentation
```

## 🛠️ API Endpoints

### Authentication

- `POST /api/auth/send-magic-link` - Send magic link email

- `POST /api/auth/verify-magic-link` - Verify magic link and login

- `GET /api/auth/profile` - Get current user profile

- `PUT /api/auth/profile` - Update user profile

- `GET /api/auth/validate` - Validate JWT token

### Spots Management

- `GET /api/spots/search` - Search spots with filters

- `GET /api/spots/nearby` - Get nearby spots for map

- `GET /api/spots/:id` - Get spot details

- `POST /api/spots` - Create new spot

- `PUT /api/spots/:id` - Update spot

- `DELETE /api/spots/:id` - Delete spot

- `POST /api/spots/rate` - Rate a spot

- `POST /api/spots/tag` - Add tag to spot

### Categories & Tags

- `GET /api/categories` - Get all categories

- `GET /api/categories/official` - Get official categories

- `POST /api/categories/propose` - Propose new category

- `GET /api/categories/tags/all` - Get all tags

- `GET /api/categories/tags/popular` - Get popular tags

- `POST /api/categories/tags` - Create new tag

### Users & Collections

- `GET /api/users/search` - Search users

- `GET /api/users/:id` - Get user profile

- `GET /api/users/me/collections` - Get my collections

- `POST /api/users/collections` - Create collection

- `PUT /api/users/collections/:id` - Update collection

- `POST /api/users/collections/add-spot` - Add spot to collection

### File Uploads

- `POST /api/uploads/sign` - Generate presigned upload URL

- `POST /api/uploads/sign-multiple` - Generate multiple upload URLs

- `POST /api/uploads/validate` - Validate file before upload

## 🚀 Quick Start

### Prerequisites

- Node.js 18+

- PostgreSQL 14+ with PostGIS

- Cloudflare account with R2 storage

- Email service (Gmail, SendGrid, etc.)

### Backend Setup

**Clone and Install**
```
git clone <repository-url>
cd spotx/backend
npm install
```

**Environment Configuration**
```
cp .env.example .env
# Edit .env with your configuration
```

**Database Setup**
```
# Create PostgreSQL database with PostGIS
createdb spotx_dev
psql spotx_dev -c "CREATE EXTENSION IF NOT EXISTS postgis;"

# Run migrations and seed data
npx prisma migrate dev
npm run db:seed
```

**Start Development Server**
```
npm run dev
```

**Verify Installation**
```
curl http://localhost:3001/health
curl http://localhost:3001/api
```

### Environment Variables

```
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/spotx_dev"

# JWT Authentication
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Email Configuration
EMAIL_FROM="noreply@spotx.app"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"

# Cloudflare R2 Storage
R2_ACCESS_KEY_ID="your-r2-access-key-id"
R2_SECRET_ACCESS_KEY="your-r2-secret-access-key"
R2_BUCKET_NAME="spotx-uploads"
R2_ACCOUNT_ID="your-cloudflare-account-id"
R2_PUBLIC_URL="https://your-bucket.r2.dev"

# Application
NODE_ENV="development"
PORT="3001"
FRONTEND_URL="http://localhost:5173"
```

## 🧪 Testing

```
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test auth.test.ts
```

## 📚 Documentation

- [API Documentation](docs/api.md) - Complete API reference

- [Deployment Guide](docs/deployment.md) - Production deployment instructions

- [Database Schema](backend/prisma/schema.prisma) - Data model documentation

## 🎯 Development Status

### ✅ Completed (Backend)

-  Authentication system with magic links

-  User management and profiles

-  Spots CRUD operations with PostGIS

-  Categories and tags management

-  Collections and curation features

-  File upload with Cloudflare R2

-  Search and filtering

-  Rating and tagging system

-  Comprehensive test suite

-  API documentation

-  Security middleware

-  Rate limiting and validation

### 🚧 In Progress

-  Frontend React application

-  Interactive map with MapLibre

-  Mobile-responsive UI

-  Real-time features

-  Push notifications

### 🔮 Planned Features

-  Event system for meetups

-  Advanced moderation tools

-  Analytics dashboard

-  Mobile app (React Native)

-  Social features and following

-  Achievement system

-  Integration with external APIs

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines:

1. $1

2. $1

3. $1

4. $1

5. $1

### Development Guidelines

- Follow TypeScript best practices

- Write tests for new features

- Use conventional commit messages

- Update documentation as needed

- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **PostGIS** for powerful geospatial capabilities

- **Prisma** for excellent TypeScript ORM

- **Cloudflare** for reliable R2 storage

- **OpenStreetMap** for map data

- **shadcn/ui** for beautiful UI components

## 📞 Support

- 📧 Email: [support@spotx.app](mailto:support@spotx.app)

- 💬 Discord: [Join our community](https://discord.gg/spotx)

- 🐛 Issues: [GitHub Issues](https://github.com/spotx/spotx/issues)

- 📖 Docs: [Documentation](https://docs.spotx.app)

**Happy Spot Hunting! 🛹🗺️**

Made with ❤️ by the SpotX team