function solve(capacity, arr) {

    let capacityOfWagon = Number(capacity);
    let passengersForEachWagon = arr;
    let wagons = arr.length;
    let passengersAboard = [];
    let passengersForNextWagon = 0;
    let passengersLeft = 0;

    for (let i = 0; i < wagons; i++) {

        if (passengersForEachWagon[i] + passengersForNextWagon + passengersLeft <= capacityOfWagon) {

            passengersAboard.push(passengersForEachWagon[i] + passengersForNextWagon + passengersLeft);

        } else if (passengersForEachWagon[i] + passengersForNextWagon > capacityOfWagon) {

            passengersLeft = (passengersForEachWagon[i] - capacityOfWagon);
            let passengersIn = passengersForEachWagon[i] - passengersLeft;

            passengersAboard.push(passengersIn);

            passengersForNextWagon += passengersLeft;
        }
    }
    console.log(passengersAboard);
}

solve(10, [9, 39, 1, 0, 0]);
