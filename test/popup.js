import { PopupComponent } from "./PopupComponent.js";

export function createPopup(content, parentElementId) {
  const popupComponent = new PopupComponent(content);
  const parentElement = document.getElementById(parentElementId);
  parentElement.appendChild(popupComponent.render());
}

export function deletePopup(parentElementId) {
  const parentElement = document.getElementById(parentElementId);
  parentElement.removeChild(parentElement);
}
