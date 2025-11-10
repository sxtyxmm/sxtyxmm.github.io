# Deployment Guide

This document provides instructions for deploying the Premium Rewards website to GitHub Pages and other hosting platforms.

## 🚀 GitHub Pages Deployment

### Option 1: Automated Deployment (Recommended)

1. **Build and Deploy:**
   ```bash
   npm run deploy
   ```

   This command will:
   - Build the production bundle
   - Deploy to the `gh-pages` branch
   - Make the site live at `https://sxtyxmm.github.io`

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages (if not already installed):**
   ```bash
   npm install -g gh-pages
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   gh-pages -d dist
   ```

### Verify Deployment

After deployment, your site will be available at:
- **Production URL:** https://sxtyxmm.github.io

It may take a few minutes for changes to propagate.

## 🔧 Configuration

### Update Base URL

If deploying to a custom domain or subdirectory:

1. **Edit `vite.config.js`:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // For subdirectory deployment
     // OR
     base: '/', // For root domain
   })
   ```

2. **Update `package.json`:**
   ```json
   {
     "homepage": "https://yourdomain.com"
   }
   ```

## 📦 Alternative Hosting Options

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

### Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Drag and drop `dist` folder** to Netlify's web interface

   OR use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Cloudflare Pages

1. **Connect your GitHub repository** to Cloudflare Pages
2. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`

## 🌐 Custom Domain Setup

### For GitHub Pages:

1. **Create a `CNAME` file** in the `public` folder:
   ```
   yourdomain.com
   ```

2. **Configure DNS** at your domain registrar:
   - Add A records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   
   OR
   
   - Add CNAME record: `your-username.github.io`

3. **Enable HTTPS** in GitHub repository settings

## 🔍 Troubleshooting

### Issue: 404 on Page Refresh

**Solution:** Add a `404.html` that redirects to `index.html`:

1. **Create `public/404.html`:**
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta http-equiv="refresh" content="0; url=/" />
     </head>
     <body></body>
   </html>
   ```

### Issue: Assets Not Loading

**Solution:** Check the `base` configuration in `vite.config.js`

### Issue: Build Fails

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

## 📊 Performance Optimization

Before deploying to production:

1. **Check bundle size:**
   ```bash
   npm run build
   ```

2. **Optimize images** (if added)
3. **Enable compression** at hosting provider
4. **Configure CDN** for static assets

## 🔒 Security Checklist

Before deployment:

- [ ] No sensitive data in source code
- [ ] Environment variables properly configured
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies updated (`npm audit`)

## 📈 Post-Deployment

After successful deployment:

1. **Test on multiple devices**
2. **Run Lighthouse audit**
3. **Check analytics setup**
4. **Monitor error tracking**
5. **Set up uptime monitoring**

## 🆘 Support

If you encounter issues:
- Check [GitHub Issues](https://github.com/sxtyxmm/sxtyxmm.github.io/issues)
- Review [Vite Documentation](https://vitejs.dev/)
- Contact: shishodiyasatyam@gmail.com
