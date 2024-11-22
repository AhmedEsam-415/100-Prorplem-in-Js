function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${haystack.findIndex(
        (x) => x == "needle"
      )}`;
    }
  }
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "needle", "moreJunk", "randomJunk"])
);
//  "found the needle at position 5";
