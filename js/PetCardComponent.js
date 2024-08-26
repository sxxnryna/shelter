import { PetComponent } from "./PetComponent.js";

export class PetCardComponent {
  constructor(pet) {
    this.pet = pet;
  }
  render() {
    const petCardContainer = document.createElement("div");
    petCardContainer.classList.add("petCard");

    const learnMoreButton = document.createElement("button");
    learnMoreButton.classList.add("LearnMoreButton");
    learnMoreButton.textContent = "Learn more";
    learnMoreButton.id = "learnMoreButton";

    const petComponent = new PetComponent(this.pet);

    learnMoreButton.addEventListener("click", this.renderPetComponent(this.pet));

    petCardContainer.appendChild(petComponent.render());
    petCardContainer.appendChild(learnMoreButton);

    return petCardContainer;
  }

  renderPetComponent(pet) {
    const popup = document.getElementById("popup");
    
    popup.appendChild(new PetComponent(pet).render());
  }
}

