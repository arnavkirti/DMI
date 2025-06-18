# Design Made Intelligent (DMI) - Hero Section

A modern, animated hero section built with Next.js 15, TypeScript, and Framer Motion. This project recreates a professional landing page hero with smooth animations and responsive design.

## 🚀 Features

### Hero Section Implementation
- **Main headline**: "Design Made Intelligent" with animated text effects
- **Sub-headline**: "From Startup to Scale. AI Powered Design."
- **Additional description**: Engaging copy about the platform's benefits
- **CTA Buttons**: 
  - "Start Free Trial" (primary button)
  - "Watch Demo" (secondary button)

### Visual Design
- **Accent Color**: Custom red (#e30613) used strategically throughout
- **Typography**: Clean, modern font stack optimized for readability
- **Responsive Layout**: Seamlessly adapts from mobile to desktop
- **Modern UI**: Clean, minimalist design with subtle gradients

### Animation & Motion
- **Framer Motion Integration**: Smooth, performant animations
- **Staggered Text Animations**: Sequential fade-in effects for headlines
- **Background Motion**: Animated gradient shapes with continuous movement
- **Interactive Elements**: Hover states and micro-interactions
- **Performance Optimized**: Efficient animation rendering

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.18.1
- **Icons**: Lucide React
- **Runtime**: React 19

## 📱 Responsive Design

The hero section is fully responsive with breakpoints for:
- **Mobile**: Optimized typography and spacing for small screens
- **Tablet**: Balanced layout with medium-sized elements
- **Desktop**: Full-width hero with large typography and optimal spacing

## 🎨 Animation Details

### Container Animations
- **Stagger Effect**: Children animate in sequence with 0.2s delays
- **Smooth Transitions**: Eased animations for natural feel

### Text Animations
- **Fade-in from Bottom**: Text slides up while fading in
- **Glowing Effect**: Dynamic text shadow animation on main headline
- **Underline Animation**: Animated red underline appears after text

### Background Effects
- **Floating Shapes**: Multiple animated elements with different trajectories
- **Blur Effects**: Subtle background blur for depth
- **Color Transitions**: Smooth gradient animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/arnavkirti/DMI.git
cd dmi

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## 📁 Project Structure

```
DMI/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── HeroSection.tsx    # Main hero component
│   ├── CTAButtons.tsx     # Call-to-action buttons
│   └── Logo.tsx           # DMI logo component
├── public/               # Static assets
└── README.md            # Project documentation
```

## 🎯 Task Completion

### ✅ Hero Section Requirements
- [x] Main headline: "Design Made Intelligent"
- [x] Sub-headline with platform description
- [x] Two CTA buttons ("Try the Demo" & "Join Waitlist")
- [x] Responsive layout (desktop + mobile)
- [x] Visual animations and motion effects

### ✅ Visual Design Adjustments
- [x] Red accent color (#e30613) implementation
- [x] Clean, modern typography
- [x] Subtle motion and visual flair

### ✅ Animation Requirements
- [x] Framer Motion integration
- [x] Section animations (fade-in effects)
- [x] CTA hover states
- [x] Animated background elements
- [x] Text glow and underline animations

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy this Next.js app:

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on push

The deployed link in present in the description

## 📝 Development Notes

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Tailwind CSS**: Utility-first styling approach
- **Performance**: Optimized animations and lazy loading
- **Accessibility**: Semantic HTML and proper ARIA labels

---

Built with ❤️ using Next.js and Framer Motion
