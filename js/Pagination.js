import { pets } from "./pets.js";

class PetCardComponent {
  constructor(pet) {
    this.pet = pet;
  }

  render() {
    const petCardContainer = document.createElement("div");
    petCardContainer.classList.add("card");

    const petImage = document.createElement("img");
    petImage.src = `./${this.pet.img}`;
    petImage.alt = this.pet.name;
    petImage.classList.add("cardImg");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card1");

    const petName = document.createElement("p");
    petName.classList.add("pets");
    petName.textContent = this.pet.name;

    const learnMoreButton = document.createElement("button");
    learnMoreButton.classList.add("learnMore");

    const learnMoreText = document.createElement("p");
    learnMoreText.classList.add("petsMore");
    learnMoreText.textContent = "Learn more";

    learnMoreButton.appendChild(learnMoreText);
    learnMoreButton.addEventListener("click", () => {
      this.renderPetModule(this.pet);
    });

    cardContent.appendChild(petName);
    cardContent.appendChild(learnMoreButton);

    petCardContainer.appendChild(petImage);
    petCardContainer.appendChild(cardContent);

    return petCardContainer;
  }

  //Pop&overlay
  renderPetModule(pet) {
    const popup = document.getElementById("overlay");
    popup.innerHTML = `<div class="popup"><div class="popup-content"><div class="close-button" id="closeButton">&times;</div><div class="petCard-pop"><img class="pop-up" src="${pet.img}" alt="${pet.name}"><div class="pop-inner"><h3 class='pop-name'>${pet.name}</h3><h4 class="pop-breed">${pet.breed}</h5><p  class="pop-descr">${pet.description}</p><ul><li class="pop-li"><span class="pop-span">Age:</span> ${pet.age}</li><li class="pop-li"><span class="pop-span">Inoculations:</span> ${pet.inoculation}</li><li class="pop-li"><span class="pop-span">Diseases:</span> ${pet.diseases}</li><li class="pop-li"><span class="pop-span">Parasites:</span> ${pet.parasites}</li></ul></div><div></div>`;
    popup.style.display = "block";
    document.body.classList.add("no-scroll");
    popup.addEventListener("click", () => {
      popup.style.display = "none";
      document.body.classList.remove("no-scroll");
    });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generatePagesWithShuffledPets(pets, totalPages) {
  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    const shuffledPets = shuffleArray([...pets]);
    pages.push(shuffledPets);
  }

  return pages;
}

const petsPerPage = 8;
const totalPages = 6;
const pages = generatePagesWithShuffledPets(pets, totalPages);
let currentPage = 1;

function renderPagination() {
  const petsContainer = document.getElementById("petsContainer");
  petsContainer.innerHTML = "";

  const petsToDisplay = pages[currentPage - 1];

  petsToDisplay.forEach((pet) => {
    const petCard = new PetCardComponent(pet);
    petsContainer.appendChild(petCard.render());
  });

  document.getElementById("currentPage").textContent = currentPage;
  updatePaginationButtons();
}

function updatePaginationButtons() {
  document.getElementById("prevButton").disabled = currentPage === 1;
  document.getElementById("nextButton").disabled = currentPage === totalPages;
  document.getElementById("firstButton").disabled = currentPage === 1;
  document.getElementById("lastButton").disabled = currentPage === totalPages;

  if (currentPage === 1) {
    firstButton.classList.add("disabled");
    prevButton.classList.add("disabled");
  } else {
    firstButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
  }

  if (currentPage === totalPages) {
    nextButton.classList.add("disabled");
    lastButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
    lastButton.classList.remove("disabled");
  }
}

document.getElementById("firstButton").addEventListener("click", () => {
  currentPage = 1;
  renderPagination();
});

document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPagination();
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPagination();
  }
});

document.getElementById("lastButton").addEventListener("click", () => {
  currentPage = totalPages;
  renderPagination();
});

window.addEventListener("resize", () => {
  const previousItemsPerPage = itemsPerPage;
  itemsPerPage =
    window.innerWidth >= 1280 ? 8 : window.innerWidth >= 768 ? 6 : 3;
  totalPages = Math.ceil(petsArray.length / itemsPerPage);

  currentPage = Math.min(
    Math.ceil(((currentPage - 1) * previousItemsPerPage) / itemsPerPage) + 1,
    totalPages
  );

  renderPagination();
});

document.addEventListener("DOMContentLoaded", () => {
  renderPagination();
});
