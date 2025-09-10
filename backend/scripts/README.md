# Database Setup Scripts

This directory contains scripts to help manage the SpotX database operations in Docker containers.

## Database Setup Script (`db-setup.sh`)

A comprehensive script for managing Prisma database operations in Docker containers.

### Usage

```bash
# Using the script directly
./scripts/db-setup.sh <command> [options]

# Using npm scripts (recommended)
npm run db:<command>
```

### Available Commands

| Command | Description | npm Script |
|---------|-------------|------------|
| `setup` | Complete database setup (generate client + push schema) | `npm run db:setup` |
| `generate` | Generate Prisma client | `npm run db:generate` |
| `push` | Push schema to database (development) | `npm run db:push` |
| `migrate <name>` | Create a new migration with given name | `npm run db:migrate <name>` |
| `apply` | Apply pending migrations | `npm run db:apply` |
| `status` | Check migration status | `npm run db:status` |
| `reset` | Reset database (WARNING: deletes all data) | `npm run db:reset` |
| `seed` | Seed database with initial data | `npm run db:seed` |
| `info` | Show database connection information | `npm run db:info` |
| `shell` | Open PostgreSQL shell | `npm run db:shell` |

### Examples

```bash
# Complete database setup (recommended for first time)
npm run db:setup

# Create a new migration
./scripts/db-setup.sh migrate add_user_preferences

# Check migration status
npm run db:status

# Push schema changes (development only)
npm run db:push

# Open database shell
npm run db:shell
```

### Database Connection Info

- **Host**: localhost
- **Port**: 5432
- **Database**: spotx_db
- **User**: spotx_user
- **Password**: secure_password_2024

### pgAdmin Access

- **URL**: http://localhost:8080
- **Email**: admin@spotx.app
- **Password**: admin123

## Workflow

### Initial Setup
1. Start Docker services: `docker-compose -f docker-compose.dev.yml up -d`
2. Run database setup: `npm run db:setup`

### Development Workflow
1. Make changes to `prisma/schema.prisma`
2. Push changes: `npm run db:push` (for development)
3. Or create migration: `./scripts/db-setup.sh migrate <name>` (for production)

### Production Deployment
1. Create migrations: `./scripts/db-setup.sh migrate <name>`
2. Apply migrations: `./scripts/db-setup.sh apply`

## Troubleshooting

### Services Not Running
The script will automatically start Docker services if they're not running.

### Migration Issues
- Use `npm run db:status` to check migration status
- Use `npm run db:reset` to reset database (WARNING: deletes all data)

### Connection Issues
- Ensure Docker services are running: `docker-compose -f docker-compose.dev.yml ps`
- Check database connection info: `npm run db:info`
