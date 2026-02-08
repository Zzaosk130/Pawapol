# Quick Cloudflare Deployment Guide

## 🚀 Fastest Way to Deploy (5 minutes)

### Step 1: Prepare Your Project

```bash
# Make sure you're in the project directory
cd valentine-gift

# Install dependencies (if not already done)
npm install

# Build the static site
npm run build
```

This creates an `out` folder with your static website.

### Step 2: Deploy to Cloudflare Pages

**Option A: Drag & Drop (Easiest)**

1. Go to https://dash.cloudflare.com/
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Upload assets**
5. Give your project a name (e.g., "valentine-gift")
6. Drag the entire `out` folder into the upload area
7. Click **Deploy site**
8. Done! You'll get a URL like: `valentine-gift.pages.dev`

**Option B: Using Wrangler CLI**

```bash
# Install Cloudflare Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy (make sure you've run 'npm run build' first)
wrangler pages deploy out --project-name=valentine-gift

# Follow the prompts and you're done!
```

**Option C: GitHub Auto-Deploy (Best for Updates)**

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Valentine's gift website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. In Cloudflare Dashboard → Pages → Create project → Connect to Git
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. Click Deploy

Now whenever you push to GitHub, it auto-deploys!

## 📝 Customization Before Deploy

### 1. Update Messages

Edit `app/page.tsx` - find the `CARDS` array (around line 6):

```typescript
const CARDS = [
  {
    id: 1,
    title: 'Why I Love You',
    content: 'Your personal message here...'
  },
  // ... add more cards
]
```

### 2. Update Photos

**Option A: Use Your Own Photos**

1. Create folder: `public/photos`
2. Add your photos: `photo1.jpg`, `photo2.jpg`, etc.
3. Update `app/page.tsx` - find `PHOTOS` array (around line 30):

```typescript
const PHOTOS = [
  { id: 1, url: '/photos/photo1.jpg', caption: 'First Date' },
  { id: 2, url: '/photos/photo2.jpg', caption: 'Anniversary' },
  // ... add more
]
```

**Option B: Use External URLs**

```typescript
const PHOTOS = [
  { 
    id: 1, 
    url: 'https://your-image-host.com/photo1.jpg', 
    caption: 'Description' 
  },
]
```

### 3. Test Countdown

The countdown targets **Feb 14, 2026**. To test:

Change line ~60 in `app/page.tsx`:
```typescript
// Original
const targetDate = new Date('2026-02-14T00:00:00').getTime()

// For testing (change to past date)
const targetDate = new Date('2024-01-01T00:00:00').getTime()
```

Don't forget to change it back before final deploy!

## 🎨 Color Customization

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  valentine: {
    rose: '#ffb3ba',    // Light pink
    blush: '#ffc8dd',   // Soft pink
    cream: '#fff5f7',   // Almost white
    petal: '#f8d7da',   // Petal pink
    deep: '#d8717e',    // Deeper rose
  }
}
```

## 🌐 Custom Domain (Optional)

1. In Cloudflare Pages, open your project
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `valentine.yourdomain.com`)
5. Update DNS records as shown
6. Wait a few minutes for SSL

## 🔧 Troubleshooting

**Build fails?**
- Make sure Node.js 18+ is installed
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build`

**Photos not showing?**
- Check file paths are correct
- Ensure photos are in `public` folder
- Rebuild after adding photos

**Countdown shows wrong time?**
- Check your timezone
- The countdown uses UTC
- Adjust date/time in `page.tsx` if needed

## 📱 Mobile Optimization

The site is fully responsive and works great on:
- 📱 Phones (iOS & Android)
- 📱 Tablets
- 💻 Desktop
- 🖥️ Large screens

## 🎁 Final Checklist

Before deploying:

- [ ] Customize all 4 card messages
- [ ] Upload/update all photos
- [ ] Test locally (`npm run dev`)
- [ ] Verify countdown date is correct
- [ ] Build successfully (`npm run build`)
- [ ] Deploy to Cloudflare
- [ ] Test on mobile device
- [ ] Share with your Valentine! 💕

---

**Need Help?**
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js Docs: https://nextjs.org/docs
