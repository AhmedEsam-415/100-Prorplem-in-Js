function positiveSum(arr) {
  // let initVal = 0;
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     initVal += arr[i];
  //   }
  // }
  // return initVal;

  return arr.filter((x) => x > 0).reduce((acc, curr) => acc + curr);
}

console.log(positiveSum([1, -3, 5, 9]));
