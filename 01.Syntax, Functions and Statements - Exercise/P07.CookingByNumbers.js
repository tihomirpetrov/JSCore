function solve(arr) {
    let number = Number(arr[0]);

    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] == "chop") {
            number = number / 2;
        } else if (arr[i] == "dice") {
            number = Math.sqrt(number);
        } else if (arr[i] == "spice") {
            number = number + 1;
        } else if (arr[i] == "bake") {
            number = number * 3;
        } else if (arr[i] == "fillet") {
            number = number - (number * 0.2);
        }
        console.log(number);
    }
}