// new-deck-view.js

const HEX_DIGITS = /^[0-9a-fA-F]{6}$/;

import decks from "./decks.js";

/**
 * Converts a string to a URL-safe slug: lowercase with any run of
 * non-alphanumeric characters replaced by a single hyphen, and no leading or
 * trailing hyphens.
 *
 * @param {string} str
 * @returns {string}
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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

// Modal elements
const errorModal = document.querySelector("#error-modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalErrorEl = document.querySelector(".modal__error");

// Task 1: Enable the submit button by changing its disabled property
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

  const uniqueId = `${slugify(name)}-${Date.now()}`;
  const newDeck = {
    id: uniqueId,
    color: selectedColor,
    name: name,
    cards: parsed.cards,
  };

  decks.push(newDeck);
  window.location.hash = "deck/" + uniqueId;
});
