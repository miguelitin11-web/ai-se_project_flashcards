const baseUrl = "https://se-flashcards-api.en.tripleten-services.com/v1";
const headers = {
  "Content-Type": "application/json",
  Authorization: "01a07453-1212-7212-8e40-105872497cf8",
};

/**
 * Normalizes the fetch response and rejects non-OK HTTP responses.
 *
 * @param {Response} res - The fetch response object.
 * @returns {Promise<any>} Parsed JSON or null for empty responses.
 */
function processResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}

/**
 * Fetches all decks from the remote API.
 *
 * @returns {Promise<Array<object>>} A promise that resolves to the fetched decks.
 */
function getDecks() {
  return fetch(`${baseUrl}/decks`, { headers }).then(processResponse);
}

/**
 * Deletes a deck from the remote API by ID.
 *
 * @param {string} deckId - The database ID of the deck to delete.
 * @returns {Promise<any>} The API response after deletion.
 */
function deleteDeck(deckId) {
  return fetch(`${baseUrl}/decks/${deckId}`, {
    method: "DELETE",
    headers,
  }).then(processResponse);
}

/**
 * Creates a deck in the remote database.
 *
 * @param {{name: string, color: string, cards: Array<object>}} deckData - The deck payload.
 * @returns {Promise<object>} The newly created deck returned by the API.
 */
function addDeck({ name, color, cards }) {
  return fetch(`${baseUrl}/decks`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, color, cards }),
  }).then(processResponse);
}

export { getDecks, deleteDeck, addDeck };
