// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) return arr
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let ret = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            ret.push(left.shift())
        } else {
            ret.push(right.shift())
        }
    }

    return [...ret, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };