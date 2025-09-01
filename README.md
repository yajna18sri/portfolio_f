# Professional Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, beautiful design, and professional presentation of skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glass-morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: Hover effects, scroll animations, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Animated skill bars and proficiency indicators
- **Timeline Experience**: Professional experience and education timeline
- **Social Integration**: Links to professional social media profiles

## 🛠️ Technologies Used

- **React 18.2.0** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with gradients and animations
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Header.css
│   ├── Hero.js           # Hero section with introduction
│   ├── Hero.css
│   ├── About.js          # About section with stats
│   ├── About.css
│   ├── Skills.js         # Skills section with progress bars
│   ├── Skills.css
│   ├── Projects.js       # Projects showcase with filters
│   ├── Projects.css
│   ├── Experience.js     # Work experience and education timeline
│   ├── Experience.css
│   ├── Contact.js        # Contact form and information
│   ├── Contact.css
│   ├── Footer.js         # Footer with social links
│   └── Footer.css
├── App.js                # Main application component
├── App.css               # App-level styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

#### 1. Hero Section (`src/components/Hero.js`)
```javascript
// Update these lines
<h1 className="hero-name">Your Name</h1>
<h2 className="hero-title">Your Title</h2>
<p className="hero-description">Your description...</p>
```

#### 2. About Section (`src/components/About.js`)
```javascript
// Update the stats array
const stats = [
  { number: 'X+', label: 'Years Experience' },
  { number: 'X+', label: 'Projects Completed' },
  // ... add your own stats
];
```

#### 3. Skills Section (`src/components/Skills.js`)
```javascript
// Update the skillCategories array with your skills
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Skill Name', icon: IconComponent, level: 85, color: '#color' },
      // ... add your skills
    ]
  }
];
```

#### 4. Projects Section (`src/components/Projects.js`)
```javascript
// Update the projects array with your projects
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description...',
    // ... add your project details
  }
];
```

#### 5. Experience Section (`src/components/Experience.js`)
```javascript
// Update work experience, education, and certifications
const workExperience = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    // ... add your experience
  }
];
```

#### 6. Contact Section (`src/components/Contact.js`)
```javascript
// Update contact information
const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  }
];
```

#### 7. Footer (`src/components/Footer.js`)
```javascript
// Update footer information
<h3>Your Name</h3>
<p>Your description...</p>
```

### Styling Customization

#### Colors
The portfolio uses a consistent color scheme defined in CSS variables. You can update the colors in the CSS files:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* You can change these hex values to match your brand */
```

#### Fonts
The portfolio uses the Inter font family. You can change it in `public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `src/index.css`:

```css
body {
  font-family: 'YourFont', -apple-system, BlinkMacSystemFont, ...;
}
```

### Images and Assets

1. **Profile Picture**: Replace the placeholder in the Hero section with your actual image
2. **Project Images**: Add your project screenshots to the `public` folder and update the image paths
3. **Favicon**: Replace `public/favicon.ico` with your own favicon

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Breakpoints for tablets and desktops
- Touch-friendly navigation
- Optimized layouts for all screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🎉** 