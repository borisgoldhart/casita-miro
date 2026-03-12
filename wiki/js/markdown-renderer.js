// Casita Miro Marketing POC - JavaScript

// Document metadata
const documents = [
    {
        id: 'executive_summary',
        title: 'Executive Summary',
        filename: 'executive_summary.md',
        description: 'Strategic overview of Casita Miro — brand vision, market opportunity, and positioning as a Spanish restaurant and vineyard destination.',
        tags: ['Strategy', 'Overview', 'Executive']
    },
    {
        id: 'as_is_analysis',
        title: 'As-Is Analysis',
        filename: 'as_is_analysis.md',
        description: 'Current state assessment — operational review, strengths, gaps, and market positioning analysis.',
        tags: ['Analysis', 'Current State', 'Operations']
    },
    {
        id: 'swot_analysis',
        title: 'SWOT Analysis',
        filename: 'swot_analysis.md',
        description: 'Comprehensive SWOT assessment — strengths, weaknesses, opportunities, and threats in the Waiheke Island market.',
        tags: ['Analysis', 'Strategy', 'Market']
    },

    {
        id: 'business_strategy',
        title: 'Business Strategy',
        filename: 'business_strategy.md',
        description: 'Updated business strategy — revenue streams, operational model, and growth tactics.',
        tags: ['Strategy', 'Business', 'Growth']
    },
    {
        id: 'marketing_overview',
        title: 'Marketing Overview',
        filename: 'marketing_overview.md',
        description: 'Marketing strategy overview — target audience, positioning, and key messaging.',
        tags: ['Marketing', 'Strategy', 'Messaging']
    },
    {
        id: 'marketing_plan',
        title: 'Marketing Plan',
        filename: 'marketing_plan.md',
        description: 'Comprehensive marketing plan — channels, tactics, timeline, and budget allocation.',
        tags: ['Marketing', 'Plan', 'Channels']
    },
    {
        id: 'brand_storytelling',
        title: 'Brand & Storytelling',
        filename: 'brand_storytelling.md',
        description: 'Brand identity and storytelling strategy — visual identity, voice, and brand narrative.',
        tags: ['Brand', 'Storytelling', 'Identity']
    },
    {
        id: 'website_strategy',
        title: 'Website Strategy',
        filename: 'website_strategy.md',
        description: 'Digital and website strategy — site structure, user experience, and conversion optimization.',
        tags: ['Website', 'Digital', 'UX']
    },
    {
        id: 'website_sitemap',
        title: 'Website Sitemap',
        filename: 'website_sitemap.md',
        description: 'Detailed website information architecture and sitemap.',
        tags: ['Website', 'Structure', 'Navigation']
    },
    {
        id: 'social_media_strategy',
        title: 'Social Media Strategy',
        filename: 'social_media_strategy.md',
        description: 'Social media strategy — platforms, content pillars, posting cadence, and community management.',
        tags: ['Social Media', 'Marketing', 'Content']
    },

    {
        id: 'email_marketing',
        title: 'Email Marketing',
        filename: 'email_marketing.md',
        description: 'Email marketing strategy — segmentation, sequences, and campaign planning.',
        tags: ['Email', 'Marketing', 'CRM']
    },



    {
        id: 'influencer_pr',
        title: 'Influencer & PR',
        filename: 'influencer_pr.md',
        description: 'Influencer partnerships and PR strategy — key contacts, outreach tactics, and collaboration ideas.',
        tags: ['PR', 'Influencer', 'Partnerships']
    },

    {
        id: 'events_partnerships',
        title: 'Events & Partnerships',
        filename: 'events_partnerships.md',
        description: 'Event strategy and partnership opportunities — local collaborations and co-marketing.',
        tags: ['Events', 'Partnerships', 'Community']
    },
    {
        id: 'kpis_and_metrics',
        title: 'KPIs & Metrics',
        filename: 'kpis_and_metrics.md',
        description: 'Key performance indicators and measurement framework — what to track and why.',
        tags: ['KPIs', 'Metrics', 'Measurement']
    }
];

// State management
let currentView = 'home';
let currentDoc = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Check if we're loading a specific document from URL hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        const doc = documents.find(d => d.id === hash);
        if (doc) {
            loadDocument(doc);
            return;
        }
    }
    
    // Otherwise show home page
    renderHomePage();
}

function renderHomePage() {
    currentView = 'home';
    const homeView = document.getElementById('homeView');
    const docViewer = document.getElementById('docViewer');
    const docsGrid = document.getElementById('docsGrid');
    
    homeView.classList.remove('hidden');
    docViewer.classList.remove('active');
    docViewer.classList.add('hidden');
    
    // Clear and render document cards
    docsGrid.innerHTML = '';
    documents.forEach(doc => {
        const card = createDocCard(doc);
        docsGrid.appendChild(card);
    });
    
    // Update breadcrumb
    document.getElementById('breadcrumb').innerHTML = 'Marketing Documentation';
}

function createDocCard(doc) {
    const card = document.createElement('div');
    card.className = 'doc-card';
    card.onclick = () => loadDocument(doc);
    
    const tags = doc.tags.slice(0, 3).map(tag => `<span class="doc-tag">${tag}</span>`).join('');
    
    card.innerHTML = `
        <h3>${doc.title}</h3>
        <p>${doc.description}</p>
        <div class="doc-meta">
            ${tags}
        </div>
    `;
    
    return card;
}

async function loadDocument(doc) {
    currentView = 'document';
    currentDoc = doc;
    
    const homeView = document.getElementById('homeView');
    const docViewer = document.getElementById('docViewer');
    const contentArea = document.getElementById('contentArea');
    
    // Show loading state
    contentArea.innerHTML = '<div style="text-align: center; padding: 3rem;"><div class="loading"></div><p style="margin-top: 1rem;">Loading document...</p></div>';
    
    homeView.classList.add('hidden');
    docViewer.classList.remove('hidden');
    docViewer.classList.add('active');
    
    // Update breadcrumb
    document.getElementById('breadcrumb').innerHTML = `
        <a href="#" onclick="navigateHome(); return false;">Marketing Documentation</a>
        <span>/</span>
        <span>${doc.title}</span>
    `;
    
    // Update URL hash
    window.location.hash = doc.id;
    
    try {
        // Use absolute URL to avoid credential-in-URL fetch block (Chrome security restriction)
        const baseUrl = window.location.origin + window.location.pathname;
        const docUrl = new URL(`docs/${doc.filename}`, baseUrl).href;
        const response = await fetch(docUrl);
        if (!response.ok) {
            throw new Error(`Failed to load document: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        
        if (doc.filename.endsWith('.html')) {
            contentArea.innerHTML = text;
            // Re-run any scripts in the injected HTML
            const scripts = contentArea.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                document.body.appendChild(newScript);
                oldScript.remove();
            });
        } else {
            // Render markdown
            const html = marked.parse(text);
            contentArea.innerHTML = `<div class="markdown-content">${html}</div>`;
        }
        
        // Generate table of contents
        generateTableOfContents();
        
        // Set up mobile TOC toggle button
        setupMobileTOC();
        
        // Add anchor links to headings
        addAnchorLinks();
        
        // Scroll to top
        window.scrollTo(0, 0);
        
    } catch (error) {
        contentArea.innerHTML = `
            <div class="markdown-content">
                <h1>Error Loading Document</h1>
                <p>Sorry, we couldn't load "${doc.title}". Please try again or contact support.</p>
                <p style="color: var(--text-light); font-size: 0.9rem;">Error: ${error.message}</p>
            </div>
        `;
        console.error('Error loading document:', error);
    }
}

function generateTableOfContents() {
    const content = document.querySelector('.markdown-content');
    const headings = content.querySelectorAll('h1, h2, h3, h4');
    
    if (headings.length === 0) return;
    
    // Assign IDs to headings
    headings.forEach((heading, index) => {
        heading.id = `heading-${index}`;
    });
    
    // Build TOC list
    const tocList = document.createElement('ul');
    
    headings.forEach((heading, index) => {
        const level = heading.tagName.toLowerCase();
        // Strip any trailing anchor # characters from display text
        const text = heading.textContent.replace(/\s*#\s*$/, '').trim();
        const id = `heading-${index}`;
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = text;
        a.className = `toc-${level}`;
        
        // Smooth scroll with header offset compensation
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(id);
            if (target) {
                const headerOffset = 80;
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = rect.top + scrollTop - headerOffset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    // Populate the sidebar TOC
    const tocContainer = document.getElementById('toc');
    if (tocContainer) {
        tocContainer.innerHTML = '';
        tocContainer.appendChild(tocList);
    }
}

// Mobile TOC toggle
function setupMobileTOC() {
    const sidebar = document.querySelector('.sidebar');
    const docLayout = document.querySelector('.doc-layout');
    if (!sidebar || !docLayout) return;

    // Only add if we're on mobile
    if (window.innerWidth > 768) return;

    // Check if toggle already exists
    if (document.querySelector('.mobile-toc-toggle')) return;

    const toggle = document.createElement('button');
    toggle.className = 'mobile-toc-toggle';
    toggle.textContent = '📋 Jump to section';
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
        toggle.classList.toggle('open');
    });

    // Insert before the doc-layout
    docLayout.parentNode.insertBefore(toggle, docLayout);
}

function addAnchorLinks() {
    const content = document.querySelector('.markdown-content');
    const headings = content.querySelectorAll('h2, h3, h4');
    
    headings.forEach(heading => {
        if (!heading.id) return;
        
        const anchor = document.createElement('a');
        anchor.href = `#${heading.id}`;
        anchor.className = 'heading-anchor';
        anchor.textContent = '#';
        anchor.style.cssText = 'margin-left: 0.5rem; color: var(--text-light); text-decoration: none; opacity: 0; transition: opacity 0.2s;';
        
        heading.style.position = 'relative';
        heading.onmouseenter = () => anchor.style.opacity = '1';
        heading.onmouseleave = () => anchor.style.opacity = '0';
        
        heading.appendChild(anchor);
    });
}

function navigateHome() {
    window.location.hash = '';
    renderHomePage();
}

// Handle browser back/forward
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
        renderHomePage();
    } else {
        const doc = documents.find(d => d.id === hash);
        if (doc && currentDoc?.id !== doc.id) {
            loadDocument(doc);
        }
    }
});

// Export for inline use
window.navigateHome = navigateHome;
