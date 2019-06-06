function solve(arr) {

    let sum = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       switch (arr[i]) {
           case "add": result.push(i + sum); break;
           case "remove": result.pop(); break;
       }
    }
    
    if (result.length == 0){
        console.log("Empty");
    }
    else {
        console.log(result.join("\n"));
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']

);
