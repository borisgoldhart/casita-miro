# 🍷 Start Casita Miro Wiki on Localhost

## Quick Start (Easiest)

### Option 1: Using the Script (Recommended)
```bash
cd ~/Documents/projects/casita-miro/wiki
./start-wiki.sh
```

Then open your browser to: **http://localhost:3000**

### Option 2: Manual Python Server
```bash
cd ~/Documents/projects/casita-miro/wiki
python3 -m http.server 3000
```

Then open your browser to: **http://localhost:3000**

### Option 3: From Project Root
```bash
cd ~/Documents/projects/casita-miro
python3 -m http.server 3000 --directory wiki
```

Then open your browser to: **http://localhost:3000**

---

## What You'll See

When you open http://localhost:3000, you'll see:
- 🏠 Homepage with navigation
- 📊 Executive summary
- 📈 Strategy section (As-Is, SWOT, Business Strategy)
- 📢 Marketing plan section (with all tactics)
- 🎯 Tactics & KPIs
- 📚 References

---

## Navigation Tips

- **Click links** in the sidebar to navigate
- **Use the search box** (top right) to find content
- **Click the menu icon** (if on mobile) to see sidebar

---

## Stopping the Server

Press **Ctrl+C** in the terminal to stop the server.

---

## Adding Your Own Alias (Optional)

Make it even easier by adding this to your `.zshrc` or `.bash_profile`:

```bash
alias casita-wiki='cd ~/Documents/projects/casita-miro/wiki && ./start-wiki.sh'
```

Then you can just type:
```bash
casita-wiki
```

And the wiki will start!

---

## Troubleshooting

**"Port 3000 is already in use?"**
Try a different port:
```bash
python3 -m http.server 3001 --directory wiki
# Then visit http://localhost:3001
```

**"Command not found: python3?"**
Try `python` instead:
```bash
python -m http.server 3000
```

**"Permission denied on start-wiki.sh?"**
Make it executable:
```bash
chmod +x ~/Documents/projects/casita-miro/wiki/start-wiki.sh
```

---

**That's it! Your wiki is live locally.** 🚀
