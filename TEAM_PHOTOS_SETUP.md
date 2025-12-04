# Team Member Photos Setup Guide

## 📸 Add Your Team Photos

To display team member photos on the website, please add the following images to the `/public/images/` directory:

### Required Image Files:

1. **team-nobin.jpg** - Photo of Ashraful Islam Nobin (Founder & CEO)
2. **team-bishal.jpg** - Photo of Bishal (Co-Founder & COO)
3. **team-shishir.jpg** - Photo of Shishir (Co-Founder & CTO)

---

## 📋 Image Requirements:

### Specifications:
- **Format**: JPG, JPEG, or PNG
- **Recommended Size**: 600x600px (square aspect ratio)
- **Minimum Size**: 400x400px
- **Maximum File Size**: 500KB for optimal loading
- **Aspect Ratio**: 1:1 (square) preferred
- **Quality**: High resolution, professional appearance

### Best Practices:
- ✅ Professional headshot or portrait
- ✅ Clean background (solid color or blurred)
- ✅ Good lighting (well-lit face)
- ✅ Centered face composition
- ✅ Appropriate attire (business casual/professional)
- ✅ Clear, sharp image quality

---

## 🖼️ How to Add Images:

### Option 1: Using File Manager
1. Navigate to: `/home/nobin/ProjectWork/Practice_Project/pinalab/public/images/`
2. Copy your team member photos into this folder
3. Rename them exactly as specified above:
   - `team-nobin.jpg`
   - `team-bishal.jpg`
   - `team-shishir.jpg`

### Option 2: Using Terminal
```bash
# Navigate to the images directory
cd /home/nobin/ProjectWork/Practice_Project/pinalab/public/images/

# Copy and rename your images
cp ~/path/to/nobin-photo.jpg ./team-nobin.jpg
cp ~/path/to/bishal-photo.jpg ./team-bishal.jpg
cp ~/path/to/shishir-photo.jpg ./team-shishir.jpg
```

---

## 🎨 What's Been Implemented:

### Component Features:
✅ **Next.js Image Component** - Optimized image loading
✅ **Fallback Avatars** - Green gradient with initials if photo missing
✅ **Hover Effects** - Image zoom on hover
✅ **Social Icons Overlay** - LinkedIn & Twitter appear on hover
✅ **Responsive Design** - Adapts to all screen sizes
✅ **Modern Cards** - Glassmorphism with green borders
✅ **Smooth Animations** - Fade-in and lift effects

### Visual Effects:
- 🖼️ 300x300px image containers
- 🎯 Image zoom (1.1x) on card hover
- 🌟 Dark gradient overlay with social icons
- 💚 Green-themed social icon buttons
- ⚡ Smooth transitions (0.4s)
- 📱 Mobile-optimized (250px height)

---

## 🎭 Fallback Display:

If images are not found, the system automatically displays:
- Large initial letter (first letter of name)
- Green gradient background
- 80px font size (60px on mobile)
- Clean, professional appearance

---

## 🔄 After Adding Images:

1. **Refresh browser** (Ctrl+Shift+R or Cmd+Shift+R)
2. **Check About page** at http://localhost:3000/about
3. **Verify images load** correctly
4. **Test hover effects** on team cards

---

## 🎨 Design Details:

### Grid Layout:
- **Desktop**: 3 columns
- **Tablet**: 2 columns  
- **Mobile**: 1 column

### Card Styling:
- **Border**: 2px green (emerald)
- **Hover**: Lifts 12px, green glow
- **Background**: Glassmorphism effect
- **Radius**: 24px rounded corners

### Social Icons:
- **Position**: Bottom of image overlay
- **Animation**: Slide up on hover
- **Style**: Circular green buttons
- **Size**: 48x48px
- **Icons**: LinkedIn & Twitter SVGs

---

## 💡 Tips:

1. **Use square photos** for best results
2. **Compress images** before upload (use TinyPNG or similar)
3. **Keep consistent style** across all photos (same background, lighting)
4. **Test on mobile** to ensure faces are clearly visible
5. **Update LinkedIn/Twitter URLs** in `/src/data/products.js`

---

## 🔗 Update Social Links:

Edit `/src/data/products.js` to add real social media URLs:

```javascript
{
  id: 1,
  name: "Ashraful Islam Nobin",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
}
```

---

## ✨ Current Status:

- ✅ Component updated with Image support
- ✅ CSS styling added (hover effects, overlays)
- ✅ Fallback avatars working
- ✅ Social icon buttons functional
- ✅ Responsive design implemented
- ⏳ Awaiting team member photos

**Once you add the photos, your team section will look professional and modern!** 🚀
