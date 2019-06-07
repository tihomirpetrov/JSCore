function solve(matrix) {

    let sum = 0;
    let hasRightNumbers = true;

    for (let i = 0; i < matrix[0].length; i++) {

        sum += matrix[0][i];
    }

    for (let i = 0; i < matrix.length; i++) {

        let currentSum = 0
        for (let j = 0; j < matrix[i].length; j++) {
            currentSum += matrix[i][j];
        }
        
        if (currentSum != sum){
            hasRightNumbers = false;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            currentSum += matrix[row][col];
        }

        if (currentSum !== sum) {
            hasRightNumbers = false;
        }
    }

    console.log(hasRightNumbers);
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

);
