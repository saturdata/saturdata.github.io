# Saturdata Podcast Website

Welcome to the official website for Saturdata Podcast! This is a modern, responsive website for the podcast by and for the data community, hosted by Shifra Williams and Sam LaFell.

## About Saturdata

Saturdata humanizes the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend as they share the journey of building data careers - the wins, the struggles, and everything in between.

## How to Run Locally

To run this website locally for development:

1. **Clone the repository and navigate to the project folder**
   ```bash
   git clone https://github.com/saturdata/saturdata.github.io.git
   cd saturdata.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The website will automatically open in your browser at `http://localhost:3000` with hot reload enabled - any changes you make will automatically refresh the page!

## Features

### 🎙️ Podcast Website
- Episode listings and links
- Host information and bios
- Guest appearance showcase
- Community connection links
- Modern, podcast-focused design

### 🎨 Design & UX
- Modern, clean aesthetic with strategic use of color and white space
- Responsive design that works seamlessly across all devices
- Dark/light mode toggle for enhanced user experience
- Smooth scrolling navigation with active section highlighting
- Professional animations and micro-interactions

### 📱 Responsive & Accessible
- Mobile-first design approach
- Touch-friendly interactions for mobile users
- Semantic HTML structure for screen readers
- Keyboard navigation support
- High contrast ratios meeting WCAG guidelines

### 🔧 Component System
- Standardized components for About, Episodes, and Appearances sections
- Data-driven content management through JSON configuration
- Easy content updates without HTML editing
- Consistent structure and styling across all sections
- Automatic HTML generation from structured data

## Content Management

This website uses a component-based system for easy content management. Instead of editing HTML directly, you can update content by modifying data files.

### File Structure

- `content-data.js` - Contains all content data (episodes, appearances, host info)
- `components.js` - Component generation functions
- `script.js` - Initializes components on page load
- `index.html` - Main HTML structure with component placeholders

### Adding New Episodes

1. Open `content-data.js`
2. Find the `episodes.items` array
3. Add a new episode object:

```javascript
{
    title: 'Your Episode Title',
    type: 'episode',
    image: 'assets/images/episodes/your-image.png',
    description: 'Your episode description here...',
    youtube_link: 'https://youtube.com/your-video',
    spotify_link: 'https://spotify.com/your-episode'
}
```

### Adding Guest Appearances

Follow the same pattern in the `appearances.items` array:

```javascript
{
    title: 'Appearance Title',
    type: 'appearance',
    image: 'assets/images/appearances/your-image.png',
    description: 'Description of the appearance...',
    links: [
        {
            platform: 'youtube',
            url: 'https://youtube.com/appearance-video',
            text: 'YouTube'
        }
    ]
}
```

### Updating Host Information

Modify the `about.items` array to update host profiles:

```javascript
{
    name: 'Host Name',
    pronouns: 'they/them',
    title: 'Host Title',
    image: 'assets/images/about/host-image.jpg',
    description: 'Host description with \\n\\n for paragraph breaks...'
}
```

### Benefits

- ✅ **Easy Updates**: No HTML editing required
- ✅ **Consistency**: All items follow the same structure
- ✅ **Error Prevention**: Structured data reduces syntax errors
- ✅ **Maintainability**: Centralized content management
- ✅ **Scalability**: Simple to add new sections

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Content Management**: Component-based system with JSON data
- **Styling**: Modern CSS with Custom Properties, Grid, Flexbox
- **Development**: Live Server for hot reload
- **Icons**: CSS-based emoji icons for universal compatibility
- **Animations**: CSS transitions and keyframes, Intersection Observer API

## License

MIT License - feel free to use and modify for your own projects.

---

Built with ❤️ for the data community
