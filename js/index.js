export class PetComponent {
  constructor({
    id,
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  render() {
    const petDescriptionContainer = document.createElement("div");
    petDescriptionContainer.classList.add("petDescription");

    const petPhotoElement = document.createElement("img");
    petPhotoElement.classList.add("petPhoto");
    petPhotoElement.src = this.img;
    petPhotoElement.alt = "Pet Photo";

    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = this.name;

    petDescriptionContainer.appendChild(petPhotoElement);
    petDescriptionContainer.appendChild(nameElement);

    return petDescriptionContainer;
  }
}
