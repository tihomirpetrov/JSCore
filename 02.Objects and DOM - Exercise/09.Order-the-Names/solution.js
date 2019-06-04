function solve() {

    let inputField = document.getElementsByTagName("input");
    let addBtn = document.getElementsByTagName("button");
    let namesList = document.getElementsByTagName("li");

    addBtn[0].addEventListener("click", () => {
        let inputText = inputField[0].value.toLowerCase();
        let nameCapitalized = inputText.charAt(0).toUpperCase() + inputText.slice(1);
        let currentField = namesList[inputText[0].charCodeAt(0) - 97];

        if (currentField.textContent == "") {
            currentField.textContent = nameCapitalized;
        } else {
            currentField.textContent += `, ${nameCapitalized}`;
        }
        inputField[0].value = "";
    })
}
