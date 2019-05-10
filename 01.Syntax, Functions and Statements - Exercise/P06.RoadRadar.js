function solve(arr) {

    let speed = Number(arr[0]);
    let area = arr[1];

    let motorwayLimit = Number(130);
    let interstateLimit = Number(90);
    let cityLimit = Number(50);
    let residentalLimit = Number(20);

    if (area == "motorway") {
        if (speed > motorwayLimit && speed <= motorwayLimit + 20) {
            console.log("speeding")
        } else if (speed > motorwayLimit && speed <= motorwayLimit + 40) {
            console.log("excessive speeding");
        } else if (speed > motorwayLimit + 40) {
            console.log("reckless driving");
        }
    } else if (area == "interstate") {
        if (speed > interstateLimit && speed <= interstateLimit + 20) {
            console.log("speeding")
        } else if (speed > interstateLimit && speed <= interstateLimit + 40) {
            console.log("excessive speeding");
        } else if (speed > interstateLimit + 40) {
            console.log("reckless driving");
        }
    } else if (area == "city") {
        if (speed > cityLimit && speed <= cityLimit + 20) {
            console.log("speeding")
        } else if (speed > cityLimit && speed <= cityLimit + 40) {
            console.log("excessive speeding");
        } else if (speed > cityLimit + 40) {
            console.log("reckless driving");
        }
    } else if (area == "residential") {
        if (speed > residentalLimit && speed <= residentalLimit + 20) {
            console.log("speeding")
        } else if (speed > residentalLimit && speed <= residentalLimit + 40) {
            console.log("excessive speeding");
        } else if (speed > residentalLimit + 40) {
            console.log("reckless driving");
        }
    }
}