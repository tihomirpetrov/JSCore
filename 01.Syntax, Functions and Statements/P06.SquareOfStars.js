function solve(num) {

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            process.stdout.write('*');
            process.stdout.write(' ');
        }
        console.log();
    }
}