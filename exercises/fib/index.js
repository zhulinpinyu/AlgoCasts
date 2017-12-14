// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution #1
// function fib(n) {
//     const ret = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         const current = ret[i - 1] + ret[i - 2]
//         ret.push(current)
//     }
//     return ret[n]
// }

//Solution #2
// function fib(n) {
//     if (n < 2) return n
//     return fib(n - 1) + fib(n - 2)
// }


//Solution #3 优化 Solution #2
function slowFib(n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

function memorize(fn) {
    const cache = {}
        //...args 读取fib函数的输入参数 也就是n
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }
        const ret = fn.apply(this, args)
        cache[args] = ret
        return ret
    }
}

const fib = memorize(slowFib)
module.exports = fib;