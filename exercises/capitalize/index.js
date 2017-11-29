// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
// function capitalize(str) {
//   return str.split(" ").map(e => e[0].toUpperCase()+e.slice(1)).join(" ")
// }

// Solution #2
function capitalize(str) {
  let ret = str[0].toUpperCase()

  for(let i=1; i<str.length; i++){
    if(str[i-1] === " "){
      ret += str[i].toUpperCase()
    }else{
      ret += str[i]
    }
  }
  return ret
}

module.exports = capitalize;
