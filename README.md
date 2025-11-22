# Personal Website

A modern, beautiful website built with Astro, Tailwind CSS, and Decap CMS. Features a distinctive design inspired by neural networks and organic forms.

## Features

- **Fast & Modern**: Built with Astro for blazing-fast static site generation
- **Easy Content Management**: Decap CMS provides a user-friendly interface for adding content
- **Three Content Types**:
  - **Research**: Long-form research posts and updates
  - **Feed**: Quick daily updates, thoughts, and observations
  - **Musings**: Creative writing, reflections, and stories
- **Beautiful Design**: Custom neural-inspired color palette with elegant typography
- **Free Hosting**: Deploys to Netlify at zero cost
- **Custom Domain Ready**: Easy to connect your own domain name

## Local Development

### Prerequisites

- Node.js 18+ installed
- Git installed

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:4321`

## Deployment to Netlify

### Step 1: Push to GitHub

1. **Create a new repository on GitHub** (don't initialize with README)

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

1. **Go to [Netlify](https://app.netlify.com)**

2. **Sign up/Login** (you can use your GitHub account)

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub** and select your repository

5. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
   
6. **Click "Deploy site"**

Your site will be live at a URL like `random-name-123.netlify.app` in about 2 minutes!

### Step 3: Enable Decap CMS (Content Management)

1. **In Netlify Dashboard**, go to your site

2. **Go to "Site settings" → "Identity"**

3. **Click "Enable Identity"**

4. **Under "Registration preferences"**, select "Invite only"

5. **Under "Services" → "Git Gateway"**, click "Enable Git Gateway"

6. **Go to "Identity" tab** and click "Invite users"

7. **Invite yourself** with your email

8. **Check your email** and accept the invitation

9. **Visit `your-site.netlify.app/admin`** to access the CMS!

### Step 4: Add Custom Domain (Optional)

1. **Buy a domain** from Namecheap, Google Domains, etc. (~$12/year)

2. **In Netlify Dashboard**, go to "Domain settings"

3. **Click "Add custom domain"**

4. **Follow the instructions** to update your domain's DNS settings

5. **Netlify automatically provides SSL** (HTTPS) for free!

## Using the CMS

1. **Go to** `your-site.netlify.app/admin`

2. **Log in** with your email

3. **Create content**:
   - Click "Research Posts", "Feed Updates", or "Musings"
   - Click "New Research Post" (or equivalent)
   - Write your content
   - Click "Publish" → "Publish now"

4. **Your changes automatically**:
   - Commit to GitHub
   - Trigger a new build on Netlify
   - Go live in ~2 minutes

## Customization

### Update Personal Information

Edit these files:
- `src/pages/index.astro` - Homepage content
- `src/pages/about.astro` - About page, CV, links
- `src/layouts/BaseLayout.astro` - Navigation, footer links

### Change Colors

Edit `tailwind.config.mjs` to customize the color palette.

### Add Images

Upload images through the CMS or place them in `public/images/`.

## Project Structure

```
/
├── public/              # Static assets
│   └── admin/          # Decap CMS files
├── src/
│   ├── content/        # Content files (markdown)
│   │   ├── research/
│   │   ├── feed/
│   │   └── musings/
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── components/     # Reusable components
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json        # Dependencies
```

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS**: Styling framework
- **Decap CMS**: Content management
- **Netlify**: Hosting & deployment

## Support

For issues or questions about:
- **Astro**: https://docs.astro.build
- **Netlify**: https://docs.netlify.com
- **Decap CMS**: https://decapcms.org/docs

## License

Personal project - all rights reserved.
