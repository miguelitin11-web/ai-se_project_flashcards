import { getColorName, hexToString, removeColorClasses } from "./colors.js";

const template = document.querySelector("template");
const deckList = document.querySelector(".decks__list");

let currentDeckID = null;

function getCarouselTitleString(deck, index) {
  return `${deck.name} · ${index + 1}/${deck.cards.length}`;
}

export function createDeckEl(item) {
  const deckEl = template.content.querySelector(".deck");
  const clonedElement = deckEl.cloneNode(true);

  function getCardsCountText(deck) {
    const cardsAmount = deck.cards.length;
    return `The deck has ${cardsAmount} cards.`;
  }

  clonedElement.querySelector(".deck__title").textContent = item.name;
  clonedElement.querySelector(".deck__count").textContent =
    getCardsCountText(item);
  const deckLink = clonedElement.querySelector(".deck__link");
  deckLink.href = `#carousel/${item.id}`;

  deckLink.addEventListener("click", () => {
    currentDeckID = item.id;
    console.log("clicked deck id:", item.id);
    console.log("currentDeckID:", currentDeckID);
  });

  return clonedElement;
}

export function renderDeckEl(item) {
  const deckEl = createDeckEl(item);
  const deleteButton = deckEl.querySelector(".deck__delete-btn");
  const colorName = getColorName(item.color);

  deckEl.classList.remove("deck_color_green");
  deckEl.classList.add(`deck_color_${colorName}`);

  deleteButton.addEventListener("click", () => {
    deckEl.remove();
  });

  deckList.prepend(deckEl);
}

export function renderCarouselView(deck) {
  let currentIndex = 0;
  let showingQuestion = true;

  const carouselEl = document.querySelector(".carousel");
  const carouselTitleEl = carouselEl.querySelector(".carousel__title");
  const cardEl = carouselEl.querySelector(".carousel__card");
  const cardTextEl = carouselEl.querySelector(".carousel__card-text");
  const flipBtn = carouselEl.querySelector(".carousel__btn_type_flip");
  const leftBtn = carouselEl.querySelector(".carousel__btn_type_left");
  const rightBtn = carouselEl.querySelector(".carousel__btn_type_right");

  function updateButtonStates() {
    const isFirstCard = currentIndex === 0;
    const isLastCard = currentIndex === deck.cards.length - 1;

    leftBtn.classList.toggle("carousel__btn_disabled", isFirstCard);
    rightBtn.classList.toggle("carousel__btn_disabled", isLastCard);
    leftBtn.disabled = isFirstCard;
    rightBtn.disabled = isLastCard;
  }

  function updateDisplay() {
    const card = deck.cards[currentIndex];
    removeColorClasses(cardEl);
    const colorName = hexToString(deck.color);
    cardEl.classList.add(`card__carousel_color_${colorName}`);

    if (showingQuestion) {
      cardTextEl.textContent = card.question;
      cardEl.classList.remove("carousel__card_color_white");
    } else {
      cardTextEl.textContent = card.answer;
      cardEl.classList.add("carousel__card_color_white");
    }

    carouselTitleEl.textContent = getCarouselTitleString(deck, currentIndex);
    updateButtonStates();
  }

  flipBtn.addEventListener("click", () => {
    showingQuestion = !showingQuestion;
    updateDisplay();
  });

  rightBtn.addEventListener("click", () => {
    if (currentIndex < deck.cards.length - 1) {
      currentIndex++;
      showingQuestion = true;
      updateDisplay();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showingQuestion = true;
      updateDisplay();
    }
  });
  updateDisplay();
}
