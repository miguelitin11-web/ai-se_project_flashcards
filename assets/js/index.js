import { renderCarouselView, renderDeckEl } from "./carousel.js";
import { renderDeckView } from "./deck-view.js";
import decks from "./decks.js";

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

function renderHomeView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  homeSection.style.display = "flex";
  notFoundSection.style.display = "none";
  carouselSection.style.display = "none";
  deckViewSection.style.display = "none";
}

function renderNotFoundView() {
  mainSection.classList.remove("page__main-content_location_carousel");
  homeSection.style.display = "none";
  notFoundSection.style.display = "flex";
  carouselSection.style.display = "none";
  deckViewSection.style.display = "none";
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
      renderDeckView(deck);
      deckViewSection.style.display = "flex";
      homeSection.style.display = "none";
      notFoundSection.style.display = "none";
      carouselSection.style.display = "none";
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
      renderCarouselView(deck);
      carouselSection.style.display = "flex";
      homeSection.style.display = "none";
      notFoundSection.style.display = "none";
      deckViewSection.style.display = "none";
      return;
    }
  }
  renderNotFoundView();
}
decks.forEach(renderDeckEl);
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

export { decks, getDeckByID };
