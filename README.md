# Abhishek's Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Showcasing projects, experience, and skills with a clean and professional design.

## 🌟 Features

- **Modern Design** - Clean and professional UI with smooth animations
- **Responsive** - Fully responsive design that works on all devices
- **Dark Mode Support** - Built-in dark/light theme switching with next-themes
- **TypeScript** - Type-safe development with full TypeScript support
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Next.js App Router** - Latest Next.js features with App Router
- **Optimized Performance** - Image optimization and fast loading times
- **PDF Export** - Download resume as PDF using html2pdf.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6
- **Frontend**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Theme**: next-themes
- **Build Tool**: pnpm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Abhi-887/abhishek-portfolio.git
cd abhishek-portfolio
```

2. Install dependencies
```bash
pnpm install
```

3. Run development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── hero-section/
│   │   │   ├── about-me/
│   │   │   ├── education-skills/
│   │   │   ├── experience-sec/
│   │   │   ├── latest-work/
│   │   │   └── contact/
│   │   └── layout/
│   │       ├── header/
│   │       ├── footer/
│   │       └── logo/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── utils/
│   └── image.ts
└── types/
    └── html2pdf.d.ts
public/
├── data/
│   ├── page-data.json
│   └── work-data.json
├── images/
│   ├── home/
│   ├── icon/
│   ├── logo/
│   └── work/
└── pdf/
```

## 🎨 Customization

### Update Portfolio Data
Edit `public/data/page-data.json` and `public/data/work-data.json` to update:
- Personal information
- Education details
- Skills
- Work experience
- Projects

### Modify Styles
- Global styles: `src/app/globals.css`
- Component-specific styles: Use Tailwind classes in components

## 📱 Sections

- **Hero Section** - Eye-catching introduction with CTA
- **About Me** - Personal background and introduction
- **Education & Skills** - Academic qualifications and technical skills
- **Experience** - Professional work experience
- **Latest Work** - Portfolio projects showcase
- **Contact** - Get in touch section

## 🚢 Deployment

### Deploy with Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy with Other Platforms
The project can be deployed on any platform that supports Next.js:
- Netlify
- GitHub Pages
- AWS Amplify
- etc.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Abhishek** - [GitHub](https://github.com/Abhi-887)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.





