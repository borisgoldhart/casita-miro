#!/bin/bash
# Casita Miro Marketing Wiki - Server Stop Script

if pgrep -f "python3 -m http.server 8080" > /dev/null; then
    pkill -f "python3 -m http.server 8080"
    echo "✅ Wiki server stopped"
else
    echo "ℹ️  No wiki server running on port 8080"
fi
