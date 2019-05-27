function solve(input) {
let tokens = input.split();

    let sum = [];

    for (let i = 0; i < tokens.length; i += 2) {

        let town = input[i];
        let income = Number(input[i+1]);

        let towns = {
            town : town,
            income : income
    }
        sum.push(towns);
    }
    console.log(JSON.stringify(input));
}

solve("Sofia",
"20",
"Varna",
"3",
"Sofia",
"5",
"Varna",
"4",
);
