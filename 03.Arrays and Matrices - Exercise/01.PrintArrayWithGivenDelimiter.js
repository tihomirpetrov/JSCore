function solve(arr) {

    let delimeter = arr[arr.length - 1];
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i]);
    }
    console.log(result.join(`${delimeter}`));
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
);
