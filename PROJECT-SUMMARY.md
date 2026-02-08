# 💕 Valentine's Day Gift Website - Project Summary

## What You Got

A beautiful, minimal Valentine's Day website with:

✨ **Countdown Timer** - Counts down to Feb 14, 2026
💌 **4 Expandable Love Cards** - Click to reveal heartfelt messages
🌹 **Floating Roses & Petals** - Elegant animations throughout
📸 **Photo Album** - Interactive gallery with modal view
🎨 **Minimal Design** - Soft pink palette, elegant fonts, calm aesthetic

## Quick Start

```bash
cd valentine-gift
npm install
npm run dev
```

Open http://localhost:3000 to see it!

## Before You Deploy - Customize It!

### 1. Update the Love Messages ✍️

Open: `app/page.tsx`
Find: Line ~6 (the `CARDS` array)
Edit: Change the titles and messages to your own

### 2. Add Your Photos 📸

**Easy way:**
1. Put photos in `public/photos/` folder
2. Open `app/page.tsx`
3. Find line ~30 (the `PHOTOS` array)
4. Update URLs to: `/photos/yourphoto.jpg`

**Or use online photos:**
- Just paste image URLs directly in the `PHOTOS` array

### 3. Test the Countdown ⏰

The site shows countdown until Feb 14, 2026. To test:
- Line 60 in `app/page.tsx`
- Change date to past: `new Date('2024-01-01T00:00:00')`
- Content appears immediately!
- Change back before final deploy

## Deploy to Cloudflare (3 Steps)

### Easiest Method:

```bash
# 1. Build
npm run build

# 2. Go to Cloudflare
# Visit: https://dash.cloudflare.com/
# Pages → Create project → Upload assets

# 3. Drag the 'out' folder
# Give it a name → Deploy!
```

**Full guide:** See `DEPLOY.md` for all deployment options

## Files Structure

```
valentine-gift/
├── app/
│   ├── page.tsx          ← Main code (edit messages & photos here)
│   ├── layout.tsx        ← Page setup
│   └── globals.css       ← Styles & animations
├── public/               ← Put your photos here
├── package.json          ← Dependencies
├── next.config.js        ← Next.js config (already set for static export)
├── tailwind.config.js    ← Design tokens
├── README.md             ← Full documentation
└── DEPLOY.md            ← Deployment guide
```

## Design Features

**Colors:**
- Rose: `#ffb3ba` - Light pink
- Blush: `#ffc8dd` - Soft pink  
- Cream: `#fff5f7` - Almost white
- Deep: `#d8717e` - Deeper rose

**Fonts:**
- Playfair Display (elegant headers)
- Crimson Text (readable body)

**Animations:**
- Floating roses 🌹
- Falling petals ✨
- Smooth card expansions
- Fade-in effects
- Pulsing countdown glow

## Fully Responsive

✅ Mobile phones
✅ Tablets  
✅ Desktop
✅ Large screens

## What Happens

**Before Feb 14, 2026:**
- Shows elegant countdown timer
- Floating rose animation
- "Something special is waiting" message

**After Feb 14, 2026 (00:00:00):**
- Countdown disappears
- Full content reveals:
  - Header with "Happy Valentine's Day 💕"
  - Row of floating roses
  - 4 clickable love cards
  - Photo album button
  - Interactive photo gallery
  - Footer message

## Customization Tips

**Change Colors:**
Edit `tailwind.config.js` → `colors.valentine`

**Add More Cards:**
Add objects to `CARDS` array in `page.tsx`

**More/Fewer Photos:**
Edit `PHOTOS` array - add or remove items

**Change Countdown Date:**
Line 60 in `page.tsx`

**Modify Animations:**
Edit `globals.css` and `tailwind.config.js`

## Need Help?

- **README.md** - Full documentation
- **DEPLOY.md** - Complete deployment guide
- Test locally first: `npm run dev`
- Build before deploy: `npm run build`

## Made With

- ⚡ Next.js 15 (React framework)
- 🎨 Tailwind CSS (styling)
- 💝 TypeScript (type safety)
- ☁️ Cloudflare Pages ready (static export)

---

**Ready to make your Valentine smile? 💕**

1. Customize the messages and photos
2. Test locally
3. Deploy to Cloudflare
4. Share the link!

**The perfect digital Valentine's gift is just a few edits away! ✨**
