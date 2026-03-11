# 🚀 Casita Miro Wiki — Quick Start Guide

**Your wiki is ready to view on localhost!**

---

## ⚡ 30-Second Start

```bash
cd ~/Documents/projects/casita-miro/wiki && ./start-wiki.sh
```

Open your browser to: **http://localhost:3000**

That's it! 🎉

---

## 📖 What You'll See

A professional wiki with:
- **Homepage** — Overview and navigation
- **Executive Summary** — 5-minute POC overview
- **Strategy Section** — Analysis, SWOT, business strategy
- **Marketing Plan Section** — Detailed marketing tactics
- **Tactics & Reference** — Blog topics, KPIs, influencers, references
- **Search** — Full-text search across all pages
- **Sidebar** — Click to navigate between sections

---

## 🎯 Three Ways to Start

### Method 1: Script (Easiest)
```bash
cd ~/Documents/projects/casita-miro/wiki
./start-wiki.sh
```
✅ Recommended for repeated use

### Method 2: Direct Python
```bash
cd ~/Documents/projects/casita-miro/wiki
python3 -m http.server 3000
```
✅ Works if script fails

### Method 3: From Project Root
```bash
cd ~/Documents/projects/casita-miro
python3 -m http.server 3000 --directory wiki
```
✅ Alternative option

---

## 🌐 Access URLs

**Main Wiki:** http://localhost:3000

**Sidebar Navigation:** Automatic (see it once loaded)

**Search:** Top-right corner of every page

---

## 🛑 Stop the Server

Press **Ctrl+C** in the terminal

---

## ⌨️ Optional: Create Alias

Make it super fast by adding to `~/.zshrc` or `~/.bash_profile`:

```bash
alias casita-wiki='cd ~/Documents/projects/casita-miro/wiki && ./start-wiki.sh'
```

Then next time just type:
```bash
casita-wiki
```

---

## 📂 File Locations

```
~/Documents/projects/casita-miro/

Wiki (what you're running):
└── wiki/
    ├── index.html           ← Docsify config
    ├── _sidebar.md          ← Navigation
    ├── home.md              ← Homepage
    ├── start-wiki.sh        ← Startup script
    └── [other wiki pages]

Detailed Documents (linked from wiki):
└── docs/
    ├── 01-AsIs-Analysis.md
    ├── 02c-SWOT-Analysis-Farm-to-Table.md
    ├── 03-Business-Strategy-Update.md
    ├── 04-Marketing-Plan.md
    └── [other docs]

Quick Guides:
├── START-WIKI.md            ← Full wiki guide
├── QUICK-START.md           ← This file
├── PROJECT-SUMMARY.md       ← Project overview
└── [other guides]
```

---

## ✅ Checklist

- [x] Wiki files in place
- [x] Start script created and executable
- [x] Docsify configured
- [x] Navigation sidebar ready
- [x] All content pages created
- [x] Search enabled
- [x] Mobile responsive
- [x] Ready for localhost viewing
- [x] Ready for Vercel deployment

---

## 🎨 Wiki Features

- **Responsive Design** — Works on phone, tablet, desktop
- **Full-Text Search** — Find anything instantly
- **Markdown-Based** — Easy to edit and update
- **Spanish Red Theme** — Brand color #D32F2F
- **Fast Loading** — No build process needed
- **Professional Styling** — Clean, modern appearance

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
python3 -m http.server 3001 --directory wiki
# Visit http://localhost:3001 instead
```

**Script won't run?**
```bash
chmod +x ~/Documents/projects/casita-miro/wiki/start-wiki.sh
./start-wiki.sh
```

**Python command not found?**
Try `python` instead of `python3`:
```bash
python -m http.server 3000
```

**Wiki won't load?**
- Make sure you're in the `/wiki/` folder
- Check internet connection (CDN loads styling)
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

## 🎯 Next Steps

1. **Start the wiki** — Use the 30-second start command above
2. **Review content** — Click through the sidebar
3. **Use the search** — Find any topic quickly
4. **Read the marketing plan** — Start in "Marketing Plan" section
5. **Check implementation timeline** — See 12-month roadmap
6. **Share feedback** — Any changes before Vercel deployment?

---

## 📚 Full Documentation

For more detailed information, see:
- **START-WIKI.md** — Complete wiki setup guide
- **PROJECT-SUMMARY.md** — Full project overview
- **WIKI-GUIDE.md** — How to view and deploy to Vercel
- **DELIVERABLES-CHECKLIST.md** — Complete inventory

---

**Your wiki is ready. Start it up and explore!** 🍷
