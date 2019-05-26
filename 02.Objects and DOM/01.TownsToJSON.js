function solve(towns) {
    var tokens = [];

    for (let town of towns.slice(1)) {

        let [empty, townName, latitude, longitude] = town.split(/\s*\|\s*/);

        let townObject = {
            Town: townName,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        tokens.push(townObject);
    }

    console.log(JSON.stringify(tokens));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
