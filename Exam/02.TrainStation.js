function solve(capacity, arr) {

    let capacityOfWagon = Number(capacity);
    let passengersForEachWagon = arr;
    let wagons = arr.length;
    let passengersAboard = [];
    let passengersForNextWagon = 0;

    for (let i = 0; i < wagons; i++) {


        if (passengersForEachWagon[i] <= capacityOfWagon) {

            passengersAboard.push(passengersForEachWagon[i]);
            continue;
        } else if (passengersForEachWagon[i] > capacityOfWagon) {

            passengersForEachWagon[i] -= capacityOfWagon;
            let passengersIn = capacityOfWagon;
            passengersAboard.push(passengersIn);

            passengersForNextWagon += passengersForEachWagon[i] - capacityOfWagon;

        }

    }

    console.log(passengersAboard);

}

solve(10, [9, 39, 1, 0, 0]);
