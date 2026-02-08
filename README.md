# Valentine's Day Gift Website 💕

A beautiful, minimal Valentine's Day website built with Next.js featuring a countdown timer, love cards, and photo album.

## Features

- ⏰ **Countdown Timer**: Counts down to February 14, 2026
- 💌 **Love Cards**: 4 expandable cards with heartfelt messages
- 📸 **Photo Album**: Interactive gallery with modal view
- 🌹 **Animated Elements**: Floating roses and falling petals
- 🎨 **Minimal Design**: Soft pastels, elegant typography, calm aesthetic

## Customization

### Update the Messages

Edit the `CARDS` array in `app/page.tsx` (around line 6) to customize your messages:

```typescript
const CARDS = [
  {
    id: 1,
    title: 'Your Title Here',
    content: 'Your message here...'
  },
  // Add more cards...
]
```

### Update the Photos

Replace the photo URLs in the `PHOTOS` array in `app/page.tsx` (around line 30):

```typescript
const PHOTOS = [
  { id: 1, url: '/photos/photo1.jpg', caption: 'Your Caption' },
  // Add more photos...
]
```

**Option 1**: Use external URLs (like Unsplash or your own hosting)
**Option 2**: Add photos to `/public/photos/` folder and reference them as `/photos/photo1.jpg`

## Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized static export in the `out` folder.

## Deploy to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/valentine-gift.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Authorize and select your repository
   
3. **Configure Build Settings**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - Click **Save and Deploy**

### Method 2: Direct Upload (Wrangler CLI)

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy out --project-name=valentine-gift
   ```

### Method 3: Drag and Drop Upload

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Pages**
   - Visit [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **Pages** → **Create a project**
   - Select **Upload assets**
   - Drag and drop the `out` folder
   - Name your project and click **Deploy**

## Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow the DNS configuration instructions

## Testing the Countdown

The countdown is set for **February 14, 2026 at 00:00:00**. 

To test the "after countdown" view during development:

1. Open `app/page.tsx`
2. Find line ~60: `const targetDate = new Date('2026-02-14T00:00:00').getTime()`
3. Change to a past date temporarily: `const targetDate = new Date('2024-01-01T00:00:00').getTime()`
4. Save and the content will appear immediately
5. Remember to change it back before deploying!

## Fonts Used

- **Display**: Playfair Display (elegant serif)
- **Body**: Crimson Text (readable serif)

Both are loaded from Google Fonts.

## Color Palette

- Rose: `#ffb3ba`
- Blush: `#ffc8dd`
- Cream: `#fff5f7`
- Petal: `#f8d7da`
- Deep: `#d8717e`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Personal use project. Feel free to customize and use for your own Valentine's gift!

---

Made with 💕 using Next.js and Tailwind CSS
