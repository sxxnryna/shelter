export class PetCardComponent {
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
