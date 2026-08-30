// new-deck-view.js

const HEX_DIGITS = /^[0-9a-fA-F]{6}$/;

// NOTE: Import your decks array here.
// Adjust the relative path ('./decks.js') to match your actual folder structure.
import { decks } from "./decks.js";

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
const form = document.querySelector("form");
const submitBtn = document.querySelector('button[type="submit"]');
const textarea = document.querySelector("textarea");

// Task 1: Enable the submit button by changing its disabled property
export function disableSubmitBtn() {
  submitBtn.disabled = false;
}

// --- TASK 2: Implementing Form Submission ---
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 1. Grab form submission data using FormData and Object.fromEntries
  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData.entries());

  try {
    // 2. Clean and process the data
    // Parse the textarea value into JSON data
    const jsonData = JSON.parse(formValues.cards || textarea.value);

    // Normalize the color field (assumes input name="color")
    const cleanColor = normalizeColor(formValues.color);

    // Create a unique ID using slugify and Date.now() (assumes input name="name")
    const deckName = formValues.name;
    const uniqueId = `${slugify(deckName)}-${Date.now()}`;

    // 3. Build the final deck object matching the application state shape
    const newDeck = {
      id: uniqueId,
      color: cleanColor,
      name: deckName,
      cards: jsonData.cards, // Accesses the cards array inside your JSON data structure
    };

    // Push the object onto the global decks array
    decks.push(newDeck);

    // 4. Navigate to the newly created deck view via hash change
    window.location.hash = "deck/" + uniqueId;
  } catch (error) {
    console.error("SyntaxError or TypeError while parsing form data:", error);
    alert(
      "Please ensure the pasted text inside the textarea is valid JSON data.",
    );
  }
});
