var numOfSubarrays = function (arr, k, threshold) {
    // arr.sort(function (x, y) {
    //     return x - y;
    // })
    let a = 0, b = 0
    for (let i = 0; i <= arr.length - k; i++) {
        for (let j = i; j < k + i; j++) {
            a += arr[j]
        }
        if (a / k >= threshold) {
            b++
        }
        a = 0
    }
    return b
};