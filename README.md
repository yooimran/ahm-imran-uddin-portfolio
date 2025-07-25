# Web Developer Portfolio

A beautiful, modern, and responsive portfolio website built with React, Tailwind CSS, and Vite.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Skills Showcase**: Interactive skills section highlighting your expertise
- **Project Gallery**: Filterable project showcase with detailed descriptions
- **Contact Form**: Functional contact form for potential clients
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **Frontend**: React 19, Tailwind CSS 4, Vite 7
- **Icons**: React Icons
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite for fast development and building

## 📋 Skills Highlighted

- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- React js
- MongoDB
- Firebase
- Nodejs
- Express js
- GitHub
- Shopify
- Shopify Liquid

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional summary and statistics
3. **Skills**: Interactive skills showcase with proficiency levels
4. **Projects**: Filterable portfolio with live demos and source code links
5. **Contact**: Contact form and social media links
6. **Footer**: Additional information and navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.jsx**: Update name, description, and social links
2. **src/components/About.jsx**: Update about text and statistics
3. **src/components/Skills.jsx**: Modify skills and proficiency levels
4. **src/components/Projects.jsx**: Add your actual projects
5. **src/components/Contact.jsx**: Update contact information
6. **index.html**: Update title and meta description

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Update the gradient colors throughout the components
- Fonts: Modify the font family in `src/App.css`
- Spacing and layout: Adjust Tailwind classes in components

### Adding Projects

In `src/components/Projects.jsx`, update the `projects` array with your actual projects:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  category: "fullstack", // "frontend", "fullstack", "ecommerce"
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-project-demo.com",
  featured: true // Set to true for featured projects
}
```

## 🌐 Deployment

You can deploy this portfolio to various platforms:

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using React and Tailwind CSS+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
