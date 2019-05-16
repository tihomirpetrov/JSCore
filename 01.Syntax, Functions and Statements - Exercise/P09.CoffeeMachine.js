function solve(input){
 
    let totalIncome = 0;
    let blank = [];
    for (let i = 0; i < input.length; i++){
    let splitThatShit = input[i].split(", ");
    for(let j = 0;j < splitThatShit.length;j++){
        blank.push(splitThatShit[j]);
        }
    }
 
    let array = blank;
 
    for (let i = 0;i < array.length;i++){
        let coinsInserted = Number(array[i]);
        let typeOfDrink = array[i + 1];
        let drinkCost = 0;
        let sugarAmount = 0;
        let success = false;
        if (typeOfDrink === 'coffee'){
           if (array[i + 2] === 'caffeine'){
               drinkCost = 0.8;
           }
           else if(array[i + 2] === 'decaf'){
               drinkCost = 0.9;
           }
           if (array[i + 3] === 'milk'){
               let rounded =
               drinkCost = (drinkCost + (drinkCost * 0.1));
               drinkCost = Math.round(drinkCost * 10) / 10;
               sugarAmount = Number(array[i + 4]);
           }
           else
           {
               sugarAmount = Number(array[i + 3]);
           }
           success = true;
        }
        else if(typeOfDrink === 'tea'){
            drinkCost = 0.8;
            if (array[i + 2] === 'milk'){
                drinkCost = drinkCost + (drinkCost * 0.1);
                drinkCost = Math.round(drinkCost * 10)/10;
                sugarAmount = Number(array[i + 3]);
            }
            else
            {
                sugarAmount = Number(array[i + 2]);
            }
            success = true;
        }
        if (success) {
            if (sugarAmount > 0){
                drinkCost += 0.10;
            }
 
            if (drinkCost <= coinsInserted){
                let change = coinsInserted - drinkCost;
                console.log(`You ordered ${typeOfDrink}. Price: \$${drinkCost.toFixed(2)} Change: \$${change.toFixed(2)}`);
                totalIncome+=drinkCost;
            }
            else{
                let difference = drinkCost - coinsInserted;
                console.log(`Not enough money for ${typeOfDrink}. Need \$${difference.toFixed(2)} more.`);
            }
        }
 
    }
 
    console.log(`Income Report: \$${totalIncome.toFixed(2)}`);
}