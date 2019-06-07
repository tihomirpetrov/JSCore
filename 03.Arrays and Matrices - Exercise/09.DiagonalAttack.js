function solve(matrix) {
    matrix = matrix.map(row => row.split(" ").map(Number));
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        leftDiagonal += matrix[row][row];
        rightDiagonal += matrix[row][matrix[row].length - row - 1];
    }

    if (leftDiagonal == rightDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row == col || row + col + 1 == matrix.length) {
                    continue;
                }
                matrix[row][col] = leftDiagonal;
            }
        }
    }

    matrix.forEach(matrix => console.log(matrix.join(' ')));
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
