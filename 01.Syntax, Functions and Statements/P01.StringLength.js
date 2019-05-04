function solve(arr1, arr2, arr3){
    let sumLength;
    let averageLength;

    let firstArrLength = arr1.length;
    let secondArrLength = arr2.length;
    let thirdArrLength = arr3.length;

    sumLength = arr1.length + arr2.length + arr3.length;
    averageLength = Math.round(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}