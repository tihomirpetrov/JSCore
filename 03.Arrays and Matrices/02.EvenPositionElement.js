function solve(arr) {
    let elements = [];
    arr.map((e, index) => {
        if (index % 2 == 0) {
            elements.push(e);
        }
    });
    console.log(elements.join(" "));
}

solve(['20', '30', '40']);
