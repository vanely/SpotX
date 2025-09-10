#!/bin/bash

# Database Setup Script for SpotX Backend
# This script handles Prisma database operations in Docker containers

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
COMPOSE_FILE="docker-compose.dev.yml"
SERVICE_NAME="api"
DB_SERVICE_NAME="postgres"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Docker Compose is running
check_services() {
    print_status "Checking if Docker services are running..."
    
    if ! docker-compose -f $COMPOSE_FILE ps | grep -q "Up"; then
        print_warning "Docker services are not running. Starting them..."
        docker-compose -f $COMPOSE_FILE up -d
        print_status "Waiting for services to be healthy..."
        sleep 10
    else
        print_success "Docker services are running"
    fi
}

# Function to generate Prisma client
generate_client() {
    print_status "Generating Prisma client..."
    docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npx prisma generate
    print_success "Prisma client generated"
}

# Function to push schema to database (for development)
push_schema() {
    print_status "Pushing Prisma schema to database..."
    docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npx prisma db push
    print_success "Schema pushed to database"
}

# Function to create a new migration
create_migration() {
    if [ -z "$1" ]; then
        print_error "Migration name is required"
        echo "Usage: $0 migrate <migration_name>"
        exit 1
    fi
    
    local migration_name="$1"
    print_status "Creating migration: $migration_name"
    docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npx prisma migrate dev --name "$migration_name"
    print_success "Migration '$migration_name' created"
}

# Function to apply pending migrations
apply_migrations() {
    print_status "Applying pending migrations..."
    docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npx prisma migrate deploy
    print_success "Migrations applied"
}

# Function to reset database (WARNING: This will delete all data)
reset_database() {
    print_warning "This will DELETE ALL DATA in the database!"
    read -p "Are you sure you want to continue? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Resetting database..."
        docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npx prisma migrate reset --force
        print_success "Database reset completed"
    else
        print_status "Database reset cancelled"
    fi
}

# Function to check migration status
check_migration_status() {
    print_status "Checking migration status..."
    docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npx prisma migrate status
}

# Function to seed the database
seed_database() {
    print_status "Seeding database..."
    docker-compose -f $COMPOSE_FILE exec $SERVICE_NAME npm run db:seed
    print_success "Database seeded"
}

# Function to show database URL and connection info
show_db_info() {
    print_status "Database connection information:"
    echo "Host: localhost"
    echo "Port: 5432"
    echo "Database: spotx_db"
    echo "User: spotx_user"
    echo "Password: secure_password_2024"
    echo ""
    print_status "pgAdmin access:"
    echo "URL: http://localhost:8080"
    echo "Email: admin@spotx.app"
    echo "Password: admin123"
}

# Function to open database shell
open_db_shell() {
    print_status "Opening PostgreSQL shell..."
    docker-compose -f $COMPOSE_FILE exec $DB_SERVICE_NAME psql -U spotx_user -d spotx_db
}

# Function to show help
show_help() {
    echo "SpotX Database Setup Script"
    echo ""
    echo "Usage: $0 <command> [options]"
    echo ""
    echo "Commands:"
    echo "  setup           - Complete database setup (generate client + push schema)"
    echo "  generate        - Generate Prisma client"
    echo "  push            - Push schema to database (development)"
    echo "  migrate <name>  - Create a new migration with given name"
    echo "  apply           - Apply pending migrations"
    echo "  status          - Check migration status"
    echo "  reset           - Reset database (WARNING: deletes all data)"
    echo "  seed            - Seed database with initial data"
    echo "  info            - Show database connection information"
    echo "  shell           - Open PostgreSQL shell"
    echo "  help            - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup                    # Complete setup"
    echo "  $0 migrate add_user_table    # Create migration"
    echo "  $0 apply                     # Apply migrations"
    echo "  $0 status                    # Check status"
}

# Main script logic
main() {
    case "${1:-help}" in
        "setup")
            check_services
            generate_client
            push_schema
            print_success "Database setup completed!"
            ;;
        "generate")
            check_services
            generate_client
            ;;
        "push")
            check_services
            push_schema
            ;;
        "migrate")
            check_services
            create_migration "$2"
            ;;
        "apply")
            check_services
            apply_migrations
            ;;
        "status")
            check_services
            check_migration_status
            ;;
        "reset")
            check_services
            reset_database
            ;;
        "seed")
            check_services
            seed_database
            ;;
        "info")
            show_db_info
            ;;
        "shell")
            check_services
            open_db_shell
            ;;
        "help"|*)
            show_help
            ;;
    esac
}

# Run main function with all arguments
main "$@"
