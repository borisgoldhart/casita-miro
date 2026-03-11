# Casita Miro Wiki - Quick Guide

## 🌐 Viewing the Wiki (Locally)

### Option 1: Direct File Open (Easiest)
```bash
# Navigate to the wiki folder
cd ~/Documents/projects/casita-miro/wiki

# Open index.html in your default browser
open index.html
```

### Option 2: Python Local Server
```bash
cd ~/Documents/projects/casita-miro/wiki

# Start a simple HTTP server
python3 -m http.server 8000

# Open http://localhost:8000 in your browser
```

### Option 3: VS Code Live Server
1. Open `/wiki/` folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📚 Wiki Navigation

**Start Here:**
1. [Home](wiki/home.md) — Welcome and overview
2. [Executive Summary](wiki/executive-summary.md) — 5-minute overview

**Strategy Section:**
- [As-Is Analysis](wiki/strategy/as-is-analysis.md)
- [SWOT Analysis](wiki/strategy/swot-analysis.md)
- [Business Strategy](wiki/strategy/business-strategy.md)

**Marketing Section:**
- [Overview](wiki/marketing/overview.md) — Full marketing strategy
- [Website & Digital](wiki/marketing/website-digital.md)
- [Social Media](wiki/marketing/social-media.md)
- [Content Marketing](wiki/marketing/content-marketing.md)
- [Implementation Timeline](wiki/marketing/implementation-timeline.md)

**Tactics & KPIs:**
- [Social Calendar](wiki/tactics/social-calendar.md)
- [Email Templates](wiki/tactics/email-templates.md)
- [Blog Topics](wiki/tactics/blog-topics.md)
- [KPIs & Metrics](wiki/tactics/kpis.md)

---

## 📄 Related Documents (in /docs/)

All detailed analysis is also available as individual markdown files:

- `/docs/01-AsIs-Analysis.md` — Website audit & market research
- `/docs/Casita-Miro-Website-Sitemap.md` — Complete site structure
- `/docs/02c-SWOT-Analysis-Farm-to-Table.md` — Strategic SWOT
- `/docs/03-Business-Strategy-Update.md` — Business strategy & roadmap
- `/docs/04-Marketing-Plan.md` — Full marketing plan (16,000+ words)

---

## 🚀 Publishing to Vercel

When ready to share with Cat and the team:

### Step 1: Create Vercel Project
```bash
# From project root
cd ~/Documents/projects/casita-miro

# If you haven't already, initialize git
git init
git add .
git commit -m "Casita Miro Marketing POC"
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com/import
2. Select "Import Project"
3. Connect your GitHub repo (or paste URL)
4. **Important:** Set "Root Directory" to `wiki/`
5. No build command needed (Docsify is client-side)
6. Deploy

### Step 3: Share URL
Once deployed, share the Vercel URL with Cat:
```
https://casita-miro-wiki.vercel.app/ (example)
```

---

## ✏️ Editing the Wiki

To add or edit pages:

1. **New page:** Create `.md` file in appropriate folder
2. **Update sidebar:** Edit `wiki/_sidebar.md` to add link
3. **Refresh browser:** Wiki updates automatically on refresh (if using local server)

### Example: Adding a new page
```bash
# Create new page
echo "# New Page Content" > wiki/section/new-page.md

# Update sidebar
# Add link to wiki/_sidebar.md
```

---

## 🎨 Customization

### Changing Colors
Edit `wiki/index.html` — look for `--base-color` CSS variable:
```css
:root {
  --base-color: #D32F2F;  /* Change this to your color */
  --text-color: #2c3e50;
  --border-color: #eaecef;
}
```

### Changing Logo/Title
Edit `wiki/index.html` — change `window.$docsify.name`:
```javascript
window.$docsify = {
  name: 'Your Title Here',
  // ... rest of config
}
```

---

## 📊 Project Structure

```
casita-miro/
├── wiki/                          # ← This wiki (Docsify)
│   ├── index.html                 # Entry point
│   ├── _sidebar.md                # Navigation
│   ├── home.md
│   ├── executive-summary.md
│   ├── strategy/
│   │   ├── as-is-analysis.md
│   │   ├── swot-analysis.md
│   │   └── business-strategy.md
│   ├── marketing/
│   │   ├── overview.md
│   │   ├── website-digital.md
│   │   ├── social-media.md
│   │   ├── content-marketing.md
│   │   └── [more marketing pages]
│   ├── tactics/
│   │   ├── social-calendar.md
│   │   ├── kpis.md
│   │   └── [more tactical pages]
│   └── reference/
│       ├── house-of-eros.md
│       └── movida.md
│
├── docs/                          # Detailed analysis documents
│   ├── 01-AsIs-Analysis.md
│   ├── 02c-SWOT-Analysis-Farm-to-Table.md
│   ├── 03-Business-Strategy-Update.md
│   └── 04-Marketing-Plan.md
│
├── README.md
├── Requirements.md
└── WIKI-GUIDE.md (← You are here)
```

---

## 💡 Tips

- **Search:** Use the search box in the wiki (top right)
- **Mobile:** Wiki is fully responsive; works on phones/tablets
- **Offline:** Once loaded, wiki works offline (cached by browser)
- **Bookmarks:** Bookmark important pages for quick access
- **Print:** Click "Print" button (top right) to print any page as PDF

---

## 🆘 Troubleshooting

**Wiki won't open?**
- Make sure you're in `/wiki/` folder
- Try Python server: `python3 -m http.server 8000`

**Links not working?**
- Check relative paths in markdown files
- Docsify uses `[text](path/to/file.md)` format

**Styles not loading?**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that `index.html` is in `/wiki/` root

**Need to update content?**
- Edit `.md` files directly
- Refresh browser to see changes
- If using Vercel, changes will auto-deploy after git push

---

## 📞 Questions?

Refer to:
- [Docsify Documentation](https://docsify.js.org)
- [Markdown Guide](https://www.markdownguide.org/)
- See `/docs/` folder for full analysis documents

---

**Last Updated:** March 12, 2026
**Status:** Ready for local review and Vercel deployment
