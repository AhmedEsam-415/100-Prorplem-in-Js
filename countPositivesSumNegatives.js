function countPositivesSumNegatives(input) {
  // let positives = input.filter((ele) => ele > 0).length;
  // let negative = input
  //   .filter((ele) => ele < 0)
  //   .reduce((acc, curr) => acc + curr);
  // return [positives, negative];

  let positionArr = [];
  let sumNegative = 0;
  for (i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positionArr.push(input[i]);
    } else {
      sumNegative += input[i];
    }
  }
  return [positionArr.length, sumNegative];
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
