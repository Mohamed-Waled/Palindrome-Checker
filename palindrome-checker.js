function palindrome(str) {
  let justLitters = str.replace(/[\W+_]/g, "").toLowerCase();
  let reversedString = justLitters.split("").reverse().join("");
  let normalString = justLitters;
  if (normalString === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("almostomla"));