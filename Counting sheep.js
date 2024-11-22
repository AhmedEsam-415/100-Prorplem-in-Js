function countSheeps(sheep) {
  if (sheep == null || sheep == "undefined" || sheep == "") return 0;
  let trueSheep = sheep.filter((tr) => tr == true);
  return trueSheep.length;
}

console.log(countSheeps([undefined, null, false, true]));
