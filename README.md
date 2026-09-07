# Flashcards App

This flashcard application helps learners organize study decks, review them in a carousel, and keep data synced with a remote API.

## Features

- **Create and manage decks** with color selection and JSON import validation
- **Fetch and cache deck data** from the remote TripleTen flashcards API
- **Delete decks** and remove them from both the UI and the database
- **Review cards in a carousel** with flip, next, and previous controls
- **Display modal error messages** when network or validation issues occur
- **Responsive layout** for desktop and mobile screens
- **About view** with a JSON example and project summary

## Technologies

- HTML, CSS, and JavaScript
- Remote API integration using `fetch()` and REST routes
- BEM naming conventions for maintainable CSS
- JSDoc documentation for named functions

## Project Structure

- `index.html` - application layout and sections
- `assets/css/` - styles organized by component
- `assets/js/` - app logic for routing, API calls, rendering, and validation
- `assets/images/` - icons and visual assets

## API and Data Behavior

The app uses the remote flashcards database to:

- fetch all decks on startup
- create new decks through the `POST /v1/decks` route
- delete decks through the `DELETE /v1/decks/:id` route
- show user-facing messages when requests fail

## Documentation

The project includes JSDoc comments on named functions to describe parameters, return values, and purpose.

## Deployed Site

Check out [my flashcard app](https://miguelitin11-web.github.io/ai-se_project_flashcards/)

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1yQpw10ivCQrdXMjQ7OF_xZ-JVcmXa-P9/view?usp=drive_link).

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1zfG3BgwddtBbG_uFT2wJaK1ZSjD77Pgs/view?usp=drive_link), where I describe my
project and some challenges I faced while building it.

## Recent Updates

- Added API-backed deck fetching and creation
- Switched deck storage to the fetched remote deck cache
- Added error-modal handling for failed requests
- Added the About page and JSDoc documentation
- Cleaned up the old local deck dataset and aligned the app with server responses
