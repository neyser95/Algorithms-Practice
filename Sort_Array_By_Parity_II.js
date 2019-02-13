/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const result = [];
  let i = 0;
  let j = 0;

  while (j < A.length) {
    if (i % 2 === 0 && A[j] % 2 === 0) {
      result.push(A[j]);
      if (j !== i) {
        [A[i], A[j]] = [A[j], A[i]];
      }
      i++;
      j = i;
    } else if (i % 2 !== 0 && A[j] % 2 !== 0) {
      result.push(A[j]);
      if (j !== i) {
        [A[i], A[j]] = [A[j], A[i]];
      }
      i++;
      j = i;
    } else {
      j++;
    }
  }

  return result;
};

var sortArrayByParityII = function (A) {
  var ans = new Array(A.length);
  var odd = 1, 
      even = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      ans[even] = A[i];
      even += 2;
    } else {
      ans[odd] = A[i];
      odd += 2;
    }
  }

  return ans;
}
