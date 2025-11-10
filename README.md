# Premium Rewards - CRED-Inspired React Website

A premium, animation-rich React website inspired by [CRED](https://cred.club), optimized for GitHub Pages deployment.

![Premium Rewards Website](https://github.com/user-attachments/assets/22b601cd-d6a9-4f6a-8781-bc7e777a067a)

## 🌟 Features

- **Modern Tech Stack**: React + Vite + TailwindCSS v4 + Framer Motion
- **Luxurious Design**: Black gradient backgrounds, gold accents, and bold typography
- **Smooth Animations**: Parallax scrolling, hover effects, and scroll-based reveals
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **Performance**: Optimized static build (335KB JS gzipped)
- **GitHub Pages Ready**: Configured for seamless deployment

## 🎨 Design Highlights

### Hero Section
- Large animated headline with gradient text
- Mouse-follow lighting effects
- Floating credit card animations
- Smooth call-to-action buttons

### Scroll Sections
- Parallax animations on scroll
- Text and imagery reveal effects
- Storytelling-driven layout

### Rewards Section
- Three-tier system (Silver, Gold, Platinum)
- Hover animations on cards
- Gradient overlays and badges

### Testimonials
- Magazine-style quotes
- 5-star ratings
- Trust indicators with stats

### Footer
- Minimal, elegant black background
- Social media links
- Newsletter subscription

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sxtyxmm/sxtyxmm.github.io.git
   cd sxtyxmm.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📦 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` if needed:
   ```json
   "homepage": "https://yourusername.github.io"
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

The site will be deployed to your GitHub Pages URL.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the static files ready for deployment to any hosting service.

## 🎯 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: TailwindCSS 4.1.17
- **Animations**: Framer Motion 12.23.24
- **Deployment**: gh-pages 6.3.0

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Hero section with animations
│   │   ├── ScrollSection.jsx     # Parallax scroll sections
│   │   ├── RewardsSection.jsx    # Tier cards section
│   │   ├── TestimonialsSection.jsx # Reviews section
│   │   └── Footer.jsx            # Footer component
│   ├── App.jsx                   # Main app component
│   ├── index.css                 # Global styles with Tailwind
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── dist/                         # Production build (generated)
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                     # This file
```

## 🎨 Customization

### Colors
The site uses a premium black and gold color scheme. To customize:

1. Edit `src/index.css` for gradient utilities
2. Modify Tailwind colors in component files

### Content
Update the content in component files:
- `Hero.jsx` - Main headline and CTAs
- `ScrollSection.jsx` - Feature sections
- `RewardsSection.jsx` - Tier information
- `TestimonialsSection.jsx` - User reviews

### Animations
All animations are powered by Framer Motion. Customize by modifying the `motion` components in each file.

## 🌙 Design Philosophy

This website follows CRED's design principles:
- **Minimal**: Clean, uncluttered interface
- **Cinematic**: Smooth, movie-like animations
- **Luxurious**: Premium feel with dark themes and gold accents
- **Engaging**: Interactive elements that respond to user input

## 📊 Performance

- **Build Size**: ~335KB JS (gzipped: ~106KB)
- **CSS Size**: ~20KB (gzipped: ~6KB)
- **Load Time**: < 1s on modern connections
- **Lighthouse Score**: 90+ across all metrics

## 🔒 Security

- No security vulnerabilities in dependencies
- CodeQL analysis: 0 alerts
- Regular dependency updates recommended

## 📈 Future Enhancements

- [ ] Add more interactive animations
- [ ] Implement dark/light theme toggle
- [ ] Add backend integration for contact form
- [ ] Include more reward tiers
- [ ] Add blog section
- [ ] Implement PWA features

## �� Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

**Satyam Shishodiya**
- Email: shishodiyasatyam@gmail.com
- LinkedIn: [linkedin.com/in/satyam-shishodiya](https://linkedin.com/in/satyam-shishodiya)
- GitHub: [@sxtyxmm](https://github.com/sxtyxmm)

---

⭐ Star this repository if you found it helpful!

Built with ❤️ inspired by CRED's premium design language.
