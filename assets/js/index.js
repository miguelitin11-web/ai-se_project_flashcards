import { renderCarouselView, renderDeckEl } from "./carousel.js";
import { renderDeckView } from "./deck-view.js";
import { getDecks } from "./api.js";
import { showError } from "./new-deck-view.js";
import { fetchedDecks } from "./decks.js";
import { getDeckByID } from "./decks.js";

let currentDeck = null;

const practiceButtonGlobal = document.querySelector(".deck-view__practice-btn");
if (practiceButtonGlobal) {
  practiceButtonGlobal.addEventListener("click", () => {
    if (currentDeck) {
      window.location.hash = `#carousel/${currentDeck._id}`;
    }
  });
}

/**
 * Retrieves a deck object by its ID from the fetched deck cache.
 *
 * @param {string} deckId - The unique identifier of the deck to retrieve.
 * @returns {object|undefined} The matching deck object or undefined.
 */

const homeSection = document.querySelector("#home");
const notFoundSection = document.querySelector("#not-found");
const mainSection = document.querySelector(".page__main-content");
const carouselSection = document.querySelector("#carousel");
const deckViewSection = document.querySelector("#deck-view");
const pageElement = document.querySelector(".page");
const deckFeatureSection = document.querySelector("#deck-feature");
const newDeckViewSection = document.querySelector("#new-deck-view");
const aboutSection = document.querySelector("#about-section");
const deckList = document.querySelector(".gallery__list");

/**
 * Shows the selected section while hiding all other app views.
 *
 * @param {HTMLElement|null} currentSection - The section to display.
 * @param {string} [displayValue="block"] - The CSS display mode to apply.
 * @returns {void}
 */
function showView(currentSection, displayValue = "block") {
  const allSections = [
    homeSection,
    notFoundSection,
    carouselSection,
    deckViewSection,
    deckFeatureSection,
    newDeckViewSection,
    aboutSection,
  ];

  allSections.forEach((section) => {
    if (section) {
      section.style.display = "none";
    }
  });

  if (currentSection) {
    currentSection.style.display = displayValue;
  }
}

/**
 * Renders the home/gallery view and restores the normal layout.
 *
 * @returns {void}
 */
function renderHomeView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  pageElement.classList.remove("page_no-mobile-bar");
  showView(homeSection, "flex");
}

/**
 * Renders the about view.
 *
 * @returns {void}
 */
function renderAboutView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  pageElement.classList.remove("page_no-mobile-bar");
  showView(aboutSection, "block");
}

const newDeckBtn = document.querySelector("#home .gallery__new-card-btn");
if (newDeckBtn) {
  newDeckBtn.addEventListener("click", () => {
    window.location.hash = "#new-deck-view";
  });
}

/**
 * Renders the 404 page when no matching route is found.
 *
 * @returns {void}
 */
function renderNotFoundView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  pageElement.classList.add("page_no-mobile-bar");
  showView(notFoundSection, "flex");
}

/**
 * Routes the app to the correct section based on the current hash.
 *
 * @returns {void}
 */
function router() {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash === "home" || hash === "") {
    renderHomeView();
    deckList.innerHTML = "";
    fetchedDecks.forEach(renderDeckEl);
    return;
  }

  if (hash === "about") {
    renderAboutView();
    return;
  }

  if (hash === "new-deck-view") {
    showView(newDeckViewSection);
    return;
  }

  if (hash.startsWith("deck/")) {
    const parts = hash.split("/");
    const deckId = parts[1];
    console.log("deckId:", deckId);
    const deck = getDeckByID(deckId);

    if (deck) {
      mainSection.classList.remove("page__main-content_location_carousel");
      pageElement.classList.remove("page_no-mobile-bar");
      currentDeck = deck;
      renderDeckView(deck);
      showView(deckViewSection, "block");
      return;
    }
  }

  // Handle carousel routes like: #carousel/<deck-id>
  if (hash.startsWith("carousel/")) {
    const parts = hash.split("/");
    const deckId = parts[1];
    const deck = getDeckByID(deckId);

    if (deck) {
      mainSection.classList.add("page__main-content_location_carousel");
      pageElement.classList.add("page_no-mobile-bar");
      renderCarouselView(deck);
      showView(carouselSection, "flex");
      return;
    }
  }
  renderNotFoundView();
}
document.addEventListener("DOMContentLoaded", () => {
  getDecks()
    .then((decks) => {
      fetchedDecks.push(...decks);
    })

    .catch(() => {
      showError("Error fetching decks");
    })
    .finally(() => {
      router();
    });
});

window.addEventListener("hashchange", router);

export { getDeckByID, deckList };
