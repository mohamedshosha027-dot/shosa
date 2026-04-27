# EliteHomes Developer Guide

## Overview

EliteHomes is a static real estate landing page built with:

- `index.html` for page structure and content
- `css/style.css` for custom styling
- `js/main.js` for interaction and form behavior
- local image assets in `images/`
- Bootstrap and Font Awesome from local project files

The project does not require a build step.

## Project Structure

```text
shosa/
|-- index.html
|-- README.md
|-- DEVELOPER_GUIDE.md
|-- IMPROVEMENTS.md
|-- QUICK_START.txt
|-- css/
|   |-- all.min.css
|   |-- bootstrap.min.css
|   `-- style.css
|-- js/
|   |-- bootstrap.bundle.min.js
|   `-- main.js
|-- images/
`-- webfonts/
```

## Running Locally

You can open `index.html` directly in a browser.

If you prefer a local server, any static file server works. Example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Page Sections

- `#home`: hero and search form
- `#properties`: featured listings
- `#services`: tabbed service categories
- `#testimonials`: carousel section
- `#faq`: accordion-based guidance
- `#contact`: contact cards and inquiry form

## Styling Notes

The main design tokens live near the end of [css/style.css](/C:/Users/Elbrine/Desktop/shosa/css/style.css).

Key variables:

- `--bg-color`: primary brand green
- `--bg-color-dark`: darker green for gradients and hover states
- `--accent-color`: warm gold accent
- `--text-dark`, `--text-gray`, `--text-light`: text system
- `--surface`, `--surface-muted`, `--surface-tint`: card and page backgrounds
- `--shadow-light`, `--shadow-medium`: shared depth system

The latest design refresh is intentionally implemented as an override layer at the bottom of the file. That makes it easy to tune the current visual system without refactoring every older rule above it.

## JavaScript Behavior

[js/main.js](/C:/Users/Elbrine/Desktop/shosa/js/main.js) handles:

- search form validation
- contact form validation
- smooth anchor scrolling
- favorite button toggling
- lazy image reveal
- sticky navbar state on scroll
- scroll-to-top button behavior
- cleanup for a few legacy text-encoding artifacts still present in the HTML

## Editing Guidelines

When updating the page:

- keep image paths relative, such as `./images/...` in HTML and `../images/...` in CSS
- preserve section ids used by navigation and smooth scrolling
- if you rename contact form fields, update the selectors in `js/main.js`
- prefer editing the design token layer instead of scattering one-off colors
- test both desktop and mobile spacing after layout changes

## Content Updates

Common content changes:

1. Hero message: edit the intro copy in [index.html](/C:/Users/Elbrine/Desktop/shosa/index.html).
2. Property cards: update listing text and related images in the `#properties` section.
3. Services: edit the tab labels and tab panes under `#services`.
4. FAQ: update the accordion content in the `#faq` section.
5. Contact details: update the cards and footer contact block together so they stay consistent.

## Testing Checklist

- open the page on desktop width and mobile width
- submit both forms with empty and valid values
- click nav links and confirm smooth scrolling lands correctly
- toggle favorite icons on property cards
- verify the testimonial carousel still works
- confirm the scroll-to-top button appears after scrolling

## Known Constraints

- the project is static and does not submit forms to a backend
- external Google Fonts require network access in the browser
- some older CSS remains in place under the refresh layer for compatibility with existing markup
