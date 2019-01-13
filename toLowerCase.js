/**
 * @param {string} str
 * @return {string}
 */

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
// time complexity O(n);
// space complexity O(n);

const toLowerCase = function (str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode > 64 && charCode < 91) {
      newString += String.fromCharCode(charCode + 32);
    } else {
      newString += str[i];
    }
  }
  return newString;
};