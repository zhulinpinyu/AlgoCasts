// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1
// function steps(n) {
//   for(let i=1; i<=n; i++){
//     console.log(print(n, i))
//   }
// }

// const print = (n, i) => {
//   return '#'.repeat(i) + ' '.repeat(n-i)
// }

// Solution #2

function steps(n) {
  for(let i=0; i<n; i++){
    let ret = ''
    for(let j=0; j<n; j++){
      if(j<=i){
        ret += '#'
      }else{
        ret += ' '
      }
    }
    console.log(ret)
  }
}

module.exports = steps;
