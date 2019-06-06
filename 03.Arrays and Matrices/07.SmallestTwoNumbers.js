function solve(arr) {

    arr.sort((a, b) => a - b);
    let sortedArr = [];

    for (let i = 0; i < 2; i++) {
       sortedArr[i] = arr[i];
    }
    console.log(sortedArr.join(" "));
}

solve([30, 15, 50, 5]);
