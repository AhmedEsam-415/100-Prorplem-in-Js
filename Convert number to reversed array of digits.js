function digitize(numbers) {
  return numbers.toString().split("").map(Number).reverse();
}

console.log(digitize(35231));
