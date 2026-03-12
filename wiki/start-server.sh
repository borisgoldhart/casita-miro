#!/bin/bash
# Casita Miro Marketing Wiki - Server Startup Script
# Uses http-server with no-cache headers for instant updates (no restart needed!)

cd /Users/goldhart/Documents/projects/casita-miro/wiki

# Check if server is already running on port 8080
if pgrep -f "http-server" > /dev/null && grep -q "http://.*:8080" server.log 2>/dev/null; then
    echo "✅ Wiki server already running on port 8080"
    echo "📍 Access at: http://localhost:8080"
    echo "💡 Files update instantly - no restart needed!"
    exit 0
fi

# Start http-server with:
# -p 8080 = port
# -c-1 = no caching (cache max-age = -1; instant updates)
# --cors = enable CORS for cross-origin requests

nohup http-server . -p 8080 -c-1 --cors > server.log 2>&1 &

# Wait for server to start
sleep 2

if pgrep -f "http-server" > /dev/null; then
    echo "✅ Casita Miro Marketing Wiki server started!"
    echo "📍 Access at: http://localhost:8080 or http://192.168.68.63:8080"
    echo "💡 Files update instantly - no restart needed when you edit markdown"
    echo "📝 Logs: ./server.log"
    echo ""
    echo "🎯 To stop server: pkill -f http-server"
else
    echo "❌ Failed to start server. Check server.log for errors."
    exit 1
fi
