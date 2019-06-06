function solve(matrix) {

    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let result = [];

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j){
                leftDiagonal += Number(matrix[i][j]);
            }
            if (i + j === matrix.length - 1){
                rightDiagonal += Number(matrix[i][j]);
            }
        }
    }
    result.push(leftDiagonal);
    result.push(rightDiagonal);

    console.log(result.join(" "));
}

solve([[20, 40],
    [10, 60]]
);
