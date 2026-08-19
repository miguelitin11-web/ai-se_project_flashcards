import { getColorName } from "./colors.js";

const deckViewTitle = document.querySelector(".deck-view__title");
const deckViewList = document.querySelector(".deck-view__list");
const practiceButton = document.querySelector(".deck-view__practice-btn");
const newCardButton = document.querySelector(".deck-view__new-card-btn");

export function renderDeckView(deck) {
  if (!deckViewTitle || !deckViewList || !practiceButton || !newCardButton) {
    return;
  }

  deckViewTitle.textContent = deck.name;
  deckViewList.innerHTML = "";

  const colorName = getColorName(deck.color);
  const listItems = deck.cards.map((card) => {
    const item = document.createElement("li");
    item.className = "deck-view__card";
    item.style.backgroundColor = deck.color;

    const text = document.createElement("p");
    text.className = "deck-view__card-text";
    text.textContent = card.question;

    const actions = document.createElement("div");
    actions.className = "deck-view__card-actions";

      const flipButton = document.createElement("button");
      flipButton.type = "button";
      flipButton.className = "card__btn card__btn_type_flip";
      flipButton.setAttribute("aria-label", `Flip card ${card.id}`);

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "card__btn card__btn_type_delete";
      deleteButton.setAttribute("aria-label", `Delete card ${card.id}`);

    let isFlipped = false;

    function updateCard() {
      text.textContent = isFlipped ? card.answer : card.question;
      item.classList.toggle("deck-view__card_flipped", isFlipped);
      item.style.backgroundColor = isFlipped ? "#ffffff" : deck.color;
    }

    flipButton.addEventListener("click", () => {
      isFlipped = !isFlipped;
      updateCard();
    });

    deleteButton.addEventListener("click", () => {
      item.remove();
    });

    actions.append(flipButton, deleteButton);
    item.append(text, actions);

    item.classList.add(`deck_color_${colorName}`);
    return item;
  });

  deckViewList.append(...listItems);

  practiceButton.onclick = () => {
    // Practice navigation handled globally in index.js to avoid duplicate listeners
  };

  newCardButton.onclick = () => {
    return null;
  };
}
