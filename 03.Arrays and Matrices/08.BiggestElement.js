function solve(matrix) {

    let biggestNumber = Number.NEGATIVE_INFINITY;

    matrix.forEach(row => row.forEach(col => biggestNumber = Math.max(biggestNumber, col)));
    console.log(biggestNumber);
}

solve([[20, 50, 10],
    [8, 33, 145]]
);
