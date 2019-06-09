function solve(days) {

    let durationInDays = Number(days);
    // let coffee = Number(40);
    // let cocacola = Number(8);
    // let tea = Number(20);
    // let energy = Number(30);
    //
    // let morning = Number(3);
    // let lunch = Number(2);
    // let brunch = Number(3);

    let caffeine = Number(0);

    if(durationInDays >=1 && durationInDays <= 30){
        for (let i = 1; i <= durationInDays ; i++) {

            caffeine += 180; //morning 3 cups of coffee
            caffeine += 40; //every lunch 2 bottles of coca cola
            caffeine += 210; //every brunch 3 cups of tea

            if (i % 5 == 0){
                caffeine += 450; //3 energy drinks every 5th day
            }
            if(i % 9 == 0){
                caffeine += 340; //+2 bottles of coca cola and 2 energy drinks * 100ml
            }
        }
    }

    console.log(`${caffeine} milligrams of caffeine were consumed`);
}

solve(9);
