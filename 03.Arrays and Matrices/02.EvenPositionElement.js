function solve(arr) {

    let evenElements = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (i % 2 == 0){
            evenElements[i] = Number(arr[i]);
        }
    }
    console.log(evenElements.join(" "));
}

solve(['20', '30', '40']);
