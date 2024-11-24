function squareOrSquareRoot(array) {
  // let newArr = [];
  // for (i = 0; i < array.length; i++) {
  //   if (Number.isInteger(Math.sqrt(array[i]))) {
  //     newArr.push(Math.sqrt(array[i]));
  //   } else {
  //     newArr.push(array[i] * array[i]);
  //   }
  // }
  // return newArr;

  // ! Reguler Function
  // return array.map(function (number) {
  //  return Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number;
  // });

  // ! Arrow Function
  return array.map((n) =>
    Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n
  );
}

console.log(
  squareOrSquareRoot([
    41, 15, 21.5, 7, 43.5, 34, 6.5, 20.5, 43.5, 7.5, 38, 18, 32, 49.5, 33.5,
  ])
);
