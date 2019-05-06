function solve(number) {

    number = Number(number);
    let sum = 0;

    for (let i = 0; i < number.length; i++) {

        sum += number[i];

    }
    console.log(sum);
}

solve(22222)