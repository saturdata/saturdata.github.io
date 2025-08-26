# Fix Navbar Background Color Issue

## Problem
The navbar background color doesn't update properly when users toggle between dark and light themes. The current scroll event listener (lines 41-50 in `script.js`) sets inline styles that override the CSS theme variables, causing the navbar to maintain the wrong background color after theme switches.

## Current Implementation
The navbar scroll handler is an anonymous function that directly manipulates the navbar's background style:

```javascript
// Lines 41-50 in script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = getComputedStyle(document.documentElement)
            .getPropertyValue('--bg-color') + 'f5'; // Add opacity
    } else {
        navbar.style.background = getComputedStyle(document.documentElement)
            .getPropertyValue('--bg-color') + 'f0';
    }
});
```

## Required Changes

### 1. Create Named Function
Extract the anonymous scroll handler into a named function `updateNavbarBackground()` so it can be called from both the scroll event and theme toggle.

### 2. Update Theme Toggle
Modify the theme toggle handler (lines 87-94 in `script.js`) to call `updateNavbarBackground()` after switching themes.

### 3. Ensure Proper Color Updates
The function should read the current CSS custom property values (`--bg-color`) to ensure it uses the correct theme colors.

## Implementation Details
- Function should be defined in the `initializeNavigation()` function scope
- Call `updateNavbarBackground()` at the end of the theme toggle click handler
- Maintain the existing scroll threshold (50px) and opacity values (f5/f0)
- Preserve all existing functionality while fixing the theme switching bug

## Files to Modify
- `script.js` (lines 41-50 and 87-94)

## Expected Outcome
After implementation, the navbar background should correctly update to match the current theme immediately when users toggle between dark and light modes, while maintaining the scroll-based opacity changes.