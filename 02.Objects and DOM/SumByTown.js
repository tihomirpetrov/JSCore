function solve(input) {

    let sum = {};

    for (let i = 0; i < input.length; i += 2) {

        let town = input[i];
        let income = Number(input[i + 1]);

        let towns = {
            town: town,
            income: income
        };

        if (sum[town] == null)
        {
            sum[town] = income;
        }
        else{
            sum[town] += income;
        }
    }
    console.log(JSON.stringify(sum));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
