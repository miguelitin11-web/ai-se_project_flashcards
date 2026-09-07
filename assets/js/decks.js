const fetchedDecks = [];

export { fetchedDecks };
function removeDeckByID(deckId) {
  const index = fetchedDecks.findIndex((deck) => deck._id === deckId);
  if (index !== -1) {
    fetchedDecks.splice(index, 1);
  }
}

function getDeckByID(deckId) {
  return fetchedDecks.find((deck) => deck._id === deckId);
}
export { removeDeckByID, getDeckByID };
