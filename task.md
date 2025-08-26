# Transform Website to Saturdata Podcast Site

## Project Overview

Transform the current personal portfolio website (Shifra Williams) into the official website for Saturdata Podcast. This involves updating all content, navigation, styling, and functionality to reflect the podcast brand and purpose.

## Context

**Saturdata** is your favorite weekend data podcast where we teach as much as we learn, creating community one episode at a time.

Saturdata humanizes the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend as they share the journey of building data careers - the wins, the struggles, and everything in between. Perfect for students, career switchers, and early-career data people who want authentic advice from people who actually know what it's like to walk in your shoes.

## Detailed Implementation Instructions

### 1. Update HTML Meta Tags and Title
- **Change page title** from "Shifra Williams - Data Scientist..." to "Saturdata Podcast - By and for the data community"
- **Update meta description** to: "Saturdata humanizes the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend for authentic data career advice."
- **Update Open Graph tags** for social media sharing with Saturdata branding
- **Update keywords** to include: "data podcast, data careers, data science, data engineering, career advice, weekend podcast, data community"

### 2. Navigation Updates
- **Update logo** from "SW" to "Saturdata" or "SP" (Saturdata Podcast)
- **Replace navigation items**:
  - Keep: About, Connect
  - Change: "Experience" → remove, "Projects" → remove, "Speaking" → "Episodes", "Skills" → remove
  - Final nav: About | Episodes | Connect

### 3. Hero Section Transformation
- **Update hero title** to: "Saturdata Podcast"
- **Update hero subtitle/role** to: "Your Weekend Data Community"
- **Update hero description** to: "Humanizing the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend as they share the journey of building data careers - the wins, the struggles, and everything in between."
- **Update CTA buttons**:
  - Replace "Projects" button with "Listen Now" linking to latest episode
  - Replace "Resume" button with "Subscribe" linking to podcast platforms
  - Keep "Connect" button
- **Replace profile image** with Saturdata podcast artwork/logo (placeholder for now - keep existing but note needs replacement)

### 4. About Section - Host Profiles
Transform the current about section into a "Meet Your Hosts" section with two host profiles:

#### Shifra Williams Profile:
- **Title**: Co-host & Developer Relations Advocate
- **Content**: Adapt existing about content, emphasizing her role as podcast co-host and her expertise in data science education and developer relations. Mention her experience in making complex technical concepts accessible.

#### Sam LaFell Profile:
- **Title**: Co-host & Data Engineer
- **Content**: 
"🚀 Data Engineer | MLOps Enthusiast | Building Smarter Data Pipelines

Sam started his career as a Data Scientist, but quickly realized that messy data and inefficient pipelines were the real bottlenecks. Now, as a Data Engineer, he focuses on building scalable, reliable, and efficient data systems that empower organizations to make smarter decisions.

**What Sam does:**
- Architects and optimizes data pipelines (because bad data slows everything down)
- Works across Python, SQL, and cloud platforms like AWS & Azure to build resilient data solutions
- Bridges the gap between Data Science & Engineering, ensuring models don't just get built—they get deployed and deliver real value

**Tech Sam works with:**
Python, SQL, Snowflake, Databricks, and whatever else it takes to make data flow seamlessly.

**Why he does it:**
Sam believes data should be an asset, not a liability. Whether it's optimizing pipelines, improving data quality, or helping teams scale, he loves making complex data problems simple. He's also building his own business, helping organizations level up their data infrastructure—because great data systems should be the norm, not the exception."

### 5. Remove Sections
- **Experience section**: Remove entirely
- **Projects section**: Remove entirely  
- **Skills section**: Remove entirely

### 6. Episodes Section (Replace Speaking Section)
Transform the speaking section into an episodes section:

- **Section title**: "Episodes"
- **Structure**: Organize by seasons (Season 0 for now)
- **Season 0 content**:
  - Episode 1 card with:
    - **Title**: "Welcome to Saturdata" (or actual episode title)
    - **Description**: Brief episode description
    - **Links**: YouTube and Spotify buttons
    - **Thumbnail**: Placeholder for episode artwork
  - **Coming Soon notice**: "More episodes coming soon! Subscribe to stay updated."

#### Episode 1 Links:
- YouTube: https://www.youtube.com/watch?v=pBvuqiyRIG8&t=55s
- Spotify: https://open.spotify.com/episode/59Ji4HMwEV4CzxkOvACQgX?si=lSWD-wstSAm-_fVuwEYhGA

### 7. Connect Section Updates
Update the connect section with Saturdata-specific links:

- **YouTube**: https://www.youtube.com/@SaturdataPod
- **Spotify**: https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo
- **Email**: saturdatapod@gmail.com
- **Sam LinkedIn**: https://www.linkedin.com/in/samlafell/ (Note: current link seems incorrect)
- **Shifra LinkedIn**: https://www.linkedin.com/in/shifra-williams/
- **Sam Website**: https://www.samlafell.com/
- **Shifra Website**: https://ho1yshif.github.io/

### 8. Style and Branding Updates
- **Primary color**: Change from current blue (#3b82f6) to Saturdata green (#8ea58b)
- **Update CSS variables**:
  - `--primary-color: #8ea58b`
  - `--primary-hover: #7a9179` (darker shade)
- **Gradients**: Update all gradient references to use the new green color scheme
- **Keep**: Current responsive design, dark mode functionality, and overall sleek aesthetic

### 9. Footer Updates
- **Copyright**: Change to "© 2025 Saturdata Podcast. Built with passion for the data community." using a function to find the current year rather than hardcoding 2025
- **Remove acknowledgments section**: Replace with podcast-specific credits if needed

### 10. Additional Considerations
- **Images**: Use the shif and sam images as well as the logo images
- **SEO**: Ensure all changes maintain good SEO practices
- **Accessibility**: Maintain current accessibility standards
- **Performance**: Keep current performance optimizations

## Technical Implementation Notes
- Maintain current responsive design patterns
- Keep dark mode functionality intact
- Preserve current animation and interaction patterns
- Update color schemes consistently throughout
- Ensure all links are functional and point to correct destinations
- Test on mobile and desktop after implementation

## Content Tone and Voice
- Professional but approachable
- Community-focused
- Educational and encouraging
- Authentic and relatable (matching the "people who actually know what it's like to walk in your shoes" messaging)

This transformation should result in a professional podcast website that maintains the current site's technical excellence while completely rebranding it for Saturdata Podcast's community-focused mission.