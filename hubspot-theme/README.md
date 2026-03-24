# The Automation Architects — HubSpot CMS Theme

A complete HubSpot CMS theme for The Automation Architects consulting website.

## Folder Structure

```
hubspot-theme/
├── theme.json                  # Theme metadata
├── fields.json                 # Global theme fields (colors, fonts)
├── css/
│   ├── main.css                # Full design system & component styles
│   └── theme-overrides.css     # HubSpot module resets
├── layouts/
│   └── base.html               # Base layout (head, nav, footer)
├── templates/
│   ├── home.html               # Homepage
│   ├── about.html              # About page
│   ├── services.html           # Services page
│   ├── contact.html            # Contact page (with HubSpot form)
│   ├── blog-listing.html       # Blog listing template
│   └── blog-post.html          # Blog post template
├── sections/
│   ├── navigation.html         # Sticky nav w/ logo + links
│   ├── hero-banner.html        # Hero with stats grid
│   ├── multi-row-content.html  # Two-col image right section
│   ├── multi-column-content.html # Three-col service cards
│   ├── call-to-action.html     # Purple CTA band
│   └── footer.html             # Footer w/ nav columns
└── images/
    └── README.md               # Image asset checklist
```

## Uploading to HubSpot

1. Install the HubSpot CLI: `npm install -g @hubspot/cli`
2. Authenticate: `hs auth`
3. Upload: `hs upload hubspot-theme/ hubspot-theme/`
4. In HubSpot Design Manager, confirm all files appear
5. Add image assets from `images/README.md` via Design Manager
6. Create pages using the uploaded templates
7. Fill in your HubSpot Form ID in `templates/contact.html`

## Customization

All brand colors and fonts are controlled via theme fields in HubSpot's visual editor (`fields.json`). No CSS editing required for basic brand changes.
