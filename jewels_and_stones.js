// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A"
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

// Time complexity: O(n)
// Space complexity: O(n)

const numJewelsInStones = function (J, S) {
  let obj = {};
  let count = 0;

  // create an obj that contains all the characters in J string
  for (let i = 0; i < J.length; i++) {
    obj[J.charAt(i)] = 0;
  }

  // Loop though all the string S and increment the value of each key in the obj that matches the letter.
  for (let i = 0; i < S.length; i++) {
    let char = S.charAt(i);
    if (obj[char] !== undefined) {
      obj[char]++;
    }
  }

  // Add all values in the obj
  for (let key in obj) {
    count += obj[key];
  }

  // Reaturn the count
  return count;
};