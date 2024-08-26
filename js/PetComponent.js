export class PetComponent {
  constructor({
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

    const nameElement = document.createElement("p");
    nameElement.classList.add("name");

    const ageElement = document.createElement("p");
    ageElement.classList.add("age");

    const typeElement = document.createElement("p");
    typeElement.classList.add("type");

    const breedElement = document.createElement("p");
    breedElement.classList.add("breed");

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");

    const inoculationsElement = document.createElement("p");
    inoculationsElement.classList.add("inoculations");

    const diseasesElement = document.createElement("p");
    diseasesElement.classList.add("diseases");

    const parasitesElement = document.createElement("p");
    parasitesElement.classList.add("parasites");

    nameElement.textContent = this.name;
    petPhotoElement.src = this.img;
    petPhotoElement.alt = "Pet Photo";

    ageElement.textContent = this.age;
    typeElement.textContent = this.type;
    breedElement.textContent = this.breed;
    descriptionElement.textContent = this.description;
    inoculationsElement.textContent = this.inoculations;
    diseasesElement.textContent = this.diseases;
    parasitesElement.textContent = this.parasites;

    petDescriptionContainer.appendChild(petPhotoElement);
    petDescriptionContainer.appendChild(nameElement);
    petDescriptionContainer.appendChild(ageElement);
    petDescriptionContainer.appendChild(typeElement);
    petDescriptionContainer.appendChild(breedElement);
    petDescriptionContainer.appendChild(descriptionElement);
    petDescriptionContainer.appendChild(inoculationsElement);
    petDescriptionContainer.appendChild(diseasesElement);
    petDescriptionContainer.appendChild(parasitesElement);

    return petDescriptionContainer;
  }
}
/*{
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
  <div class="petCard>
    <div class="petDescription">
        <img className="petPhoto" />
        <p className="name">Bobik</p>
        <p className="age">34</p>
       ....
    </div>
    <button className="learnMoreButton"> </button>
</div>
newDiv.classList.add('my-class'); */
