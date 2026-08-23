# Flashcards App

My first project in TripleTen's AI-Assisted Software
Engineering program. It includes decks of flashcards,
each of which can be viewed in a carousel.
This is a flashcard app built for learning purposes, where users create and review flashcards.

## Features

- **Create and Manage Decks**: Create new flashcard decks and organize them by color
- **Review Flashcards**: View all flashcards in a single deck with a beautiful gallery view
- **Carousel Mode**: Practice flashcards one at a time with a carousel interface
- **Flip Cards**: Easily flip between question and answer sides
- **Delete Flashcards**: Remove individual flashcards from your decks
- **Responsive Design**: Works seamlessly on desktop and mobile devices with fixed buttons on small screens
- **Practice Mode**: Dedicated practice view for focused learning

## Technologies

1. Languages: HTML, CSS, JavaScript
2. Tools/Platforms: TripleTen platform, VS Code, Git, GitHub
3. CSS Features: CSS Grid, Flexbox, Media Queries for responsive design
4. BEM Naming Convention: Organized CSS structure following BEM methodology

## Project Structure

- `index.html` - Main HTML file with all page sections
- `assets/css/` - Modular CSS files organized by component
  - `index.css` - Main stylesheet with imports
  - `page.css` - Page layout and responsive styles
  - `header.css` & `nav.css` - Header and navigation styles
  - `gallery.css` - Deck listing gallery styles
  - `card.css` - Card component styles
  - `deck-view.css` - Deck view page styles
  - `carousel.css` - Carousel view styles
  - `mobile-bar.css` - Mobile-specific fixed button and footer positioning
  - `footer.css` - Footer styles
  - `not-found.css` - 404 page styles
- `assets/js/` - JavaScript modules
  - `index.js` - Main router and initialization
  - `carousel.js` - Carousel view logic
  - `deck-view.js` - Deck view rendering
  - `decks.js` - Data storage
  - `colors.js` - Color utility functions
- `assets/images/` - SVG icons and images

## Deployed Site

Check out [my flashcard app](https://miguelitin11-web.github.io/ai-se_project_flashcards/)

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1yQpw10ivCQrdXMjQ7OF_xZ-JVcmXa-P9/view?usp=drive_link), where I describe my project and some challenges I faced while building it.

## Recent Updates (Part 5 - Responsive Design)

- Implemented responsive design for all views (home, open deck, carousel)
- Added fixed positioning for buttons on mobile devices with smooth gradient transitions
- Mobile-optimized footer positioning with proper z-index layering
- Added box shadows to all card elements for visual depth
- Improved touch target sizes for mobile usability
- Responsive typography and spacing adjustments

## Future Enhancements

- Confirmation modal for accidental deletions
- Edit existing cards and decks
- Export/import deck functionality
- Dark mode theme
- Search and filter decks
