# EliteHomes Development Guide

## Project Structure

```
shosa/
├── index.html                 # Main HTML file
├── IMPROVEMENTS.md            # Detailed improvement documentation
├── css/
│   ├── all.min.css           # FontAwesome icons
│   ├── bootstrap.min.css     # Bootstrap framework
│   └── style.css             # Custom styles
├── images/                   # Image assets (PNG, JPG, JFIF)
├── js/
│   ├── bootstrap.bundle.min.js  # Bootstrap JavaScript
│   └── main.js              # Custom JavaScript (NEW)
└── webfonts/                # Font files

```

## Quick Start

1. Open `index.html` in a web browser to view the website
2. All improvements are self-contained and require no additional setup
3. JavaScript file is automatically loaded from the HTML file

## Key Files to Know

### HTML (`index.html`)
- Contains semantic HTML structure
- All navigation links use anchor (`#`) references
- Forms include validation attributes
- Footer includes contact information and links

### Styling (`css/style.css`)
- Uses CSS variables for consistent colors and sizing
- Includes responsive design with Bootstrap grid
- Custom component styles for cards, buttons, and sections
- Footer and accessibility styles included

### JavaScript (`js/main.js`)
- Form validation for search and contact forms
- Smooth scrolling functionality
- Scroll-to-top button behavior
- Image lazy loading
- Event listeners for interactive elements

## CSS Variables

To maintain consistency, use these CSS variables defined in `:root`:

```css
--bg-color: #7c3aed          /* Primary purple */
--bg-color-dark: #7b2ff7     /* Darker purple for hover */
--color-icon: #ede9fe        /* Light purple for icons */
--text-dark: #555            /* Dark text */
--text-gray: #777            /* Gray text */
--text-light: #666           /* Light text */
--border-color: #e5e5e5      /* Borders */
--shadow-light: 0 10px 30px rgba(0, 0, 0, 0.1)
--shadow-medium: 0 15px 40px rgba(0, 0, 0, 0.2)
--radius: 15px               /* Border radius */
```

## Component Classes

### Buttons
- `.buto` - Primary action button
- `.buto-services` - Service section button
- `.buttonn` - Secondary button (property cards)
- `.new-btn` - Form submit button

### Cards
- `.property-card` - Property listing card
- `.card-client` - Testimonial card
- `.card-contact` - Contact info card

### Forms
- `.new-input` - Form input styling
- `.new-label` - Form label styling
- `.form-check` - Checkbox styling

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: ≥ 768px (md)
- Desktop: ≥ 992px (lg)

Bootstrap's grid system is used throughout. Refer to `col-md-*` and `d-md-block` classes.

## Form Validation

### Search Form
Required fields:
- Location
- Property Type (must select specific type, not "All Types")

### Contact Form
Required fields:
- Name
- Email (must be valid email format)
- Message

Validation feedback is shown via Bootstrap alerts.

## Accessibility Features

- Skip-to-content link (press Tab to see it)
- Keyboard navigation support
- ARIA labels for form inputs
- Proper heading hierarchy
- Color contrast compliance
- Focus indicators on interactive elements

## JavaScript Events

### Form Submission
- Search form validates and shows alert
- Contact form validates email and required fields

### Scroll to Top
- Button appears when scrolling > 300px
- Smooth scroll animation on click
- Keyboard accessible

### Favorites
- Click heart icon to toggle favorite status
- Visual feedback provided
- Uses local state (not persisted)

## Common Tasks

### Adding a New Section
1. Add section HTML with proper id attribute
2. Update CSS for styling
3. Add navigation link (update navbar)
4. Add to footer links if applicable

### Modifying Colors
- Update CSS variables in `:root`
- All dependent elements will update automatically
- Check hover states and transitions

### Adding Form Fields
1. Add form-group div with label and input
2. Use new-label and new-input classes
3. Add validation logic to main.js
4. Update form's aria-label if needed

### Creating New Cards
- Use `.property-card` structure as template
- Maintain consistent spacing with other cards
- Ensure proper responsive classes (col-md-*)

## Browser DevTools Tips

1. **Check Accessibility**: Use Lighthouse audit in Chrome
2. **Test Responsive**: Use device toolbar (F12 > Toggle Device Toolbar)
3. **Performance**: Monitor JavaScript execution in Performance tab
4. **Network**: Check image loading and resource requests

## Deployment Checklist

- [ ] All images load correctly
- [ ] Links navigate to correct sections
- [ ] Forms validate properly
- [ ] Scroll-to-top button works
- [ ] Responsive design tested on mobile
- [ ] Accessibility features tested with screen reader
- [ ] All external resources load (fonts, Bootstrap)

## Performance Tips

1. Images use `object-fit: cover` for proper sizing
2. CSS variables reduce overall CSS size
3. Bootstrap classes prevent duplicate CSS
4. JavaScript is minimal and optimized
5. Lazy loading for images (implemented in main.js)

## Common Issues & Solutions

**Images not loading:**
- Check paths are relative (`./images/`)
- Verify file extensions match

**Forms not validating:**
- Check main.js is loaded (see browser console)
- Verify form aria-label matches JavaScript selector
- Check browser console for errors

**Scroll-to-top button not appearing:**
- Scroll down more than 300px
- Check CSS display property in DevTools
- Verify main.js is loaded

**Navigation links not smooth scrolling:**
- Check target element has matching id
- Verify Bootstrap JavaScript is loaded
- Check console for JavaScript errors

## Support & Documentation

- See IMPROVEMENTS.md for detailed changelog
- Bootstrap docs: https://getbootstrap.com
- FontAwesome icons: https://fontawesome.com
- Web accessibility: https://www.w3.org/WAI

## Version History

- **v2.0** (Current)
  - Fixed broken image paths
  - Added comprehensive accessibility features
  - Added form validation
  - Created professional footer
  - Refactored CSS with variables

- **v1.0**
  - Initial project setup
  - Bootstrap integration
  - Basic responsive design

