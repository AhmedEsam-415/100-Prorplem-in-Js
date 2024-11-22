function findNeedle(haystack) {
  // ! Shor Way In Solution :
  // return `found the needle at position ${haystack.indexOf("needle")} `;

  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i} `;
      //* return `found the needle at position ${haystack.findIndex(
      //*   (x) => x == "needle"
      //* )}`;
    }
  }
}

console.log(
  findNeedle(["hay", "junk", "hay", "needle", "hay", "moreJunk", "randomJunk"])
);
//  "found the needle at position 5";
