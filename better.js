// * test
// let A = [1, 3, 6, 4, 1, 2];
// function solution(A) {
//   let sortedA = A.filter(num => {
//     if(A.indexOf(num) === -1){
//       return num;
//     }
//   });
//   let result = 0;
//   console.log(sortedA);
//   // write your code in JavaScript (Node.js 8.9.4)
//   for(let i = 0; i < A.length; i++){
//     if(result < A[i]){
//       result = A[i];
//     }
//   }
  
//   return result;
// }

// let A = [3, 5, 6, 3, 3, 5];

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let counter = 0;
  
//   for(let i = 0; i < A.length; i++){
//       let current = A[i];
//       for(let j = i + 1; i < j && j < A.length; j++){
//           if(current === A[j]){
//               counter++;
//           }
//       }    
//   }
  
//   return counter;
// }

// console.log(solution(A));
// let S = 'ABCBBCBA';
// // 'ACCAABBC' 'ABCBBCBA'
// function solution(S) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   if(S.length === 0) return S;
//   let arrayS =  S.split('');
//   let i = 0;

//   while(i < arrayS.length){
//     console.log(i, arrayS);
//     if(arrayS[i] === arrayS[i + 1]){
//       console.log(arrayS[i], arrayS[i + 1]);
//       arrayS.splice(i, 2);
//       console.log(arrayS);
//       i = 0;
//     }else{
//       i++;
//     }
//   }
  
//   return arrayS.join('');
// }
// console.log('result', solution(S));

const S = 'photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11';

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  // we need to seperate the string at every new line so we can get every single photo.
  const photoArr = S.split('\n');
  const photoArrCopy = photoArr.slice();
  // we loop through photoArr to go through every photo.
  for(let i = 0; i < photoArr.length; i++){
      // we need to all split the every photo by comma so we can get the photo name and city separately.
      let photo = photoArr[i].split(',');
      let extension = photo[0].split('.')[1];
      let newPhoto = `${photo[1]}.${extension}`;
      // we then remove the photo name by the city and 'given number?'. Don't change the extension number.
      photoArr[i] = newPhoto;
  }
  
  // we return a string of the photos. Each on a new line.
  return photoArr.join('\n');
}

console.log('RESULT', solution(S));