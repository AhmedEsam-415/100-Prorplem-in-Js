function areYouPlayingBanjo(name) {
  return name.charAt() == "r" || name.charAt() == "R"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Rana"));
