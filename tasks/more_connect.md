# Improve more notice, connect section, style

## More notice improvements
### Current issues
- The "More Episodes Coming Soon!" notice currently takes up space where future episodes should go
- Season 0 badge and season concept is unnecessary complexity
- Episode images are too zoomed in and appear low quality
- YouTube and Spotify icons are basic SVGs that could be more polished

### Tasks
1. **Restructure episodes layout**
   - Move the `.coming-soon-card` from inside `.episodes-grid` to after it
   - Position it below the actual episodes grid as a separate element
   - Update CSS to maintain visual consistency while giving episodes grid room to grow

2. **Remove season concept**
   - Remove `.episode-badge.season0` from episode cards in `index.html` (line ~227)
   - Remove season-related CSS classes and styling from `styles.css`
   - Update episode header structure to focus on episode number and title only

3. **Improve episode image presentation**
   - Reduce zoom/crop on episode thumbnail images
   - Consider adding `object-fit: cover` with better positioning
   - Ensure images maintain aspect ratio while showing more of the original content
   - Test with current `hello-world.webp` image to ensure quality improvement

4. **Enhance platform icons**
   - Replace current YouTube SVG icon with higher quality version or import PNG/SVG assets
   - Replace current Spotify SVG icon with official Spotify green branding
   - Ensure icons are consistent size and properly aligned
   - Consider using official brand colors for hover states

## Connect section improvements
### Current issues
- Section has multiple subsections that feel fragmented
- Layout could be more streamlined and visually cohesive
- Contact information is spread across multiple small sections

### Tasks
1. **Simplify section structure**
   - Consolidate the three separate `.contact-section` divs into a more unified layout
   - Reduce visual separation between "Podcast Platforms", "Get in Touch", and "Connect with Hosts"
   - Consider a single-row layout for better visual flow

2. **Improve visual hierarchy**
   - Make the main "Connect" title more prominent
   - Reduce emphasis on subsection titles (`.contact-section-title`)
   - Create better visual grouping of related links

3. **Enhance layout responsiveness**
   - Ensure the simplified layout works well on mobile devices
   - Test icon alignment and spacing across different screen sizes
   - Maintain accessibility for screen readers

## Style consistency improvements
### Current issues
- Inconsistent title casing across the site (some Title Case, some sentence case)
- Need systematic approach to typography hierarchy

### Tasks
1. **Standardize title casing**
   - Update all section titles (`.section-title`) to sentence case:
     - "About your hosts" ✓ (already correct)
     - "Episodes" → "Episodes" ✓ (already correct) 
     - "Connect" → "Connect" ✓ (already correct)
   - Update subsection titles (`.contact-section-title`) to sentence case:
     - "Podcast Platforms" → "Podcast platforms"
     - "Get in Touch" → "Get in touch"  
     - "Connect with Hosts" → "Connect with hosts"
   - Update episode titles and other headings throughout the site

2. **Review and update other title elements**
   - Check hero section titles for consistency
   - Update any remaining Title Case instances in HTML
   - Ensure consistent typography hierarchy

## Implementation order
1. Style consistency (quick wins)
2. Remove season concept (structural cleanup)
3. Restructure episodes layout (medium complexity)
4. Improve episode images (visual enhancement)
5. Enhance platform icons (visual polish)
6. Simplify connect section (layout restructuring)

## Testing checklist
- [ ] Verify episodes section layout on desktop and mobile
- [ ] Test episode image quality and aspect ratios
- [ ] Confirm all platform links still work after icon updates
- [ ] Validate connect section usability across devices
- [ ] Check title case consistency site-wide
- [ ] Ensure accessibility standards maintained