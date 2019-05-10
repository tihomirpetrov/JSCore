function solve(arr) {

    let name = arr[0];
    let calories = arr[1];
    let caloriesObj = "";

    process.stdout.write("{ ");
    for (let i = 0; i < arr.length - 2; i++) {
        if (i % 2 == 0) {
            process.stdout.write(`${arr[i]}: ${arr[i + 1]}, `);
        }
    }
    process.stdout.write(`${arr[arr.length - 2]}: ${arr[arr.length - 1]}`);
    process.stdout.write(" }");
}