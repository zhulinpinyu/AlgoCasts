// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Solution #1
// function chunk(array, size) {
//   const ret = []
//   const ret_length = Math.ceil(array.length/size)
//   for(let ni=0; ni < ret_length; ni++){
//     let temp = []
//     for(let i=0; i<size; i++){
//       const v = array.shift()
//       if(v) temp.push(v)
//     }
//     ret.push(temp)
//   }
//   return ret
// }

//Solution #2
function chunk(array, size) {
  const chunked = []
  for (ele of array) {
    /*
    * 此一种算法实现核心为: 数组是引用类型，
    * 所以修正last, chunked 也会随之修改
    */
    const last = chunked[chunked.length - 1]
    if(!last||last.length === size){
      chunked.push([ele])
    }else{
      last.push(ele)
    }
  }
  return chunked
}

module.exports = chunk;
