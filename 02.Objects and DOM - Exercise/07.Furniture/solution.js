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
            let rows = document.getElementsByTagName("tbody")[0];
            let row = rows.children[i];
            let newRow = row.cloneNode(true);
            rows.appendChild(newRow);
            newRow.children[0].children[0].setAttribute('src', furniture["img"]);
            newRow.children[1].textContent = furniture["name"];
            newRow.children[2].textContent = furniture["price"];
            newRow.children[3].textContent = furniture["decFactor"];
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
    //textsArea[1].disabled = false;

    buyBtn.addEventListener("click", () => {

        let names = [];
        let totalPrice = 0;
        let decFactor = 0;
        let tableRows = Array.from(document.getElementsByTagName("tr"));

        for (let i = 1; i < tableRows.length; i++) {
            let box = tableRows[i].children[4].children[0];
            if (box.checked == true) {
                names.push(tableRows[i].children[1].textContent);
                totalPrice += Number(tableRows[i].children[2].textContent);
                decFactor += Number(tableRows[i].children[3].textContent);
            }
        }
        buyBtn.disabled = true;
        buyArea.value += `Bought furniture: ${names.join(", ")}\n`;
        buyArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        buyArea.value += `Average decoration factor: ${(decFactor / names.length)}`
    })
}
