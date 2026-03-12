#!/bin/bash
# Casita Miro Marketing Wiki - Server Startup Script

cd /Users/goldhart/Documents/projects/casita-miro/wiki

# Check if server is already running on port 8080
if pgrep -f "python3 -m http.server 8080" > /dev/null; then
    echo "✅ Wiki server already running on port 8080"
    echo "📍 Access at: http://localhost:8080"
    exit 0
fi

# Start server in background
nohup python3 -m http.server 8080 > server.log 2>&1 &

# Wait a moment and verify
sleep 2

if pgrep -f "python3 -m http.server 8080" > /dev/null; then
    echo "✅ Casita Miro Marketing Wiki server started successfully!"
    echo "📍 Access at: http://localhost:8080"
    echo "📝 Logs: /Users/goldhart/Documents/projects/casita-miro/wiki/server.log"
else
    echo "❌ Failed to start server. Check server.log for errors."
    exit 1
fi
