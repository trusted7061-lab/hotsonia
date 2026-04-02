# 🚀 Quick Start Guide - Next.js Website

## Getting Started in 5 Minutes

### Step 1: Install & Run
```bash
cd escorts-patna-nextjs
npm install
npm run dev
```

Your site is now live at **http://localhost:3000** 🎉

### Step 2: Make Your First Change

Edit `app/page.tsx` and you'll see changes instantly!

### Step 3: Common Updates

#### Update Phone Number
Search for `919229604907` and replace it with your WhatsApp number in:
- `app/components/Navbar.tsx`
- `app/components/Footer.tsx`  
- `app/page.tsx`

#### Add New Escorts
Edit model arrays in:
- `app/page.tsx` (line ~6)
- `app/gallery/page.tsx` (line ~4)
- `app/locations/[slug]/page.tsx` (line ~26)

#### Change Prices
Edit `app/prices/page.tsx` lines 5-45

#### Add Location
Add to `lib/locations.ts`:
```typescript
{ slug: 'new-location', name: 'New Location' }
```

## 🎯 Page Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home page |
| `/gallery` | `app/gallery/page.tsx` | All models |
| `/prices` | `app/prices/page.tsx` | Pricing info |
| `/contact` | `app/contact/page.tsx` | Contact form |
| `/links` | `app/links/page.tsx` | All locations |
| `/locations/[slug]` | `app/locations/[slug]/page.tsx` | Location pages |

## 📁 Key Files to Edit

```
app/
  ├── page.tsx              ← Homepage content
  ├── gallery/page.tsx      ← Models gallery
  ├── prices/page.tsx       ← Pricing packages
  ├── contact/page.tsx      ← Contact info
  ├── links/page.tsx        ← Locations list
  ├── locations/[slug]      ← Location pages
  ├── components/
  │   ├── Navbar.tsx        ← Navigation bar
  │   └── Footer.tsx        ← Footer content
  └── layout.tsx            ← Global layout
  
lib/
  ├── locations.ts          ← Add/remove areas
  └── metadata.ts           ← SEO settings
```

## 🔄 Common Tasks

### Add a New Page
1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`
3. Add link in `Navbar.tsx`

### Update Navigation
Edit `app/components/Navbar.tsx` lines 40-60

### Change Colors
Edit `tailwind.config.ts` colors section

### Add New Model
1. Add image to `/public/images/`
2. Add to model arrays in pages

### Update Site Info
Edit:
- `app/layout.tsx` - Site metadata
- `lib/metadata.ts` - SEO data
- `app/components/Footer.tsx` - Footer info

## 🚢 Deploy to Vercel

```bash
# 1. Push to GitHub
git push

# 2. Go to vercel.com
# 3. Import repository
# 4. Click Deploy

# Done! Your site is live 🎉
```

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Changes not showing?
```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf .next
# Restart
npm run dev
```

### Build errors?
```bash
# Clear everything
rm -rf node_modules .next
npm install
npm run build
```

## 📞 Next Steps

1. ✅ Install and run locally
2. ✅ Update phone number
3. ✅ Add your model images
4. ✅ Update prices
5. ✅ Test all pages
6. ✅ Deploy to Vercel
7. ✅ Set up custom domain
8. ✅ Monitor traffic

## 💡 Pro Tips

- Use `Ctrl+Shift+R` to hard refresh in browser
- Check browser console (F12) for errors
- All pages are mobile-responsive by default
- Images auto-optimize for web
- Fast loading = better SEO

## 📚 Learn More

- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [Vercel Guide](https://vercel.com/docs)

---

**You're all set! Start editing and enjoy your new modern website! 🎉**
