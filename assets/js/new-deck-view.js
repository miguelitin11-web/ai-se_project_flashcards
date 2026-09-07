const HEX_DIGITS = /^[0-9a-fA-F]{6}$/;

import { addDeck } from "./api.js";
import { fetchedDecks } from "./decks.js";

/**
 * Returns a consistent lowercase hex color string with a leading "#".
 * Accepts values with or without a leading "#". Returns "#64d583" as a
 * fallback if the value is missing or not a valid 6-digit hex.
 *
 * @param {string|undefined} color
 * @returns {string}
 */
function normalizeColor(color) {
  if (!color) return "#64d583";
  const hex = color.startsWith("#") ? color.slice(1) : color;
  if (!HEX_DIGITS.test(hex)) return "#64d583";
  return "#" + hex.toLowerCase();
}

// --- TASK 1: Grab DOM References ---
const form = document.querySelector("#new-deck-form");
const submitBtn = document.querySelector(".create-the-deck-btn");
const textarea = document.querySelector("#textarea-json");

if (submitBtn) {
  submitBtn.disabled = false;
}

// Modal elements
const errorModal = document.querySelector("#error-modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalErrorEl = document.querySelector(".modal__error");

/**
 * Enables the create-deck button so the form can be submitted.
 *
 * @returns {void}
 */
export function disableSubmitBtn() {
  if (submitBtn) submitBtn.disabled = false;
}

// Close button: hide modal
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    if (errorModal) errorModal.classList.remove("modal_visible");
    if (modalErrorEl) modalErrorEl.textContent = "";
  });
}

/**
 * Displays a validation or request error in the modal dialog.
 *
 * @param {string} message - The error text to show the user.
 * @returns {void}
 */
function showError(message) {
  if (modalErrorEl) modalErrorEl.textContent = message;
  if (errorModal) errorModal.classList.add("modal_visible");
}

// --- TASK 2: Implementing Form Submission ---
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const jsonString = formValues.cards || (textarea && textarea.value);

  function parseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  function validateName(name) {
    if (typeof name != "string" || name.length < 2 || name.length > 80) {
      return null;
    }
    return name;
  }

  const parsed = parseJSON(jsonString);
  if (!parsed) {
    showError("Invalid JSON. Please paste valid JSON for the deck.");
    return;
  }

  const name = validateName(parsed.name);
  if (!name) {
    showError("Deck name must be a string between 2 and 80 characters.");
    return;
  }

  if (!Array.isArray(parsed.cards)) {
    showError('The "cards" field must be an array.');
    return;
  }

  const selectedColor = normalizeColor(formValues.color);
  if (typeof parsed.color === "string") {
    if (parsed.color.toLowerCase() !== selectedColor.toLowerCase()) {
      showError(
        "The color in the JSON does not match the selected color. Please ensure they match.",
      );
      return;
    }
  }

  addDeck({
    name,
    color: selectedColor,
    cards: parsed.cards,
  })
    .then((newDeck) => {
      fetchedDecks.push(newDeck);
      window.location.hash = "deck/" + newDeck._id;
    })
    .catch(showError);
});

export { showError };
