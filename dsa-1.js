function main() {
    const arr = [10, 9, 2, 5, 3, 7, 101, 18];
    const res = [];
    res.push(arr[0])
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            res.push(arr[i])
        } else if (res[res.length - 1] < arr[i]) {
            res.push(arr[i])
        }
    }
    console.log(res)
}
main()