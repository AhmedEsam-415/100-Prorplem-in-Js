//
// Check if Empty Value Returt 0
// Find The Heighest Number
// Find The Lowest Number
// filter The Array
// Sum All Number In The Array

function sumArray(array) {
  if (array == null || array.length <= 2 || array == "") return 0;

  // ! فى حاله ان هناك ارقام تشبه بعض هيشيل رقم واحد فقط
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);

  // ! فى حاله ان هناك ارقام تشبه بعض هيشيلهم كلهم
  // return array
  //   .filter((x) => x !== Math.max(...array) && x !== Math.min(...array))
  //   .reduce((acc, curr) => acc + curr, 0);

  // let maxNum = Math.max(...array);
  // let minNum = Math.min(...array);
  // let filterArray = array.filter((num) => num !== maxNum && num !== minNum);
  // let newArray = filterArray.reduce((acc, curr) => acc + curr, 0);
  // return newArray;
}

console.log(sumArray([1, 2, 3, 15, 4, 5, 6, 7, 8]));
