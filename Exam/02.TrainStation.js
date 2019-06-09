function solve(capacity, arr) {

    let capacityOfWagon = Number(capacity);
    let passengersForEachWagon = arr;
    let wagons = arr.length;
    let passengersAboard = [];
    let currentPassengers = 0;

    for (let i = 0; i < wagons; i++) {

        currentPassengers += Number(passengersForEachWagon[i]);
        let passengersIn = 0;

        if (currentPassengers <= capacityOfWagon) {

            passengersIn = currentPassengers;
            currentPassengers = 0;

        } else  {

            passengersIn = capacityOfWagon;
            currentPassengers -= capacityOfWagon;
        }
        passengersAboard.push(passengersIn);
    }

    let train = JSON.stringify(passengersAboard.join(', '));
    let output = JSON.parse(train);

    console.log(`[ ${output} ]`);

    if (currentPassengers > 0) {
        console.log(`Could not fit ${currentPassengers} passengers`);
    } else {
        console.log(`All passengers aboard`);
    }
}

solve(10, [9, 39, 1, 0, 0]);
