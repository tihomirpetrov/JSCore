function solve(number) {

    let numberAsText = number.toString();

    let isEqual = true;
    for (let i = 0; i < numberAsText.length - 1; i++) {
        if (Number(numberAsText[0]) === Number(numberAsText[i + 1])) {
            continue;
        }
        isEqual = false;
        break;
    }

    if (isEqual == true) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
    let totalSum = 0;

    for (let i = 0; i < numberAsText.length; i++) {
        totalSum += Number(numberAsText[i]);
    }
    console.log(Number(totalSum));
}