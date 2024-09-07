export class CardComponent {
  constructor({
    cardContainerId,
    petComponent,
    onLearnMoreButtonClick,
    buttonId,
    buttonContent,
  }) {
    this.cardContainerId = cardContainerId;
    this.petComponent = petComponent;
    this.parentElementId;
    this.buttonId = buttonId;
    this.buttonContent = buttonContent;
    this.onLearnMoreButtonClick = onLearnMoreButtonClick;
  }

  render() {
    const cardContainer = document.createElement("div");
    cardContainer.id = this.cardContainerId;

    const learnMoreButton = document.createElement("button");
    learnMoreButton.id = this.buttonId;
    learnMoreButton.textContent = this.buttonContent;

    learnMoreButton.addEventListener("click", () => {
      this.onLearnMoreButtonClick();
    });

    cardContainer.appendChild(this.petComponent);
    cardContainer.appendChild(learnMoreButton);

    return cardContainer;
  }
}
