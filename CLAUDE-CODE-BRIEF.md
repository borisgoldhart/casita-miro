# Claude Code Brief: Rebuild Casita Miro Wiki

**Objective:** Rebuild the Casita Miro marketing wiki using the exact same architecture, design, and technology stack as the House of Eros marketing wiki.

**Status:** Delete broken Docsify wiki; create new custom HTML/CSS/JS wiki from scratch.

---

## Reference Implementation

**Source:** `/Users/goldhart/Documents/projects/hotel-eros/website/marketing`

This is the template to replicate exactly:

```
hotel-eros/website/marketing/
├── index.html                    (Main entry point - custom HTML)
├── css/
│   └── marketing-bible.css      (Custom styling)
├── js/
│   └── marketing-bible.js       (Dynamic content loading)
├── docs/
│   ├── action_plan.md
│   ├── airbnb_photo_strategy.md
│   ├── brand_and_positioning.md
│   ├── ... (15+ markdown files)
├── start-server.sh              (Server startup script)
└── stop-server.sh               (Server stop script)
```

---

## What to Build for Casita Miro

### 1. Delete Broken Files
- `rm -rf ~/Documents/projects/casita-miro/wiki` (entire Docsify wiki)
- Keep `/docs/` folder with existing strategy documents

### 2. Create New Wiki Structure
```
casita-miro/
├── wiki/                        (NEW - replaces old wiki)
│   ├── index.html              (Main entry - copy from House of Eros, customize)
│   ├── css/
│   │   └── marketing-bible.css (Copy from House of Eros, customize colors/branding)
│   ├── js/
│   │   └── marketing-bible.js  (Copy from House of Eros, update doc paths)
│   ├── docs/                   (NEW - reorganized docs from /docs/)
│   │   ├── executive_summary.md
│   │   ├── as_is_analysis.md
│   │   ├── swot_analysis.md
│   │   ├── business_strategy.md
│   │   ├── marketing_plan.md
│   │   ├── marketing_overview.md
│   │   ├── website_strategy.md
│   │   ├── social_media_strategy.md
│   │   ├── email_marketing.md
│   │   ├── content_marketing.md
│   │   ├── influencer_pr.md
│   │   ├── paid_advertising.md
│   │   ├── events_partnerships.md
│   │   ├── implementation_timeline.md
│   │   ├── kpis_and_metrics.md
│   │   └── ... (other docs as needed)
│   ├── start-server.sh         (Copy from House of Eros, update port if needed)
│   └── stop-server.sh          (Copy from House of Eros)
```

### 3. Content Organization

**Consolidate existing docs into wiki/docs/ folder:**
- Copy content from `/docs/04-Marketing-Plan.md` → `wiki/docs/marketing_plan.md`
- Copy content from `/docs/03-Business-Strategy-Update.md` → `wiki/docs/business_strategy.md`
- Copy content from `/docs/02c-SWOT-Analysis-Farm-to-Table.md` → `wiki/docs/swot_analysis.md`
- Copy content from `/docs/01-AsIs-Analysis.md` → `wiki/docs/as_is_analysis.md`
- Extract relevant sections from other docs into organized markdown files
- Create new files for tactical content (social calendar, email templates, blog topics, KPIs)

### 4. HTML/CSS/JS Customization

**index.html:**
- Copy structure from `hotel-eros/website/marketing/index.html`
- Change title: "Casita Miro Marketing POC" instead of "House of Eros Marketing Bible"
- Change branding colors to Spanish red (#D32F2F) instead of House of Eros colors
- Update logo/emoji to 🍷 (wine bottle) for Casita Miro
- Update description: "Spanish Restaurant + Vineyard | Waiheke Island, NZ"
- Update document list to reference Casita Miro docs

**css/marketing-bible.css:**
- Copy from `hotel-eros/website/marketing/css/marketing-bible.css`
- Update color scheme to match Casita Miro branding (Spanish red #D32F2F)
- Keep the same layout, typography, responsive design
- Update header colors and accent colors

**js/marketing-bible.js:**
- Copy from `hotel-eros/website/marketing/js/marketing-bible.js`
- Update the docs manifest/config to reference Casita Miro documents
- Update document titles, descriptions, and file paths to match new structure
- Ensure markdown parsing works with the new doc files

### 5. Server Scripts

**start-server.sh & stop-server.sh:**
- Copy from House of Eros
- Update port number if needed (recommend keeping port 8080)
- Test the startup/shutdown scripts work

---

## Technical Requirements

1. **Use exact same technology stack as House of Eros:**
   - Custom HTML (no Docsify)
   - Marked.js for markdown parsing
   - Custom CSS for styling
   - JavaScript for dynamic content loading and navigation

2. **Functionality needed:**
   - ✅ Home view with document grid/cards
   - ✅ Document view with breadcrumb navigation
   - ✅ Markdown rendering
   - ✅ Search functionality (if House of Eros has it)
   - ✅ Responsive design (mobile + desktop)
   - ✅ Navigation between documents
   - ✅ Back to home link

3. **Styling:**
   - Spanish red theme (#D32F2F) as primary color
   - Professional, clean design
   - Mobile responsive
   - High readability

---

## Deliverables

When complete:
1. ✅ Delete old `/wiki` folder
2. ✅ New `wiki/` folder with complete structure
3. ✅ All 15+ documents organized and working
4. ✅ Server startup/stop scripts tested
5. ✅ Wiki accessible at `http://localhost:8080`
6. ✅ No console errors or 404s
7. ✅ All pages load and render markdown properly
8. ✅ Navigation works smoothly
9. ✅ Ready for Vercel deployment

---

## Important Notes

- **DON'T use Docsify** - the issue with Docsify is what we're fixing
- **DO replicate House of Eros approach** - it's proven, working, and professional
- **Test locally first** - verify everything works at http://localhost:8080 before deploying
- **Keep existing /docs/ content** - just reorganize into wiki/docs/
- **Clean approach** - start fresh, no hybrid solutions

---

## Timeline

- Estimated time: 1-2 hours
- Dependencies: House of Eros marketing wiki files (reference only)
- Risks: None - House of Eros is proven working

---

## Success Criteria

✅ Wiki loads without errors  
✅ All documents are accessible via navigation  
✅ Markdown renders properly  
✅ Mobile responsive  
✅ Server startup/stop works  
✅ No console JavaScript errors  
✅ Professional appearance  
✅ Ready to deploy to Vercel  

---

**Start in:** `/Users/goldhart/Documents/projects/casita-miro`

**Reference:** `/Users/goldhart/Documents/projects/hotel-eros/website/marketing`
