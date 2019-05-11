function solve(towns) {

    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, latitude, longitude] = town.split(/\s*\|\s*/);
        let townObj = {
            Town: townName,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}