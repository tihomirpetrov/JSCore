function solve(n, k) {

    n = Number(n);
    k = Number(k);

    let result = [];
    result[0] = Number(1);

    for (let i = 1; i < n; i++) {

        let sum = Number(0);

        for (let j = i - 1; j >= 0 && j >= i - k ; j--) {
        sum += Number(result[j]);
        }

        result[i] = sum;
    }

    console.log(result.join(" "));
}

solve(6, 3);
