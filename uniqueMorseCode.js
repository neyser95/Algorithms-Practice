/**
 * @param {string[]} words
 * @return {number}
 */

const morseTable = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
}

// Time complexity: O(n^2);
// Space Complexity: O(n);
const uniqueMorseRepresentations = function (words) {
  const transformations = [];

  words.forEach(word => {
    let result = word.split('').map(char => morseTable[char]).join('');
    if (transformations.indexOf(result) === -1) {
      transformations.push(result);
    }
  });

  return transformations.length;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])