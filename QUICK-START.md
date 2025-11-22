# QUICK START GUIDE

## What You Have

A complete, beautiful website with:
- ✅ Modern, distinctive design with neural-inspired aesthetics
- ✅ Three content types: Research, Feed (daily updates), Musings
- ✅ Built-in content management system (CMS)
- ✅ Ready to deploy to Netlify (FREE hosting)
- ✅ Custom domain support ($12/year)

## Next Steps (30 minutes total)

### 1. Test Locally (5 minutes)

Open a terminal in this folder and run:
```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser to see your site!

### 2. Create GitHub Repository (5 minutes)

1. Go to https://github.com/new
2. Name it whatever you want (e.g., "personal-site")
3. Don't initialize with README
4. Copy the commands they show you, but use these instead:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin master
```

### 3. Deploy to Netlify (10 minutes)

1. Go to https://app.netlify.com (sign up with GitHub)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Click "Deploy" (settings should auto-detect)
5. Wait 2 minutes - your site is live!

### 4. Enable Content Management (10 minutes)

In Netlify:
1. Go to "Site settings" → "Identity" → "Enable Identity"
2. Set registration to "Invite only"
3. Go to "Services" → "Git Gateway" → "Enable Git Gateway"
4. Go to "Identity" tab → "Invite users" → Add your email
5. Check email, accept invitation
6. Visit yoursite.netlify.app/admin - you can now add content from any browser!

### 5. Customize (Optional)

Edit these files to make it yours:
- `src/pages/index.astro` - Homepage text
- `src/pages/about.astro` - Your bio, CV, links
- `src/layouts/BaseLayout.astro` - Update email/social links in footer

### 6. Add Custom Domain (Later)

When you're ready:
1. Buy domain from Namecheap/Google Domains (~$12/year)
2. In Netlify: "Domain settings" → "Add custom domain"
3. Follow DNS instructions
4. Get free HTTPS automatically!

## How to Add Content

### Option 1: Through the CMS (Easy)
1. Go to yoursite.netlify.app/admin
2. Click "Research Posts", "Feed Updates", or "Musings"
3. Click "New..."
4. Write and publish!

### Option 2: With Files (Advanced)
1. Add markdown files to `src/content/research/`, `feed/`, or `musings/`
2. Commit and push to GitHub
3. Netlify auto-deploys

## Support

- **Stuck?** Check README.md for detailed instructions
- **Questions?** All major tools have great docs (linked in README)

## What Makes This Special

- **$0 hosting** (Netlify free tier is generous)
- **No WordPress headaches** (no security updates, plugins breaking)
- **Lightning fast** (static site = instant loading)
- **Easy updates** (web interface OR markdown files)
- **Professional** (shows you can build things)
- **Scalable** (starts simple, can grow complex)

---

**You're 30 minutes away from having a live, professional website. Let's do this!**
