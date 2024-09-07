export class PopupComponent {
  constructor(content) {
    this.content = content;
  }

  render() {
    const popupContainer = document.createElement("div");
    popupContainer.id = "popup";

    const clonedElement = this.content.cloneNode(true);
    popupContainer.appendChild(clonedElement);

    return popupContainer;
  }
}
