#!/bin/bash

# Casita Miro Wiki - Local Server Startup Script
# This script starts a Python HTTP server on port 3000

echo "🍷 Starting Casita Miro Wiki..."
echo ""
echo "📖 Wiki will be available at: http://localhost:3000"
echo ""
echo "✅ Server is running. Press Ctrl+C to stop."
echo ""

cd "$(dirname "$0")" || exit

python3 -m http.server 3000 --directory .
