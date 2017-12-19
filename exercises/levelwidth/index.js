// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//     let arr = [root, '*']
//     let ret = [0]
//     while (arr.length > 1) {
//         let node = arr.shift()
//         if (node === '*') {
//             ret.push(0)
//             arr.push('*')
//         } else {
//             arr.push(...node.children)
//             ret[ret.length - 1]++
//         }
//     }
//     return ret
// }


//重复
const levelWidth = (root) => {
    let arr = [root, '*']
    let ret = [0]
    while (arr.length > 1) {
        let node = arr.shift()
        if (node === '*') {
            arr.push('*')
            ret.push(0)
        } else {
            arr.push(...node.children)
            ret[ret.length - 1]++
        }
    }
    return ret
}

module.exports = levelWidth;