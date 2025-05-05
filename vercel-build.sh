#!/bin/bash

# Install composer dependencies
composer install --no-dev --optimize-autoloader

# Generate application key if not set
php -r "file_exists('.env') || copy('.env.example', '.env');"
php artisan key:generate --force

# Run database migrations if needed (comment this out if not needed)
# php artisan migrate --force

# Build frontend assets
npm ci
npm run build

# Make sure the build directory exists and is accessible
mkdir -p public/build
chmod -R 755 public/build

# Copy the manifest for Vercel's specific directory structure
# This is critical - solves the manifest not found error
cp -f public/build/manifest.json .vercel/output/static/build/manifest.json 2>/dev/null || :

# Clean up
echo "Build completed successfully!"