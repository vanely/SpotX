.PHONY: help dev prod build-dev build-prod clean logs logs-dev logs-prod

# Default target
help:
	@echo "Available commands:"
	@echo "  dev          - Start development environment"
	@echo "  prod         - Start production environment"
	@echo "  build-dev    - Build development Docker image"
	@echo "  build-prod   - Build production Docker image"
	@echo "  clean        - Clean up Docker containers and images"
	@echo "  logs         - Show logs for all services"
	@echo "  logs-dev     - Show development logs"
	@echo "  logs-prod    - Show production logs"
	@echo "  stop         - Stop all services"
	@echo "  stop-dev     - Stop development services"
	@echo "  stop-prod    - Stop production services"

# Development commands
dev:
	docker-compose -f docker-compose.dev.yml up -d

dev-build:
	docker-compose -f docker-compose.dev.yml up -d --build

dev-logs:
	docker-compose -f docker-compose.dev.yml logs -f

stop-dev:
	docker-compose -f docker-compose.dev.yml down

# Production commands
prod:
	docker-compose -f docker-compose.prod.yml up -d

prod-build:
	docker-compose -f docker-compose.prod.yml up -d --build

prod-logs:
	docker-compose -f docker-compose.prod.yml logs -f

stop-prod:
	docker-compose -f docker-compose.prod.yml down

# Build commands
build-dev:
	docker build -f Dockerfile.dev -t spotx-frontend:dev .

build-prod:
	docker build -f Dockerfile.prod -t spotx-frontend:prod .

# Utility commands
clean:
	docker system prune -f
	docker volume prune -f
	docker image prune -f

logs:
	docker-compose logs -f

stop:
	docker-compose down

# Shell access
shell-dev:
	docker-compose -f docker-compose.dev.yml exec spotx-frontend-dev sh

shell-prod:
	docker-compose -f docker-compose.prod.yml exec spotx-frontend-prod sh
