export function slider(previousValues, itemsToShow, allPets) {
  const petIndexes = generator(previousValues, itemsToShow, allPets);
  return petIndexes;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generator(previousValues, itemsToShow, allPets) {
  const currentValues = [];
  const maxIndex = allPets.length - 1;

  while (currentValues.length < itemsToShow) {
    let random = getRandomNumber(0, maxIndex);
    if (!currentValues.includes(random) && !previousValues.includes(random)) {
      currentValues.push(random);
    }
  }
  return currentValues;
}
