// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//  matrix(5)
// [[1,   2,  3,  4, 5],
//  [16, 17, 18, 19, 6],
//  [15, 24, 25, 20, 7],
//  [14, 23, 22, 21, 8],
//  [13, 12, 11, 10, 9]]

function matrix(n) {
  //初始化n*n矩阵
  const ret = []
  for(let i=0; i< n; i++){
    ret.push([])
  }
  // 初始化填充数字
  let counter = 1
  // 初始化行列下标值
  let srow = 0
  let erow = n - 1
  let scol = 0
  let ecol = n - 1
  //根据行列值变化循环转圈填充
  while (srow <= erow && scol <= erow) {
    //向右→填充
    for(let i=scol; i<=ecol; i++){
      ret[srow][i] = counter++
    }
    //该行填充完向下移一行
    srow++

    //向下↓填充
    for(let i=srow; i <= erow; i++){
      ret[i][ecol] = counter++
    }
    //该列填充完向左移一列
    ecol--

    //向左←填充
    for(let i=ecol; i >= scol; i--){
      ret[erow][i] = counter++
    }
    //该行填充完向上移一行
    erow--

    //向上↑填充
    for(let i=erow; i>=srow; i--){
      ret[i][scol] = counter++
    }
    //该列填充完向右移一列
    scol++
  }
  return ret
}

module.exports = matrix;
