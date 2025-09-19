// Standardized Components for Saturdata Website
// This file contains reusable component functions for about, episodes, and appearances sections

// Data structures and component generators
const SaturdataComponents = {
    
    // Host Profile Component
    createHostProfile: function(hostData) {
        const socialLinksHtml = hostData.social_links ? `
            <div class="host-social-links">
                ${hostData.social_links.map(link => `
                    <a href="${link.url}" class="host-social-link" target="_blank" rel="noopener noreferrer" aria-label="${hostData.name}'s ${link.label}">
                        ${link.platform === 'linkedin' ? `
                            <svg class="host-social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2"/>
                                <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2"/>
                                <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        ` : `
                            <svg class="host-social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                                <path d="M2 12h20" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        `}
                    </a>
                `).join('')}
            </div>
        ` : '';
        
        return `
            <div class="host-profile">
                <div class="host-image">
                    <img src="${hostData.image}" alt="${hostData.name}" />
                </div>
                <div class="host-content">
                    <h3 class="host-name">${hostData.name} <span class="host-pronouns">${hostData.pronouns}</span></h3>
                    <h4 class="host-title">${hostData.title}</h4>
                    ${socialLinksHtml}
                    <p class="host-description">${hostData.description}</p>
                </div>
            </div>
        `;
    },

    // Episode/Content Card Component (works for both episodes and appearances)
    createContentCard: function(contentData) {
        const playIcon = contentData.type === 'episode' ? 
            `<path d="m6 19 7-7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="currentColor"/>` :
            `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2" fill="none"/>`;
        
        const imageClass = contentData.type === 'episode' ? 'guest-appearance-image' : 'guest-appearance-image';
        const contentClass = contentData.type === 'episode' ? 'guest-appearance-content' : 'guest-appearance-content';
        const headerClass = contentData.type === 'episode' ? 'guest-appearance-header' : 'guest-appearance-header';
        const titleClass = contentData.type === 'episode' ? 'guest-appearance-title' : 'guest-appearance-title';
        const descriptionClass = contentData.type === 'episode' ? 'guest-appearance-description' : 'guest-appearance-description';
        const linksClass = contentData.type === 'episode' ? 'guest-appearance-links' : 'guest-appearance-links';
        const linkClass = contentData.type === 'episode' ? 'guest-appearance-link' : 'guest-appearance-link';

        let linksHtml = '';
        
        // Handle episodes with youtube_link and spotify_link
        if (contentData.type === 'episode' && (contentData.youtube_link || contentData.spotify_link)) {
            const links = [];
            if (contentData.youtube_link) {
                links.push({
                    platform: 'youtube',
                    url: contentData.youtube_link,
                    text: 'YouTube'
                });
            }
            if (contentData.spotify_link) {
                links.push({
                    platform: 'spotify',
                    url: contentData.spotify_link,
                    text: 'Spotify'
                });
            }
            linksHtml = links.map(link => `
                <a href="${link.url}" class="${linkClass} ${link.platform}" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/logos/${link.platform}.png" alt="${link.platform}" width="16" height="${link.platform === 'youtube' ? '11' : '16'}" />
                    ${link.text}
                </a>
            `).join('');
        }
        // Handle appearances with links array (backward compatibility)
        else if (contentData.links && contentData.links.length > 0) {
            linksHtml = contentData.links.map(link => `
                <a href="${link.url}" class="${linkClass} ${link.platform}" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/logos/${link.platform}.png" alt="${link.platform}" width="16" height="${link.platform === 'youtube' ? '11' : '16'}" />
                    ${link.text}
                </a>
            `).join('');
        }

        return `
            <div class="episode-card">
                <div class="${imageClass}">
                    <img src="${contentData.image}" alt="${contentData.title}" />
                    <div class="guest-appearance-overlay">
                        <div class="play-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                ${playIcon}
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="${contentClass}">
                    <div class="${headerClass}">
                        <h3 class="${titleClass}">${contentData.title}</h3>
                    </div>
                    <p class="${descriptionClass}">
                        ${contentData.description}
                    </p>
                    <div class="${linksClass}">
                        ${linksHtml}
                    </div>
                </div>
            </div>
        `;
    },

    // Section Generator
    createSection: function(sectionData) {
        let contentHtml = '';
        
        if (sectionData.type === 'about') {
            contentHtml = `
                <div class="hosts-grid">
                    ${sectionData.items.map(host => this.createHostProfile(host)).join('')}
                </div>
            `;
        } else if (sectionData.type === 'episodes' || sectionData.type === 'appearances') {
            const gridClass = sectionData.type === 'episodes' ? 'episodes-grid' : 'guest-appearances-grid';
            contentHtml = `
                <div class="${gridClass}">
                    ${sectionData.items.map((item, index) => 
                        this.createContentCard(item)
                    ).join('')}
                </div>
            `;
        }

        return `
            <section id="${sectionData.id}" class="${sectionData.type}">
                <div class="container">
                    <h2 class="section-title">${sectionData.title}</h2>
                    ${contentHtml}
                </div>
            </section>
        `;
    },

    // Initialize sections with data
    renderSections: function(sectionsData) {
        sectionsData.forEach(sectionData => {
            const targetElement = document.getElementById(sectionData.id);
            if (targetElement) {
                const containerElement = targetElement.querySelector('.container');
                if (containerElement) {
                    let contentHtml = '';
                    
                    if (sectionData.type === 'about') {
                        contentHtml = `
                            <h2 class="section-title">${sectionData.title}</h2>
                            <div class="hosts-grid">
                                ${sectionData.items.map(host => this.createHostProfile(host)).join('')}
                            </div>
                        `;
                    } else if (sectionData.type === 'episodes' || sectionData.type === 'appearances') {
                        const gridClass = sectionData.type === 'episodes' ? 'episodes-grid' : 'guest-appearances-grid';
                        contentHtml = `
                            <h2 class="section-title">${sectionData.title}</h2>
                            <div class="${gridClass}">
                                ${sectionData.items.map((item, index) => 
                                    this.createContentCard(item)
                                ).join('')}
                            </div>
                        `;
                    }
                    
                    containerElement.innerHTML = contentHtml;
                }
            }
        });
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SaturdataComponents;
}