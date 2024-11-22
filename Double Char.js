function doubleChar(str) {
  return [...str].map((x) => x.repeat(2)).join("");
}

console.log(doubleChar("String"));
