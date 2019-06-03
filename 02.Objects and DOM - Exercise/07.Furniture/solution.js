function solve() {
    let textsArea = Array.from(document.getElementsByTagName("textarea"));
    let listArea = textsArea[0].textContent;

    let generateBtn = document.getElementsByTagName("button")[0];
    let furnitureList = {};
    let checkBox = document.getElementsByTagName("input")[0];
    checkBox.disabled = false;

    generateBtn.addEventListener("click", () => {

        let input = textsArea[0].value;
        furnitureList = JSON.parse(input);

        for (let i = 0; i < furnitureList.length; i++) {

            let furniture = furnitureList[i];
            let table = document.getElementsByTagName("table")[0];
            let newRow = table.insertRow();

            let cell1 = newRow.insertCell();
            let img = document.createElement("img");
            img.setAttribute('src', furniture["img"]);
            cell1.appendChild(img);

            let cell2 = newRow.insertCell();
            let name = document.createElement("p");
            name.textContent = furniture["name"];
            cell2.appendChild(name);

            let cell3 = newRow.insertCell();
            let price = document.createElement("p");
            price.textContent = furniture["price"];
            cell3.appendChild(price);

            let cell4 = newRow.insertCell();
            let decFactor = document.createElement("p");
            decFactor.textContent = furniture["decFactor"];
            cell4.appendChild(decFactor);

            let cell5 = newRow.insertCell();
            let checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            cell5.appendChild(checkBox);
        }
        generateBtn.disabled = true;
    });

    let checkBoxes = Array.from(document.getElementsByTagName("input"));
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener("click", () => {
            checkBoxes[i].checked;
        })
    }

    let buyArea = textsArea[1];
    let buyBtn = document.getElementsByTagName("button")[1];

    buyBtn.addEventListener("click", () => {

        let names = [];
        let totalPrice = 0;
        let decFactor = 0;
        let tableRows = Array.from(document.getElementsByTagName("tr"));

        for (let i = 1; i < tableRows.length; i++) {
            let box = tableRows[i].children[4].children[0];
            if (box.checked == true) {
                names.push(tableRows[i].children[1].children[0].textContent);
                totalPrice += Number(tableRows[i].children[2].children[0].textContent);
                decFactor += Number(tableRows[i].children[3].children[0].textContent);
            }
        }
        buyBtn.disabled = true;
        buyArea.value += `Bought furniture: ${names.join(", ")}\n`;
        buyArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        buyArea.value += `Average decoration factor: ${(decFactor / names.length)}`
    })
}
