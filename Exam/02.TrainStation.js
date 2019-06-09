function solve(capacity, arr) {

    let capacityOfWagon = Number(capacity);
    let passengersForEachWagon = arr;
    let wagons = arr.length;
    let passengersAboard = [];

    for (let i = 0; i < wagons; i++) {

        let passengersForNextWagon = 0;
        if (passengersForEachWagon[i] <= capacityOfWagon) {

            passengersAboard.push(passengersForEachWagon[i]);
            continue;
        } else if (passengersForEachWagon[i] > capacityOfWagon) {

            passengersForNextWagon = passengersForEachWagon[i] - capacityOfWagon;

            passengersAboard.push(capacityOfWagon);
        }

    }


}

solve(10, [9, 39, 1, 0, 0]);
