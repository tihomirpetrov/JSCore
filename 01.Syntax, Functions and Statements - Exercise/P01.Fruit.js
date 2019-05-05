function solve(string, weight, price) {
    let fruit = string;
    let fruitWeight = weight / 1000;
    let fruitPrice = price * fruitWeight;
    let money = 0;

    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${fruitWeight.toFixed(2)} kilograms ${fruit}.`);
}