function solve(array) {

    let sumElements = 0;
    let sumInverseElements = 0;
    let concatElements;

    for (let i = 0, l = array.length; i < l; i++) {
        sumElements += array[i];
        sumInverseElements += 1/array[i];
    }

    console.log(sumElements);
    console.log(sumInverseElements);
    console.log(array.join(''));
}