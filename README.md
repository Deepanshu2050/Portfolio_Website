# Premium MERN Portfolio

A modern, high-performance portfolio website built with the MERN stack featuring a black & white aesthetic, smooth animations powered by Framer Motion and GSAP, and AI-integrated project showcases.

## 🎨 Design

- **Pure Black & White Aesthetic**: Minimalist color palette with grayscale accents
- **Typography**: Space Grotesk for headings, Inter for body text
- **Premium Animations**: 60fps smooth animations with Framer Motion, GSAP, and Lenis smooth scrolling
- **Inspired by**: Apple, Linear, and Vercel design systems

## 🚀 Tech Stack

### Frontend
- React 18 (Vite)
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis (smooth scrolling)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Express Validator
- CORS

## 📁 Project Structure

```
portfolio/
├── src/                    # Frontend source
│   ├── components/        # Reusable components (Navbar, Footer, Cursor)
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   ├── animations/        # Framer Motion variants
│   ├── utils/             # Utility functions
│   ├── assets/            # Images and static files
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── server/                # Backend source
│   ├── config/           # Database configuration
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   └── index.js          # Server entry point
└── public/               # Public assets
```

## 🛠️ Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp ../.env.example .env

# Update .env with your MongoDB URI

# Start server
npm run dev
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## 📦 Features

### Sections
- **Hero**: Animated landing with text reveals and parallax effects
- **About**: Personal introduction with stats visualization
- **Skills**: Categorized skill cards with hover animations
- **Projects**: Featured projects (ValoBot highlighted) with hover overlays
- **Experience**: Vertical timeline with achievements
- **Contact**: Form with validation and social links

### Animations
- Page transitions
- Scroll-based reveals
- Magnetic button effects
- Smooth scrolling (Lenis)
- Custom cursor
- Navbar hide/show on scroll

### Backend API
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `POST /api/contact` - Submit contact form

## 🎯 Featured Project

**ValoBot - Valorant Player Finder**
- Python + Flask backend
- Rule-based AI matching
- Chatbot-style interaction
- Responsive frontend

## 📱 Responsive Design

Fully responsive across all devices:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel
```

### Backend (Render/Railway)
```bash
# Deploy to Render or Railway
# Set environment variables in platform dashboard
```

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 👤 Author

**Deepanshu Jangid**
- Full Stack MERN Developer
- Experience with React, Node.js, Express, MongoDB, Python, and AI systems

## 🙏 Acknowledgments

- Design inspiration: Apple, Linear, Vercel
- Animation libraries: Framer Motion, GSAP, Lenis
