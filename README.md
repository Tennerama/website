# Tennerama Franchise Website

A modern, responsive franchise website for Tennerama's $10 boutique business opportunity. Built with React, Vite, and Tailwind CSS.

![Tennerama Franchise](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.7-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- 🎨 **Modern UI** with Tailwind CSS and Radix UI components
- 📱 **Fully responsive** design for all devices
- 🌍 **Multi-language support** (English, French, Chinese)
- ⚡ **Fast development** with Vite
- 🎯 **SEO optimized** for better search visibility
- 🚀 **Production ready** with optimized build
- 🎭 **Smooth animations** with Framer Motion
- 🔧 **Type-safe** development with TypeScript support

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.7
- **UI Components:** Radix UI
- **Package Manager:** pnpm (recommended) / npm
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Language Support:** Custom i18n implementation

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/tennerama-franchise-website.git
cd tennerama-franchise-website
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
```

3. **Start the development server:**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |

## 📁 Project Structure

```
tennerama-franchise/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components (Radix UI)
│   │   ├── Navigation.jsx  # Main navigation component
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Advantages.jsx  # Business advantages
│   │   ├── Investment.jsx  # Investment information
│   │   ├── Success.jsx     # Success stories
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer component
│   ├── hooks/              # Custom React hooks
│   │   └── useLanguage.js  # Language switching hook
│   ├── lib/                # Utility functions
│   │   ├── translations.js # Multi-language translations
│   │   └── utils.js        # Helper functions
│   ├── assets/             # Static assets (images, icons)
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Application entry point
├── public/                 # Public assets
├── dist/                   # Build output
└── package.json            # Dependencies and scripts
```

## 🌍 Multi-Language Support

The website supports multiple languages with easy switching:

- **English** 🇺🇸
- **French** 🇫🇷  
- **Chinese** 🇨🇳

Language switching is implemented with a custom hook and translation system.

## 🎨 Design System

The website uses a consistent design system with:

- **Color Palette:** Purple and blue gradients
- **Typography:** Modern, readable fonts
- **Components:** Reusable Radix UI components
- **Spacing:** Consistent Tailwind spacing scale
- **Animations:** Smooth Framer Motion transitions

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Import your GitHub repository to Vercel
2. Framework preset: Vite
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Deploy!

### Manual Deployment

```bash
# Build the project
pnpm build

# The built files will be in the `dist` directory
# Upload the contents of `dist` to your web server
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes:**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
5. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

## 📝 License

This project is private and proprietary to Tennerama. All rights reserved.

## 📞 Contact

- **Website:** [tennerama.com](https://tennerama.com)
- **Email:** franchise@tennerama.com
- **Phone:** 1-800-123-4567

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for animations 