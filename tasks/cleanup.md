# Portfolio Website Button Styling Cleanup

## Task Overview
Fix button styling issues in the portfolio website to improve visual consistency and user experience.

## Specific Issues to Address

### 1. Hero Section CTA Button Consistency
**Problem**: The three call-to-action buttons in the hero section ("View Projects", "Let's Connect", "Download Resume") are not consistently sized and may not align properly in a single row.

**Location**: 
- File: `index.html` (lines 59-81)
- CSS Class: `.hero-cta` and `.btn-primary`

**Requirements**:
- Ensure all three buttons have equal width
- Maintain single-row layout on desktop
- Preserve responsive behavior on mobile devices
- Keep existing styling (colors, hover effects, icons)

### 2. Navigation Link Focus/Active State Styling
**Problem**: Navigation links in the top bar show an unwanted blue rectangle (browser default focus outline) when clicked or focused.

**Location**:
- File: `styles.css` (lines 105-131)
- CSS Classes: `.nav-link` and related pseudo-classes

**Requirements**:
- Remove default browser focus outline
- Implement custom focus styling for accessibility compliance
- Ensure focus states are visible for keyboard navigation
- Maintain existing hover effects and active state underline
- Follow WCAG accessibility guidelines for focus indicators

## Technical Specifications

### Button Sizing Solution
- Use CSS flexbox properties to ensure equal button widths
- Consider using `flex: 1` or fixed `min-width` values
- Maintain existing padding and spacing

### Focus State Solution
- Use `outline: none` to remove default browser outline
- Implement custom focus styles using `box-shadow` or `border`
- Ensure focus indicators have sufficient contrast ratio (3:1 minimum)
- Test with keyboard navigation (Tab key)

## Testing Requirements
- Verify button alignment across different screen sizes
- Test keyboard navigation functionality
- Ensure accessibility compliance
- Check hover and active states remain functional

## Files to Modify
1. `styles.css` - Primary styling changes
2. Potentially `index.html` - If structural changes needed for button layout

## Success Criteria
- [ ] All hero CTA buttons are equal width and properly aligned
- [ ] Navigation links have no blue focus rectangles
- [ ] Custom focus states are visible and accessible
- [ ] Responsive design is maintained
- [ ] All existing functionality preserved