#!/bin/bash
set -e

# Function to check if backend is available
check_backend() {
    # Try to resolve the backend hostname
    if nslookup api > /dev/null 2>&1; then
        # Try to connect to the backend service
        if timeout 5 bash -c "</dev/tcp/api/3333" > /dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Wait for backend to be available (with timeout)
echo "Waiting for backend service to be available..."
timeout=300  # 5 minutes timeout
counter=0

while [ $counter -lt $timeout ]; do
    if check_backend; then
        echo "Backend service is available!"
        break
    fi
    
    echo "Backend not ready yet, waiting... ($counter/$timeout seconds)"
    sleep 5
    counter=$((counter + 5))
done

if [ $counter -ge $timeout ]; then
    echo "Warning: Backend service not available after $timeout seconds, starting nginx anyway..."
    echo "Nginx will handle backend unavailability gracefully"
fi

# Start nginx
echo "Starting nginx..."
exec nginx -g "daemon off;"
