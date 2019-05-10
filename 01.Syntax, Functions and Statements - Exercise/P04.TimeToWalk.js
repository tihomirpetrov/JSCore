function solve(steps, length, speed) {
    let numberOfSteps = steps;
    let lengthInKm = (length * steps) / 1000;
    let studentSpeed = speed;
    let time = (lengthInKm / studentSpeed);
    let rest = lengthInKm / 0.5;
    let hours = 0;
    let minutes = Math.floor(time * 60);
    let seconds = Math.round(((time * 60) - minutes) * 60);
    minutes = Math.floor(minutes + rest);
    console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`);
}
