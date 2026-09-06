const baseUrl = "https://se-flashcards-api.en.tripleten-services.com/v1";
const headers = {
  "Content-Type": "application/json",
  Authorization: "01a07453-1212-7212-8e40-105872497cf8",
};

function processResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getDecks() {
  return fetch(`${baseUrl}/decks`, { headers }).then(processResponse);

  function deleteDeck(id) {
    return fetch(`${BASE_URL}/decks/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((response) => {
      if (!response.ok) {
        throw new Error("");
      }
      return response.json();
    });
  }
}

export { getDecks };
export { deleteDeck };
