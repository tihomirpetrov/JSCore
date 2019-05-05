function solve(array) {

    let sumElements = 0;
    let concatElements;

    for (let i = 0, l = array.length; i < l; i++) {
        sumElements += array[i];
    }

    console.log(sumElements);
    console.log(array.join(''));
}

solve([1, 2, 3]);