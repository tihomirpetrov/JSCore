function solve(days) {

    let durationInDays = Number(days);

    let caffeine = Number(0);

    for (let i = 1; i <= durationInDays; i++) {
        caffeine += Number(4.5) * Number(40);
        caffeine += Number(5) * Number(8);
        caffeine += Number(10.5) * Number(20);
        if (i % 5 === 0) {
            caffeine += Number(15) * Number(30);
        }
        if (i % 9 === 0) {
            caffeine += Number(10) * Number(8);
            caffeine += Number(10) * Number(30);
        }
    }

    console.log(`${caffeine} milligrams of caffeine were consumed`);
}

solve(9);
