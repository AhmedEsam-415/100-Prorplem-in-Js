function noSpace(x) {
  // return x
  //   .split(" ")
  //   .filter((x) => (x == " " ? "" : x))
  //   .join("");

  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
