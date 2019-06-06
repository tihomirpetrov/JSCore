function solve(arr) {

    let startNumber = arr[0];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (currentNumber >= startNumber){
            result.push(currentNumber);
            startNumber = currentNumber;
        }
    }
    console.log(result.join("\n"));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
