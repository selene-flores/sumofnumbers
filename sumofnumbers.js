const listOfNumbers = [10, 51, 69, 48, 89, 9];
const listLength = listOfNumbers.length;
// for-loop
function sumFor(numbers) {
  let forTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    forTotal += numbers[i];
  }
  return forTotal;
}

const sumForTotal = sumFor(listOfNumbers);
console.log(sumForTotal);

// while loop
function sumWhile(numbers) {
  let whileTotal = 0;
  let i = 0;
  while (i < numbers.length) {
    whileTotal += numbers[i];
    i++;
  }
  return whileTotal;
}

const sumWhileTotal = sumWhile(listOfNumbers);
console.log(sumWhileTotal);

// recursion
function sumRecursion(numbers, x) {
  if (x <= 0) {
    return 0;
  }
  return (sumRecursion(numbers, x - 1) + numbers[x - 1]);
}

const sumRecursionTotal = sumRecursion(listOfNumbers, listLength);
console.log(sumRecursionTotal);

// underscore library
function sumTheSimpleWay(numbers) {
  const underscoreTotal = _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
  return underscoreTotal;
}

const sumTheSimpleWayTotal = sumTheSimpleWay(listOfNumbers);
console.log(sumTheSimpleWayTotal);
