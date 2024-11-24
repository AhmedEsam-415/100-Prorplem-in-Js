function findAverage(array) {
  if (array == null || array.length == 0) return 0;

  // let sum = 0;
  // for (i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // let finalAns = sum / array.length;
  // return finalAns;

  return array.reduce((acc, curr) => acc + curr) / array.length;
}

console.log(findAverage([1, 2, 3]));
