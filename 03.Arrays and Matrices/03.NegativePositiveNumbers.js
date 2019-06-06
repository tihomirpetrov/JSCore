function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }

    console.log(result.join(" "));
}

solve([3, -2, 0, -1]);
