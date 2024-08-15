function slider() {
  const previousValues = [];
  const currentValue = generator();
  let isComeBack = 0;
  if (isComeBack == 0) {
    return previousValues;
  } else {
    return currentValue;
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function generator(previousValue) {
  const currentValues = [];
  while (currentValues.length < 3) {
    let random = getRandomNumber(0, 7);
    let value = previousValue.include(random);
    if (!value) {
      currentValues.append(random);
    }
  }
}
