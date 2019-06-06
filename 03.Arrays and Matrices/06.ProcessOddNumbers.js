function solve(arr) {
    arr = arr.map(n => n * 2).filter((n, i) => i % 2 === 1).reverse();

    console.log(arr.join(" "));
}

solve([10, 15, 20, 25]);
