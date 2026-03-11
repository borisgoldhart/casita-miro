# 🚀 Casita Miro Wiki — Currently Running

**Status:** ✅ LIVE

## Access

**URL:** http://localhost:8080

## Server Info

- **Port:** 8080
- **Location:** ~/Documents/projects/casita-miro/wiki/
- **Process:** Python HTTP Server (Docsify)
- **Started:** $(date)

## To Stop

```bash
kill $(ps aux | grep "http.server 8080" | grep -v grep | awk '{print $2}')
```

Or find the process and kill it:
```bash
ps aux | grep http.server
kill <PID>
```

## Available Sections

- 📖 Home
- 📊 Executive Summary
- 📈 Strategy (As-Is Analysis, SWOT, Business Strategy)
- 📢 Marketing Plan (Website, Social, Content, Email, Events, Timeline)
- 🎯 Tactics & KPIs
- 📚 References

## To Restart Later

```bash
cd ~/Documents/projects/casita-miro/wiki && python3 -m http.server 8080 &
```

---

**Wiki is live and ready for review!** 🍷
