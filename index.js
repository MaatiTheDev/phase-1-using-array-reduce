const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
  return element * 2 + accumulator;
}, 0);

console.log(doubledAndSummed); // Output: 12

const letters = ["a", "b", "c", "b", "a", "a"];

const letterCount = letters.reduce(function (countObj, currentLetter) {
  if (countObj[currentLetter]) {
    countObj[currentLetter]++;
  } else {
    countObj[currentLetter] = 1;
  }
  return countObj;
}, {});

console.log(letterCount); // Output: { a: 3, b: 2, c: 1 }

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

console.log(totalBatteries); // Output: 31 (sum of all elements in batteryBatches)
