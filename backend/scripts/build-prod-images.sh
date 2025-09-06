#!/bin/bash

# Production Image Build Script for SpotX
# This script builds all production Docker images needed for docker-compose.prod.yml

set -e  # Exit on any error

echo "🚀 Starting SpotX image builds..."

# Build API prod image
echo "📦 Building spotx-api:prod..."
docker build -f Dockerfile.api -t spotx-api:prod .

# Build PostgreSQL prod image
echo "🐘 Building spotx-postgres:prod..."
docker build -f Dockerfile.postgres -t spotx-postgres:prod .

echo "✅ All prod images built successfully!"
echo ""
echo "📋 Built images:"
docker images | grep spotx
echo ""
echo "🎯 Ready to run: docker-compose -f docker-compose.prod.yml up"
