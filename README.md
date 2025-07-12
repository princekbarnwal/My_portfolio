# Prince Kumar Barnwal - Portfolio

A modern, responsive portfolio website built with React.js featuring elegant animations, dark/light mode, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with elegant animations
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Professional Sections**: About, Skills, Projects, and Contact
- **Competitive Programming**: Links to CodeChef and LeetCode profiles
- **Contact Form**: Ready to connect with Formspree, Netlify Forms, or EmailJS

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Animations**: CSS animations and transitions
- **Deployment**: Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
My_portfolio/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── Preloader.js
│   │   │   ├── Projects.js
│   │   │   └── Skills.js
│   │   │   └── *.css (component styles)
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/princekbarnwal/My_portfolio.git
   cd My_portfolio
   ```

2. **Navigate to client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📧 Contact Form Setup

The contact form is ready to be connected to various services:

### Option 1: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Add the form action to the Contact component:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `data-netlify="true"` to the form
3. Netlify will automatically handle form submissions

### Option 3: EmailJS
1. Install EmailJS: `npm install emailjs-com`
2. Set up EmailJS service
3. Import and configure in Contact component

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### GitHub Pages
1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run: `npm run deploy`

## 🎨 Customization

### Colors
Update CSS variables in `App.css`:
```css
:root {
  --primary-color: #FFD700;
  --secondary-color: #FFB300;
  --text-primary: #333;
  --text-secondary: #666;
}
```

### Content
- Update personal information in component files
- Modify project data in Projects component
- Adjust skills in Skills component
- Update social links in Footer component

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@princekbarnwal](https://github.com/princekbarnwal)
- **LinkedIn**: [Prince Kumar Barnwal](https://www.linkedin.com/in/princekbarnwal/)
- **LeetCode**: [princekb](https://leetcode.com/u/princekb/)
- **CodeChef**: [princekb](https://www.codechef.com/users/princekb)

---

Made with ❤️ by Prince Kumar Barnwal 