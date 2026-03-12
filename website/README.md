# Casita Miro Website

Professional restaurant + wine website for Casita Miro, an award-winning Spanish restaurant and vineyard on Waiheke Island, New Zealand.

## Project Overview

**Casita Miro** is a premium culinary destination featuring:
- Award-winning Spanish cuisine (Fiesta menu and Cellar Door)
- Estate vineyard with Spanish imports
- Artisan food products (Madame Rouge aperitif, olive oils, honey)
- Wine club membership program
- Events and experiences (wine releases, cultural celebrations, chef's dinners, weddings)
- 25+ year heritage with 13 consecutive years of TripAdvisor Traveller's Choice awards

## Website Structure

```
website/
├── index.html                 # Homepage
├── css/
│   └── styles.css             # Complete styling (20K+ lines, mobile-responsive)
├── js/
│   └── main.js                # Minimal interactivity (mobile menu, forms, smooth scroll)
├── pages/
│   ├── dining.html            # Restaurant menus, booking, hours
│   ├── wine.html              # Vineyard story, wine selection, wine club, tastings
│   ├── shop.html              # Product catalog, gift bundles, sourcing story
│   ├── events.html            # Events calendar, event types, testimonials
│   ├── about.html             # Founder story, values, awards & press
│   ├── contact.html           # Contact form, location, FAQ
│   ├── privacy.html           # Privacy policy
│   └── terms.html             # Terms of service
├── images/                    # Placeholder structure for hero images, product photos
├── vercel.json                # Vercel deployment configuration
└── README.md                  # This file
```

## Design Direction

### Color Palette
- **Primary Red:** #D32F2F (Spanish red, bold and confident)
- **Accent Red:** #741D1D (deep wine red for CTAs)
- **Cream:** #F5F1E8 (warm off-white backgrounds)
- **Dark Gray:** #2C2C2C (text and headings)
- **Gold:** #C9A961 (luxury accents, award badges)

### Typography
- **Headlines:** Playfair Display (serif, elegant, heritage)
- **Body Text:** Inter (sans-serif, readable, modern)

### Visual Aesthetic
- **No animations** – Clean, static design
- **Mobile-first responsive** – Works beautifully on all devices
- **Photography-driven** – Large hero images, high-quality food photography
- **Generous whitespace** – Breathing room, not cramped
- **Professional & premium** – Inspired by MoVida but not copying

## Key Features

### 1. Homepage
- Stunning hero section with tagline and dual CTAs
- 4-tile experience navigation (Dining, Wine, Shop, Events)
- Awards section (13-year TripAdvisor streak)
- Founder story section with personal hero image
- Featured seasonal experience (wine releases, events)
- Newsletter signup with email capture
- Instagram feed preview (6-item grid)

### 2. Dining
- Restaurant philosophy (farm-to-table, Spanish sourcing, service)
- **Fiesta Menu** – 3-course tasting (First/Main/Dessert descriptions with sourcing notes)
- **Cellar Door** – Casual tapas experience with walk-in welcome
- **Book a Table** – Full booking form (date, time, guests, experience, dietary)
- Parking & Location section with embedded Google Map

### 3. Wine
- **Miro Vineyard Story** – Terroir, winemaking process, varietals
- **Wine Selection** – Miro estate wines (Syrah, Cabernet, Sauvignon Blanc) + Spanish imports with tasting notes & pairings
- **Wine Club** – 3-tier membership (Explorer $75, Connoisseur $150, Collector $250 per quarter)
- **Shop Wine Online** – Full e-commerce (Miro + Spanish imports)
- **Tastings & Education** – Casual, sommelier-led, vineyard tours, masterclasses

### 4. Kitchen & Products
- **Signature Products** – Madame Rouge, olive oil, Spanish olives, honey with descriptions & pricing
- **Gift Bundles & Subscriptions** – Tapas Essentials, Seasonal Gourmet, Premium Hampers
- **Sourcing & Sustainability** – Spanish bodega partnerships, local organic gardens, farm-to-table philosophy

### 5. Events & Experiences
- **Events Calendar** – Wine releases, cultural celebrations, chef's dinners, corporate team-building, weddings
- **Event Types** – Detailed descriptions, pricing, group sizes, what's included
- **Testimonials** – Guest reviews from wine releases, chef's dinners, weddings
- **Planning Process** – Consultation workflow, next steps

### 6. About
- **Our Story** – Barnett & Cat's 25+ year journey, why Spanish, why Waiheke
- **The Owners** – Detailed bios of Barnett (winemaker) and Cat (chef/operations)
- **Our Values** – Authenticity, Community, Quality, Sustainability
- **Awards & Recognition** – 13-year TripAdvisor, Iconic Eats, Lewisham Awards, Cuisine Magazine
- **Featured In** – Press mentions and media coverage

### 7. Contact
- **Contact Information** – Phone, email, address, hours, embedded map
- **Contact Form** – Name, email, phone, inquiry type, message with subject routing
- **Quick Links** – Fast navigation to key actions (Book, Wine Club, Events, Shop, Story)
- **FAQ** – 9 common questions (hours, reservations, dietary, accessibility, dress code, etc.)

### 8. Legal
- **Privacy Policy** – Data collection, usage, protection measures
- **Terms of Service** – Reservations, cancellations, pricing, liability, IP rights

## Responsive Design

The website uses **mobile-first CSS Grid and Flexbox**:
- Desktop: 2-4 column layouts
- Tablet (768px): Single-column layouts, adjusted spacing
- Mobile (480px): Compact spacing, optimized touch targets

**Navigation:**
- Desktop: Horizontal nav bar with logo
- Mobile: Hamburger menu toggle that expands vertically

**Forms:**
- Full-width inputs on mobile
- 2-column layouts on larger screens

**Images:**
- Lazy loading with fallback placeholder structure
- Responsive `<img>` with `srcset` support ready
- Object-fit for consistent aspect ratios

## Development Notes

### No Build Process
This is a **static HTML/CSS/JS website** – no Node dependencies, no bundling required:
- Drop files into Vercel
- Deploy immediately
- No build step

### JavaScript Features
Minimal, vanilla JavaScript:
- Mobile menu toggle
- Newsletter form submission handling
- Smooth scroll for anchor links
- Lazy loading image observer
- Active navigation link styling
- Button loading states
- Print stylesheet hiding

### Image Placeholder Structure
All image paths reference `/images/` subdirectory:
- `hero-vineyard.jpg` – Homepage hero
- `dining-hero.jpg`, `wine-cellar.jpg`, `products-hero.jpg`, etc.
- `awards-ceremony.jpg`, `barnett-cat.jpg` – Story images
- `instagram-1.jpg` through `instagram-6.jpg` – Instagram grid

**Add actual images:** Upload your photography to `/images/` folder and reference by filename.

### Email & Forms
The booking and contact forms are **ready for integration**:
1. Collect form data on submission
2. Send to backend service (Formspree, EmailJS, custom API, etc.)
3. Or use form-handler attributes if connecting to a service

## Deployment

### Vercel (Recommended)
1. Connect your Git repository to Vercel
2. Deploy from the `website/` directory
3. `vercel.json` handles caching, headers, redirects
4. Automatic HTTPS, CDN, analytics included

```bash
# Deploy from CLI
vercel --prod
```

### Other Static Hosts
- Netlify (drag-drop deployment)
- GitHub Pages (free hosting)
- AWS S3 + CloudFront
- Any static file host

## Customization

### Update Company Info
- **Phone:** Find `+64 9 372 5025` in footer/contact pages
- **Email:** Find `hello@casitamiro.co.nz`
- **Address:** Find `3 Brown Road, Onetangi, Waiheke Island 1081`
- **Hours:** Search for "Summer (Nov-Mar)" and "Autumn-Spring"

### Update Colors
Edit `:root` variables in `css/styles.css`:
```css
--primary-red: #D32F2F;
--accent-red: #741D1D;
--cream: #F5F1E8;
--dark-gray: #2C2C2C;
--gold: #C9A961;
```

### Update Menus & Pricing
Edit relevant sections in `pages/dining.html` and `pages/wine.html`:
- Menu descriptions
- Pricing in NZD
- Wine selections and tasting notes
- Product catalog

### Update Awards & Press
Edit sections in `pages/about.html`:
- Awards list
- Media mentions
- Press coverage

## Performance Optimization

### Already Implemented
- CSS Grid & Flexbox (no heavy frameworks)
- Lazy loading on images
- Mobile-first responsive design
- Static files (no server rendering)
- Vercel global CDN caching
- Gzip compression enabled

### Optional Enhancements
- Image optimization (WebP, multiple sizes)
- Critical CSS inlining
- Service worker for offline access
- Analytics integration (Google Analytics, Vercel Analytics)
- Form validation library
- Modal/lightbox for image galleries

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE 11+ with graceful degradation

## Legal & Compliance
- Privacy Policy included
- Terms of Service included
- GDPR-ready (minimal data collection)
- Accessibility features (semantic HTML, ARIA labels, form labels)

## Maintenance

### Regular Updates
- Update opening hours (seasonal changes)
- Update event calendar
- Add new press mentions
- Refresh menu seasonally
- Update wine selections

### Performance Monitoring
- Use Vercel Analytics dashboard
- Monitor Core Web Vitals
- Check page load times

### Backups
- Git version control (all changes tracked)
- Vercel automatic deployments

## Support & Further Development

**For questions about specific sections:**
- Navigation & layout → `css/styles.css` (grid systems)
- Interactivity → `js/main.js` (form handling, menu)
- Content → Individual page files in `pages/`
- Colors/fonts → `:root` variables in CSS

**To extend functionality:**
- Add e-commerce backend (booking system integration)
- Connect form submission to email service
- Add blog/news section
- Implement multi-language support
- Add online reservation system

---

**Built:** March 2026  
**Design Brief:** WEBSITE_REDESIGN_PROPOSAL.md  
**Ready for Vercel Deployment** ✅
