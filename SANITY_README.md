# LaunchRoom Sanity Headless CMS Guide

LaunchRoom includes an embedded **Sanity Studio** CMS accessible directly in the browser at `/studio`. This allows you to create, edit, draft, publish, and SEO-manage articles and categories without writing code or redeploying the site.

---

## 1. Quick Setup (Initial 2-Minute Configuration)

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and create a project (e.g. `LaunchRoom`).
2. Copy your **Project ID**.
3. Add the following to your `.env.local` file (and Vercel Project Environment Variables):
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
   ```
4. In Sanity Project Settings -> **API Settings** -> **CORS Origins**, add:
   - `http://localhost:3000`
   - `https://launchroom.in`

---

## 2. Accessing Sanity Studio

Open your browser and navigate to:
👉 **[https://launchroom.in/studio](https://launchroom.in/studio)** (or `http://localhost:3000/studio` in local dev)

Log in with your Sanity / GitHub / Google account.

---

## 3. Creating & Publishing a Blog Post

1. Click **Post** in the Sanity Studio left sidebar.
2. Click **+ Create**.
3. Fill out the editorial fields:
   - **Title**: Article Headline (e.g., *OpenAI GPT-6 Enterprise Deployment Guide*)
   - **Slug**: Click *Generate* button.
   - **Excerpt**: Short 2-3 sentence executive summary.
   - **Category**: Select category (AI & Automation, Tech News, Cloud & DevOps, etc.).
   - **Main Image**: Upload a 1200x630 featured banner or graphic.
   - **Body Content**: Write in rich Portable Text (Headings, bold text, code blocks, lists, embedded images).
   - **SEO Fields**: Fill custom SEO Title & Description (optional).
   - **Featured**: Check `true` to display as the hero post on `/blog`.
4. Click **Publish** (green button at the bottom right).

Your article will immediately appear live on [launchroom.in/blog](https://launchroom.in/blog)!

---

## 4. Pre-Configured Categories

The following 8 categories are supported out of the box:
1. `AI & Automation` (`/blog/ai-automation`)
2. `Tech News` (`/blog/tech-news`)
3. `Software & SaaS` (`/blog/software-saas`)
4. `Cloud & DevOps` (`/blog/cloud-devops`)
5. `Cybersecurity` (`/blog/cybersecurity`)
6. `Startups & Business Tech` (`/blog/startups-business-tech`)
7. `Web App Industry` (`/blog/web-app-industry`)
8. `Tool Reviews` (`/blog/tool-reviews`)

---

## 5. Automatic Features
- **Auto-Generated Table of Contents**: H2/H3 headings in your article automatically generate a sticky Table of Contents sidebar.
- **ToolzTotal Integration**: Every article automatically embeds a subtle, non-intrusive *"Useful Tool from ToolzTotal"* recommendation box linking to [toolztotal.com](https://toolztotal.com).
- **SEO & Social Cards**: Dynamic OpenGraph, Twitter Cards, canonical URLs, and `NewsArticle` JSON-LD schema are automatically rendered for search engines.
