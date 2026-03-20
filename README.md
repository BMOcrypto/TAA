# The Automation Architects - Business Process Automation Website

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/bmocryptos-projects/v0-hub-spot-consulting-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/kv942B37aPI)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Features

- **Next.js 14** with App Router and TypeScript
- **Business Process Automation Focus** - Specialized content for automation consulting
- **HubSpot CRM Integration** - Automatic contact creation and updates from form submissions
- **Email Integration** - Automated email notifications via Resend
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **SEO Optimized** - Comprehensive metadata and sitemap generation
- **Admin Panel** - Secure content management system
- **Contact Forms** - Multiple contact forms with validation and CRM sync

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# HubSpot CRM Integration (Required for automatic contact sync)
HUBSPOT_API_KEY=your_hubspot_api_key_here

# Email Service (Required for form notifications)
RESEND_API_KEY=your_resend_api_key_here

# Admin Authentication
ADMIN_USERNAME=info@theautomationarchitect.net
ADMIN_PASSWORD=TAAadmin2024!
```

### Getting HubSpot API Key

1. Log into your HubSpot account
2. Go to Settings > Account Setup > Integrations > API key
3. Generate a new API key or copy existing one
4. Add it to your `.env.local` file

### Getting Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (theautomationarchitect.net)
3. Copy your API key from the dashboard
4. Add it to your `.env.local` file

## Installation & Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## HubSpot Integration Details

The website automatically syncs all contact form submissions to your HubSpot CRM:

- **Hero Form**: Basic contact info (name, email, subject, message)
- **Main Contact Form**: Detailed inquiry (includes company, phone, service, budget, newsletter opt-in)

Contacts are created or updated based on email address, with all form data mapped to appropriate HubSpot contact properties.

## Deployment

Your project is live at:

**[https://vercel.com/bmocryptos-projects/v0-hub-spot-consulting-website](https://vercel.com/bmocryptos-projects/v0-hub-spot-consulting-website)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/kv942B37aPI](https://v0.dev/chat/projects/kv942B37aPI)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
# TAA
