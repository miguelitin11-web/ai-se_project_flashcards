import { renderCarouselView, renderDeckEl } from "./carousel.js";
import { renderDeckView } from "./deck-view.js";
import decks from "./decks.js";

let currentDeck = null;

const practiceButtonGlobal = document.querySelector(".deck-view__practice-btn");
if (practiceButtonGlobal) {
  practiceButtonGlobal.addEventListener("click", () => {
    if (currentDeck) {
      window.location.hash = `#carousel/${currentDeck.id}`;
    }
  });
}

/**
 * Retrieves a deck object by its ID from the decks array.
 *
 * @param {string} deckId - The unique identifier of the deck to retrieve
 * @returns {object|undefined} The deck object if found, undefined otherwise
 */
function getDeckByID(deckId) {
  return decks.find((deck) => deck.id === deckId);
}

const homeSection = document.querySelector("#home");
const notFoundSection = document.querySelector("#not-found");
const mainSection = document.querySelector(".page__main-content");
const carouselSection = document.querySelector("#carousel");
const deckViewSection = document.querySelector("#deck-view");
const pageElement = document.querySelector(".page");
const deckFeatureSection = document.querySelector("#deck-feature");

// Helper function to show a view and hide others
function showView(currentSection, displayValue = "block") {
  const allSections = [
    homeSection,
    notFoundSection,
    carouselSection,
    deckViewSection,
    deckFeatureSection,
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

function renderHomeView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  pageElement.classList.remove("page_no-mobile-bar");
  showView(homeSection, "flex");
}

function renderNotFoundView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  pageElement.classList.add("page_no-mobile-bar");
  showView(notFoundSection, "flex");
}

function router() {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash === "home" || hash === "") {
    renderHomeView();
    return;
  }

  if (hash.startsWith("deck/")) {
    const parts = hash.split("/");
    const deckId = parts[1];
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

decks.forEach(renderDeckEl);
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

export { decks, getDeckByID };
