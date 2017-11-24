// 回文检测 --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('')
//   return reversed === str
// }

// Solution #2
function palindrome(str) {
  return str.split('').every((c, i) => {
    if(i <= str.length-1-i) return c === str[str.length-1-i]
    return true
  })
}

module.exports = palindrome;
