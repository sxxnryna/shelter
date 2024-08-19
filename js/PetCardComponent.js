class PetCardComponent {
  constructor(pet) {
    this.pet = pet;
  }
  render() {
    const petCardContainer = document.createElement("div");
    petCardContainer.classList.add("petCard");

    const LearnMoreButton = document.createElement("button");
    LearnMoreButton.classList.add("LearnMoreButton");
    LearnMoreButton.textContent = "Learn more";

    const petComponent = new PetComponent(this.pet);

    petCardContainer.appendChild(petComponent.render());
    petCardContainer.appendChild(LearnMoreButton);

    return petCardContainer;
  }
}
