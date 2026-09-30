# ✅ Deployment Checklist

Use this checklist to track your progress deploying z00.online!

---

## 📁 PHASE 1: Create Project Files

### Create Folder Structure
- [ ] Created main folder: `z00-online/`
- [ ] Created subfolder: `z00-online/public/`
- [ ] Created subfolder: `z00-online/public/images/`
- [ ] Created subfolder: `z00-online/src/`
- [ ] Created subfolder: `z00-online/src/app/`
- [ ] Created subfolder: `z00-online/src/styles/`

### Root Files (copy from DEPLOYMENT_PACKAGE.md)
- [ ] Created: `index.html`
- [ ] Created: `package.json`
- [ ] Created: `vite.config.ts`
- [ ] Created: `postcss.config.mjs`
- [ ] Created: `.gitignore`
- [ ] Created: `README.md`

### Source Files
- [ ] Created: `src/main.tsx`
- [ ] Created: `src/app/App.tsx` (from APP_TSX_CODE.md)

### Style Files
- [ ] Created: `src/styles/index.css`
- [ ] Created: `src/styles/fonts.css`
- [ ] Created: `src/styles/tailwind.css`
- [ ] Created: `src/styles/theme.css`

---

## 🖼️ PHASE 2: Add Images

### Download from Figma
- [ ] Opened Figma file with Z00 project
- [ ] Found the eye logo image
- [ ] Found the folder icon image
- [ ] Found the file icon image
- [ ] Found the gathering image

### Export Images
- [ ] Exported eye logo as PNG → `eye-logo.png`
- [ ] Exported folder icon as PNG → `folder-icon.png`
- [ ] Exported file icon as PNG → `file-icon.png`
- [ ] Exported gathering as PNG → `gathering.png`

### Place Images
- [ ] Moved `eye-logo.png` to `public/images/`
- [ ] Moved `folder-icon.png` to `public/images/`
- [ ] Moved `file-icon.png` to `public/images/`
- [ ] Moved `gathering.png` to `public/images/`

---

## 🐙 PHASE 3: GitHub Setup

### Account Setup
- [ ] Created GitHub account (or logged in)
- [ ] Verified email address

### Create Repository
- [ ] Clicked "New repository"
- [ ] Named it: `z00-online`
- [ ] Set to Public
- [ ] Did NOT add README (we have our own)
- [ ] Created repository

### Upload Code
- [ ] Clicked "uploading an existing file"
- [ ] Uploaded all files from `z00-online/` folder
- [ ] Added commit message: "Initial commit"
- [ ] Committed changes
- [ ] Repository is live at: `https://github.com/YOUR_USERNAME/z00-online`

---

## 🚀 PHASE 4: Vercel Deployment

### Account Setup
- [ ] Went to vercel.com/signup
- [ ] Signed up with GitHub account
- [ ] Authorized Vercel to access GitHub

### Import Project
- [ ] Clicked "Add New Project"
- [ ] Found and imported `z00-online` repository
- [ ] Verified settings:
  - [ ] Framework: Vite
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `dist`
- [ ] Clicked "Deploy"

### Verify Deployment
- [ ] Waited for build to complete (1-2 minutes)
- [ ] Got success message
- [ ] Received temporary URL: `https://z00-online.vercel.app`
- [ ] Visited site and verified it works
- [ ] Tested password: "meow" ✓
- [ ] Tested folder password: "rawrxd" ✓
- [ ] Tested second folder (no password) ✓

---

## 🌐 PHASE 5: Domain Configuration

### Add Domain in Vercel
- [ ] Opened Vercel project dashboard
- [ ] Clicked Settings → Domains
- [ ] Added domain: `z00.online`
- [ ] Copied DNS records shown by Vercel:
  - [ ] A Record: `@` → `76.76.21.21`
  - [ ] CNAME: `www` → `cname.vercel-dns.com`

### Configure DNS in Strato
- [ ] Logged into Strato account
- [ ] Found domain management for z00.online
- [ ] Opened DNS settings
- [ ] Added A Record:
  - Type: A
  - Name: @ (or blank)
  - Value: `76.76.21.21`
- [ ] Added CNAME Record:
  - Type: CNAME
  - Name: www
  - Value: `cname.vercel-dns.com`
- [ ] Saved DNS changes

### Wait for DNS Propagation
- [ ] Checked DNS at whatsmydns.net
- [ ] Waiting for propagation (1-48 hours, usually 1-2 hours)
- [ ] DNS shows correct IP address globally

### Verify Domain
- [ ] Returned to Vercel → Domains
- [ ] Domain shows ✅ "Valid Configuration"
- [ ] SSL certificate automatically added
- [ ] Visited https://z00.online
- [ ] Site loads correctly!

---

## 🎯 FINAL VERIFICATION

### Test All Features
- [ ] Landing page loads (grey background)
- [ ] Eye logo appears with animation
- [ ] Countdown timer shows correct time
- [ ] Gathering image displays
- [ ] Password input works
- [ ] Entered "meow" and accessed second page
- [ ] Black background shows
- [ ] Folder icon appears in top left
- [ ] Clicked folder and entered password "rawrxd"
- [ ] File list appears vertically
- [ ] Clicked file icons and images display
- [ ] Images appear in different positions
- [ ] Second folder at bottom of list
- [ ] Clicked second folder and pressed Enter (no password)
- [ ] Black screen appears

### Performance Check
- [ ] Site loads quickly
- [ ] All images load properly
- [ ] Animations work smoothly
- [ ] Works on desktop
- [ ] Works on mobile (tested iPhone view)
- [ ] HTTPS (secure) connection works

---

## 🎉 LAUNCH COMPLETE!

### Final Steps
- [ ] Shared new URL with anyone who needs it
- [ ] Updated any bookmarks from old Figma Make URL
- [ ] Celebrated! 🎊

---

## 📊 Post-Launch (Optional)

### Future Updates
- [ ] Know how to edit code locally
- [ ] Know how to push changes to GitHub
- [ ] Understand Vercel auto-deploys on push
- [ ] Set up Vercel Analytics (optional)

### Maintenance
- [ ] Bookmarked Vercel dashboard
- [ ] Bookmarked GitHub repository
- [ ] Know passwords:
  - Main: `meow`
  - Folder: `rawrxd`
  - Second folder: (no password)

---

## 🏆 Success Metrics

**You're done when:**

✅ https://z00.online loads
✅ All features work
✅ HTTPS is active
✅ Images display correctly
✅ Animations work
✅ Mobile responsive

---

**Current Status:** _____ / 75 steps completed

**Estimated Time Remaining:** _____

**Stuck on step:** _____

---

**Notes:**
