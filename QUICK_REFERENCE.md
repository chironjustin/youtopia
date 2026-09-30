# 🎯 Quick Reference Card

Keep this handy while deploying!

---

## 📁 Project Structure

```
z00-online/
├── index.html
├── package.json
├── vite.config.ts
├── postcss.config.mjs
├── .gitignore
├── README.md
├── public/
│   └── images/
│       ├── eye-logo.png
│       ├── folder-icon.png
│       ├── file-icon.png
│       └── gathering.png
└── src/
    ├── main.tsx
    ├── app/
    │   └── App.tsx
    └── styles/
        ├── index.css
        ├── fonts.css
        ├── tailwind.css
        └── theme.css
```

---

## 🔑 Important Information

### Passwords
- **Main entrance**: `meow`
- **First folder**: `rawrxd`
- **Second folder**: *(press Enter, no password)*

### URLs
- **Current site**: https://land-jump-98069463.figma.site
- **New site**: https://z00.online
- **Temporary Vercel URL**: https://z00-online.vercel.app

### DNS Records for Strato
```
A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

---

## 🔗 Important Links

| Service | URL | Purpose |
|---------|-----|---------|
| **GitHub** | https://github.com | Code storage |
| **Vercel** | https://vercel.com | Hosting |
| **Strato** | https://www.strato.de | Domain DNS |
| **DNS Check** | https://www.whatsmydns.net | Verify DNS |

---

## 📋 File Count

**Total files you need to create:** 13 files

**Root level:** 6 files
- index.html
- package.json
- vite.config.ts
- postcss.config.mjs
- .gitignore
- README.md

**src/ folder:** 2 files
- main.tsx
- app/App.tsx

**src/styles/ folder:** 4 files
- index.css
- fonts.css
- tailwind.css
- theme.css

**public/images/ folder:** 4 images
- eye-logo.png
- folder-icon.png
- file-icon.png
- gathering.png

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Create files | 15 min |
| Get images | 5 min |
| GitHub setup | 10 min |
| Vercel deploy | 5 min |
| DNS config | 5 min |
| **Active work** | **40 min** |
| DNS propagation | 1-48 hrs |
| **Total** | **2-48 hrs** |

---

## 🆘 Quick Troubleshooting

### Images not showing
→ Check: `public/images/` folder exists
→ Check: Image names are exactly correct
→ Push to GitHub again

### Build fails
→ Check: All files copied correctly
→ Check: No typos in code
→ Review Vercel build logs

### Domain not working
→ Wait 1-2 hours for DNS
→ Check DNS at whatsmydns.net
→ Verify A record: 76.76.21.21

### "Invalid Configuration"
→ DNS hasn't propagated yet
→ Wait and refresh in 30 minutes

---

## 🎯 Critical Commands

### Git (if using terminal)
```bash
git add .
git commit -m "Your message"
git push
```

### Build locally (optional)
```bash
npm install
npm run dev      # Preview locally
npm run build    # Build for production
```

---

## ✅ Success Indicators

**You're done when you see:**

1. ✅ GitHub repo shows all files
2. ✅ Vercel shows "Deployment Complete"
3. ✅ Vercel domains shows green checkmark
4. ✅ https://z00.online loads
5. ✅ Password "meow" works
6. ✅ All animations working
7. ✅ SSL padlock in browser

---

## 📞 Where to Get Help

**Stuck on files?**
→ Re-read DEPLOYMENT_PACKAGE.md

**Stuck on GitHub?**
→ Re-read GITHUB_VERCEL_STEPS.md (Part 1)

**Stuck on Vercel?**
→ Re-read GITHUB_VERCEL_STEPS.md (Part 2)

**Stuck on DNS?**
→ Re-read GITHUB_VERCEL_STEPS.md (Part 3)

**Stuck on images?**
→ Check folder: `public/images/`
→ Check names match exactly

---

## 🎨 Project Details

**Stack:**
- React 18
- TypeScript
- Vite
- Tailwind CSS v4

**Features:**
- Password protection
- Countdown timer (to March 21, 2026 22:30 CET)
- Folder system with gallery
- Breathing animations
- Mobile responsive

**Browser Support:**
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

---

## 🔄 Update Workflow

**To make changes after deployment:**

1. Edit files on your computer
2. Git commands:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel auto-deploys (1-2 min)
4. Changes live at z00.online!

---

## 💰 Costs

| Service | Cost |
|---------|------|
| GitHub | FREE ✅ |
| Vercel | FREE ✅ |
| SSL Certificate | FREE ✅ |
| Bandwidth | FREE ✅ |
| z00.online domain | Already paid (Strato) |

**Total new costs: €0**

---

## 📊 Deployment Status Tracker

**Current Step:** _____________

**Time Started:** _____________

**Expected Completion:** _____________

**DNS Configured At:** _____________

**Expected Live At:** _____________

---

**Print this page for easy reference!**
