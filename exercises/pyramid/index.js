// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1
function pyramid(n) {
  const row_length = 2 * n - 1
  for(let i=1; i <= n; i++){
    const shape_length = 2 * i - 1
    const side_length = (row_length - shape_length) / 2
    const output = `${' '.repeat(side_length)}${'#'.repeat(shape_length)}${' '.repeat(side_length)}`
    console.log(output)
  }
}

// Solution #2
function pyramid(n) {

}

module.exports = pyramid;
