function solve(arr) {

    arr.sort(function(a, b){
        let nameA=a.toLowerCase(), nameB=b.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
    arr.sort((a, b) => a.length - b.length);

    console.log(arr.join("\n"));
}


solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);
