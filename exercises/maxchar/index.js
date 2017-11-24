// 高频字符检测 --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxCharacter = ''

  for (let c of str) {
    if(charMap[c]){
      charMap[c]++
    }else{
      charMap[c] = 1
    }
  }

  for(let k in charMap){
    if(charMap[k] > max){
      max = charMap[k]
      maxCharacter = k
    }
  }
  return maxCharacter
}

module.exports = maxChar;
