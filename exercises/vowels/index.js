// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1
// function vowels(str) {
//   let count = 0
//   str.split('').forEach((e,i) => {
//     if(['a','e','i','o','u'].includes(e.toLowerCase())){
//       count ++
//     }
//   })
//   return count
// }

// Solution #2
// function vowels(str) {
//   let count = 0
//   const checkers = 'aeiou'
//   for(let char of str.toLowerCase()){
//     if(checkers.includes(char)){
//       count ++
//     }
//   }
//   return count
// }

// Solution #3
function vowels(str) {
  const ret = str.match(/[aeiou]/gi)
  return  ret ? ret.length : 0
}

module.exports = vowels;
