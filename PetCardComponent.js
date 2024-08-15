class PetCardComponent {
  constructor(pet) {
    this.pet = pet;
  }
  render() {
    const petCardContainer = document.createElement("div");
    petCardContainer.classList.add("petCard");

    const LearnMoreButton = document.createElement("button");
    LearnMoreButton.classList.add("LearnMoreButton");

    const petComponent = new PetComponent(this.pet);

    LearnMoreButton.textContent = "Learn more";

    petCardContainer.appendChild(petComponent.render());
    petCardContainer.appendChild(LearnMoreButton);

    return petCardContainer;
  }
}
