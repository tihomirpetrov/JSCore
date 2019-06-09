function spaceshipCrafting(titaniumCore, aluminumCore, magnesiumCore, carbonCore, lostCoresInPercent) {

    let inputs = document.getElementsByTagName("input");
    let titaniumCoreField = inputs[0].value;
    let aluminumCoreField = inputs[1].value;
    let magnesiumCoreField = inputs[2].value;
    let carbonCoreField = inputs[3].value;
    let lossesPercentField = inputs[4].value;

    let lost = +1 - Number(lossesPercentField / 400);

    let titanium = Math.round ((Number(titaniumCoreField) * lost) / Number(25)).toFixed(0);
    let aluminum = Math.round ((Number(aluminumCoreField) * lost) / Number(50)).toFixed(0);
    let magnesium = Math.round ((Number(magnesiumCoreField) * lost) / Number(75)).toFixed(0);
    let carbon = Math.round ((Number(carbonCoreField) * lost) / Number(100)).toFixed(0);

    let theUndefinedShip = 0;
    let nullMaster = 0;
    let JSONCrew = 0;
    let falseFleet = 0;

    while (true) {
        let isBuilt = false;
        if (titanium - 7 >= 0 && aluminum - 9 >= 0 && magnesium - 7 >= 0 && carbon - 7 >= 0) {
            titanium -= 7;
            aluminum -= 9;
            magnesium -= 7;
            carbon -= 7;
            theUndefinedShip++;
            isBuilt = true;
        }
        if (titanium - 5 >= 0 && aluminum - 7 >= 0 && magnesium - 7 >= 0 && carbon - 5 >= 0) {
            titanium -= 5;
            aluminum -= 7;
            magnesium -= 7;
            carbon -= 5;
            nullMaster++;
            isBuilt = true;
        }
        if (titanium - 3 >= 0 && aluminum - 5 >= 0 && magnesium - 5 >= 0 && carbon - 2 >= 0) {
            titanium -= 3;
            aluminum -= 5;
            magnesium -= 5;
            carbon -= 2;
            JSONCrew++;
            isBuilt = true;
        }
        if (titanium - 2 >= 0 && aluminum - 2 >= 0 && magnesium - 3 >= 0 && carbon - 1 >= 0) {
            titanium -= 2;
            aluminum -= 2;
            magnesium -= 3;
            carbon -= 1;
            falseFleet++;
            isBuilt = true;
        }
        if (!isBuilt) {
            break;
        }
    }
    let buildSpaceships = [];
    if (theUndefinedShip > 0) {
        let token = `${theUndefinedShip} THE-UNDEFINED-SHIP`;
        buildSpaceships.push(token);
    }
    if (nullMaster > 0) {
        let token = `${nullMaster} NULL-MASTER`;
        buildSpaceships.push(token);
    }
    if (JSONCrew > 0) {
        let token = `${JSONCrew} JSON-CREW`;
        buildSpaceships.push(token);
    }
    if (falseFleet > 0) {
        let token = `${falseFleet} FALSE-FLEET`;
        buildSpaceships.push(token);
    }
    let secondOutput = buildSpaceships.join(", ");
    let availableBars = `${titanium} titanium bars, ${aluminum} aluminum bars, ${magnesium} magnesium bars, ${carbon} carbon bars`;

    let outputFields = document.getElementsByTagName("p");
    outputFields[0].textContent = availableBars;
    outputFields[1].textContent = secondOutput;
}
