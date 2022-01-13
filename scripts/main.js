let projects = document.querySelector(".projects__cards-main");
let cards = [
  "Торт с клубникой",
  "Кекс с клубникой",
  "Торт на выбор",
  "Кекс с вишней",
  "Торт",
  "Кексы-животные",
];
let cardImages = [
  "../images/pic2-c.jpg",
  "../images/pic4-b.jpg",
  "../images/pic3-b.jpg",
  "./images/pic4-a.jpg",
  "./images/pic3-c.jpg",
  "./images/pic4-c.jpg",
];

let currentRow = document.createElement("div");
currentRow.classList.add("projects__row");
projects.appendChild(currentRow);

for (let i = 0; i < cards.length; i++) {
  if (i % 3 == 0) {
    currentRow = document.createElement("div");
    currentRow.classList.add("projects__row");
    projects.appendChild(currentRow);
  }
  let card = document.createElement("div");
  card.classList.add("projects__card");
  card.innerHTML = `<h1>${cards[i]}</h1>
  <img
    src="${cardImages[i]}"
    alt=""
    class="cake projects__cards"
  />`;
  currentRow.appendChild(card);
}
