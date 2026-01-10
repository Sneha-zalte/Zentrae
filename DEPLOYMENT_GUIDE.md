# ZENTRAE Deployment Guide - zentrae.in

Complete step-by-step guide to deploy your Next.js website to Vercel with GoDaddy domain.

## Prerequisites

- ✅ Domain: zentrae.in (registered on GoDaddy)
- ✅ GitHub account (free at github.com)
- ✅ Vercel account (free at vercel.com)

---

## Step 1: Test Build Locally

Before deploying, make sure your project builds successfully:

```bash
# Install dependencies (if not already done)
npm install

# Test the production build
npm run build

# If build succeeds, you're ready! If there are errors, fix them first.
```

---

## Step 2: Push Code to GitHub

### 2.1 Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+" icon** in the top right → **"New repository"**
3. Repository name: `zentrae-website` (or any name you prefer)
4. Description: "ZENTRAE - Social Media Marketing Agency Website"
5. Select **"Private"** or **"Public"** (your choice)
6. **DON'T** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### 2.2 Push Your Code to GitHub

**If you DON'T have git initialized yet:**

```bash
# In your project directory (c:\Projects\Zentrae)
git init
git add .
git commit -m "Initial commit - ZENTRAE website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zentrae-website.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

**If you already have git initialized:**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2.3 Verify on GitHub

- Go to your repository on GitHub
- You should see all your files (components, app, package.json, etc.)
- ✅ Code is now on GitHub!

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (if new) or **"Log In"** (if existing)
3. Choose **"Continue with GitHub"** (recommended - easier setup)
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"zentrae-website"** (or your repo name)
4. Click **"Import"** next to it

### 3.3 Configure Project Settings

On the import screen:

1. **Project Name**: `zentrae` (or keep default)
2. **Framework Preset**: Should auto-detect "Next.js" ✅
3. **Root Directory**: Leave as `./` (default)
4. **Build Command**: `npm run build` (default - don't change)
5. **Output Directory**: `.next` (default - don't change)
6. **Install Command**: `npm install` (default - don't change)

**Environment Variables** (if you have any):
- If you have `.env.local` with variables, add them here
- For now, we only have optional `NEXT_PUBLIC_SITE_URL`, skip if empty

7. Click **"Deploy"**

### 3.4 Wait for Deployment

- Vercel will automatically:
  - Install dependencies
  - Build your Next.js app
  - Deploy it
- This takes 2-3 minutes
- You'll see a progress log in real-time
- ✅ **Build successful!**

### 3.5 Get Your Vercel URL

After deployment:
- You'll get a URL like: `https://zentrae.vercel.app` or `https://zentrae-xxx.vercel.app`
- **Save this URL** - you'll need it for domain setup!
- ✅ **Your website is live!** (but on Vercel domain)

---

## Step 4: Connect GoDaddy Domain (zentrae.in)

### 4.1 Add Domain in Vercel

1. In your Vercel project dashboard
2. Go to **"Settings"** tab (top navigation)
3. Click **"Domains"** (left sidebar)
4. In the domain input field, type: `zentrae.in`
5. Click **"Add"** or **"Configure"**
6. Vercel will show you DNS configuration instructions

### 4.2 Update DNS Records in GoDaddy

You need to add DNS records in GoDaddy:

#### Option A: Using A Record (Recommended for apex domain)

1. Go to [GoDaddy.com](https://godaddy.com) → Log in
2. Click **"My Products"** → Find **"zentrae.in"** → Click **"DNS"** or **"Manage DNS"**
3. You'll see existing DNS records

**Add these records:**

**Record 1: A Record**
- **Type**: `A`
- **Name**: `@` (or leave blank, or `zentrae.in`)
- **Value**: `76.76.21.21` (Vercel's IP - verify in Vercel dashboard, it may change)
- **TTL**: `600` (or default)

**Record 2: CNAME for www**
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: `600` (or default)

**OR use the exact values Vercel shows you!**

4. Click **"Save"** after adding each record
5. **Delete** any conflicting records if asked

#### Option B: Using CNAME (If A record doesn't work)

Some domains work better with CNAME:

**For www:**
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com` (or what Vercel shows)
- **TTL**: `600`

**For root domain (@):**
- GoDaddy might require using A record, not CNAME
- Check what Vercel recommends in your dashboard

### 4.3 Verify DNS Settings in Vercel

1. Go back to Vercel → Your project → Settings → Domains
2. Vercel will automatically check DNS configuration
3. Status will show:
   - ⏳ **"Pending"** (waiting for DNS propagation)
   - ✅ **"Valid Configuration"** (ready!)
   - ❌ **"Invalid Configuration"** (check records again)

### 4.4 Wait for DNS Propagation

- **DNS changes take 24-48 hours** to propagate globally
- Usually works in **15 minutes to 2 hours**
- You can check status in Vercel dashboard
- Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation

### 4.5 SSL Certificate

- **Vercel automatically provides free SSL certificates!** 🎉
- Once DNS is configured, Vercel will issue SSL cert
- Takes 5-10 minutes after DNS is valid
- Your site will automatically use HTTPS ✅

---

## Step 5: Verify Everything Works

### 5.1 Test Your Website

1. Visit `https://zentrae.in` (wait for DNS propagation first)
2. Visit `https://www.zentrae.in`
3. Check:
   - ✅ Website loads correctly
   - ✅ Images display
   - ✅ Navigation works
   - ✅ All sections visible
   - ✅ SSL/HTTPS is active (lock icon in browser)

### 5.2 Update Environment Variable (Optional)

If you want to set the site URL:

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://zentrae.in`
   - **Environment**: Production, Preview, Development (select all)
3. Click **"Save"**
4. Redeploy: Go to **"Deployments"** tab → Click **"..."** on latest deployment → **"Redeploy"**

---

## Step 6: Future Updates (Continuous Deployment)

Every time you push code to GitHub:

1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. **Vercel automatically deploys!** ✨
   - No manual steps needed
   - Builds and deploys automatically
   - Takes 2-3 minutes
   - ✅ Live on zentrae.in automatically

---

## Troubleshooting

### Build Fails on Vercel
- Check the build logs in Vercel dashboard
- Make sure `npm run build` works locally first
- Fix any TypeScript or build errors

### DNS Not Working
- Verify DNS records match exactly what Vercel shows
- Wait 24-48 hours for full propagation
- Check [whatsmydns.net](https://www.whatsmydns.net)
- Contact GoDaddy support if needed

### SSL Certificate Not Issuing
- Wait 5-10 minutes after DNS is valid
- Make sure DNS records are correct
- Vercel support can help if stuck

### Domain Not Resolving
- Clear browser cache
- Try incognito/private window
- Check from different network/device
- Wait for DNS propagation

---

## Vercel Free Tier Limits

✅ **Included for FREE:**
- Unlimited deployments
- 100GB bandwidth/month
- 100 serverless function invocations/day
- Custom domains (free SSL)
- Automatic HTTPS
- Global CDN
- Preview deployments for every commit

**This is more than enough for most websites!** 🎉

---

## Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GoDaddy DNS Help**: [help.godaddy.com](https://help.godaddy.com)

---

## Quick Checklist

- [ ] Code builds locally (`npm run build`)
- [ ] Code pushed to GitHub
- [ ] Project deployed on Vercel
- [ ] Domain added in Vercel
- [ ] DNS records added in GoDaddy
- [ ] DNS propagation completed (checked)
- [ ] SSL certificate issued
- [ ] Website accessible at zentrae.in
- [ ] HTTPS working (green lock icon)

**You're all set! Your website is live at zentrae.in! 🚀**

