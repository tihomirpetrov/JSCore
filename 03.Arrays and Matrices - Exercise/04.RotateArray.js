function solve(arr) {

    let rotation = Number(arr.pop());

    for (let i = 0; i < rotation % arr.length; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(" "));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
);
