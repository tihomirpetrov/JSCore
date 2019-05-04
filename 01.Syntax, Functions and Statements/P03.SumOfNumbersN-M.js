function solve(n, m) {
    let result = 0;

    let firstNumber = Number(n);
    let secondNumber = Number(m);

    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i;
    }

    return result;
}