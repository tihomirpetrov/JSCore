function solve(capacity, arr) {

    let capacityOfWagon = Number(capacity);
    let passengersForEachWagon = arr;
    let wagons = arr.length;
    let passengersAboard = [];
    let passengersForNextWagon = 0;
    let passengersLeft = 0;
    let passengersIn = 0;

    for (let i = 0; i < wagons; i++) {

        if (passengersForEachWagon[i] + passengersLeft <= capacityOfWagon) {

            passengersAboard.push(passengersForEachWagon[i] + passengersLeft);

        } else if (passengersForEachWagon[i] +  passengersLeft > capacityOfWagon) {

            passengersLeft = (passengersForEachWagon[i] - capacityOfWagon);
            passengersIn = passengersForEachWagon[i] - passengersLeft;

            passengersAboard.push(passengersIn);

            //passengersForNextWagon += passengersLeft;
        }
    }
    console.log(passengersAboard);
}

solve(10, [9, 39, 1, 0, 0]);
