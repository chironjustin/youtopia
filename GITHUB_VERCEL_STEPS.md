# 🚀 Complete GitHub + Vercel Deployment Guide

## Step-by-Step Instructions

---

## 📋 Prerequisites

✅ You have:
- [ ] Created all the files from `DEPLOYMENT_PACKAGE.md`
- [ ] Created `App.tsx` from `APP_TSX_CODE.md`
- [ ] Downloaded 4 images and placed them in `public/images/`
- [ ] All files are in a folder called `z00-online` on your computer

---

## 🐙 PART 1: Upload to GitHub

### Method A: GitHub Web Interface (EASIEST)

1. **Go to GitHub**: https://github.com/signup (or login if you have an account)

2. **Create a new repository**:
   - Click the **"+"** icon (top right) → **"New repository"**
   - **Repository name**: `z00-online`
   - **Description**: "Password-protected occult landing page"
   - **Public** (must be public for free Vercel hosting)
   - **DO NOT** check "Add a README file" (we already have one)
   - Click **"Create repository"**

3. **Upload your files**:
   - You'll see a page that says "Quick setup"
   - Click: **"uploading an existing file"** (blue link in the middle)
   - **Drag and drop** your entire `z00-online` folder contents
   - Or click "choose your files" and select everything
   - Scroll down, add commit message: `Initial commit`
   - Click **"Commit changes"**

4. **✅ Done!** Your code is now on GitHub at: `https://github.com/YOUR_USERNAME/z00-online`

---

### Method B: Git Command Line (Advanced)

If you're comfortable with terminal/command line:

```bash
# Navigate to your project folder
cd z00-online

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/z00-online.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🚀 PART 2: Deploy to Vercel

### Step 1: Sign Up for Vercel

1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. ✅ You're signed in!

---

### Step 2: Import Your Project

1. On the Vercel dashboard, click **"Add New..."** → **"Project"**

2. **Import Git Repository**:
   - You'll see a list of your GitHub repos
   - Find **"z00-online"**
   - Click **"Import"**

3. **Configure Project**:
   - **Project Name**: `z00-online` (or leave default)
   - **Framework Preset**: Should auto-detect as **"Vite"** ✅
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (should be pre-filled)
   - **Output Directory**: `dist` (should be pre-filled)
   - **Install Command**: `npm install` (should be pre-filled)

4. **Environment Variables**: 
   - *(None needed for this project!)*
   - Click **"Deploy"**

5. **⏳ Wait 1-2 minutes** while Vercel builds your site...

6. **🎉 Success!** You'll see:
   - "Congratulations!"
   - A preview image of your site
   - Your live URL: `https://z00-online.vercel.app` (or similar)

7. **✅ Click "Visit"** to see your live site!

---

## 🌐 PART 3: Connect Your Domain (z00.online)

### Step 1: Add Domain in Vercel

1. In your Vercel project dashboard, click **"Settings"** (top menu)

2. Click **"Domains"** (left sidebar)

3. In the "Add Domain" field, type: `z00.online`

4. Click **"Add"**

5. Vercel will show you DNS records that look like this:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**⚠️ IMPORTANT:** Keep this tab open! You'll need these values.

---

### Step 2: Configure DNS in Strato

1. **Log into Strato**: https://www.strato.de/apps/CustomerLogin

2. **Navigate to Domains**:
   - Go to **"Domains"** or **"Domain-Verwaltung"**
   - Find **z00.online**
   - Click **"Verwalten"** (Manage) or **"DNS-Einstellungen"**

3. **Add DNS Records**:
   
   **Option A: If Strato shows DNS record editor:**
   
   - Find or create **A Record**:
     - Type: `A`
     - Host/Name: `@` (or leave blank)
     - Points to/Value: `76.76.21.21`
     - TTL: `3600` (or default)
   
   - Find or create **CNAME Record**:
     - Type: `CNAME`
     - Host/Name: `www`
     - Points to/Value: `cname.vercel-dns.com`
     - TTL: `3600` (or default)
   
   **Option B: If Strato uses "Domain Forwarding":**
   
   - You may need to use Strato's "DNS Management" or "External DNS"
   - Look for an option like "External Nameserver" or "DNS Einstellungen"
   - Add the A and CNAME records as above

4. **Save Changes**

---

### Step 3: Wait for DNS Propagation

- **⏳ Time required**: 10 minutes to 48 hours (usually 1-2 hours)

- **Check progress**: https://www.whatsmydns.net/#A/z00.online
  - Enter `z00.online`
  - Select "A" record type
  - Click "Search"
  - When most locations show `76.76.21.21`, you're good!

---

### Step 4: Verify Domain in Vercel

1. Go back to **Vercel** → **Settings** → **Domains**

2. After DNS propagates, you'll see:
   - ✅ **"Valid Configuration"** next to `z00.online`
   - 🔒 Vercel automatically adds **SSL certificate** (https)

3. **Visit your site**: https://z00.online

4. **🎉 YOU'RE LIVE!**

---

## 🔧 Troubleshooting

### "Invalid Configuration" in Vercel

**Cause**: DNS hasn't propagated yet
**Solution**: Wait 1-2 hours and refresh

---

### Images not showing

**Cause**: Images not in `public/images/` folder
**Solution**: 
1. Make sure folder structure is:
   ```
   public/
   └── images/
       ├── eye-logo.png
       ├── folder-icon.png
       ├── file-icon.png
       └── gathering.png
   ```
2. Push changes to GitHub:
   ```bash
   git add public/images/
   git commit -m "Add images"
   git push
   ```
3. Vercel will auto-deploy

---

### Build fails on Vercel

**Cause**: Missing dependencies or TypeScript errors

**Solution**:
1. Check the build logs in Vercel
2. Make sure `package.json` is correct
3. Try building locally first:
   ```bash
   npm install
   npm run build
   ```
4. Fix any errors, then push to GitHub

---

### Strato doesn't have DNS record editor

**Cause**: Some Strato plans hide DNS management

**Solution**:
1. Contact Strato support and ask to enable "DNS Management"
2. OR use Vercel's nameservers instead:
   - In Vercel, go to Domains → "Use Vercel Nameservers"
   - Copy the nameserver addresses
   - In Strato, change nameservers to Vercel's
   - This gives Vercel full control of DNS

---

## 📝 Useful Links

- **Your GitHub Repo**: `https://github.com/YOUR_USERNAME/z00-online`
- **Your Vercel Dashboard**: https://vercel.com/dashboard
- **Check DNS**: https://www.whatsmydns.net
- **Strato Login**: https://www.strato.de/apps/CustomerLogin

---

## ✅ Success Checklist

After completing all steps, you should have:

- [x] Code on GitHub
- [x] Site deployed on Vercel (with auto-deploy on every push)
- [x] Custom domain `z00.online` pointing to Vercel
- [x] Free SSL certificate (https)
- [x] Site loads with all images and animations working

---

## 🎯 Next Steps (Optional)

### Make Changes to Your Site

1. Edit files locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated design"
   git push
   ```
3. **Vercel auto-deploys in 1-2 minutes!**

---

### Add Analytics (Optional)

1. In Vercel, go to **Analytics** tab
2. Enable **Web Analytics** (free)
3. See visitor stats, page views, etc.

---

### Add More Domains (Optional)

Want `www.z00.online` to also work?

1. Vercel → Settings → Domains
2. Add `www.z00.online`
3. Follow the same DNS steps

---

**🎉 Congratulations!** Your site is now live at **https://z00.online**

Need help? Let me know which step you're stuck on!
