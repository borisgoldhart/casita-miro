#!/bin/bash
# Casita Miro Marketing Wiki - Server Stop Script

if pgrep -f "http-server" > /dev/null; then
    pkill -f "http-server"
    sleep 1
    echo "✅ Wiki server stopped"
else
    echo "ℹ️  No wiki server running on port 8080"
fi
