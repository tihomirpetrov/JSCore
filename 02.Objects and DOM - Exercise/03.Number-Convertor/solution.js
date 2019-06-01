function solve() {
    let inputField = document.getElementById("input");
    let convertBtn = document.getElementsByTagName("button")[0];
    let resultField = document.getElementById("result");
    let convertField = document.getElementById("selectMenuTo");

    let binaryOption = document.createElement('option');
    binaryOption.setAttribute('value', 'binary')
    let binary = document.createTextNode("Binary");
    binaryOption.appendChild(binary);
    convertField.appendChild(binaryOption);

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.setAttribute('value', 'hexadecimal');
    let hexadecimal = document.createTextNode("Hexadecimal");
    hexadecimalOption.appendChild(hexadecimal);
    convertField.appendChild(hexadecimalOption);

    convertBtn.addEventListener("click", () => {
        let number = inputField.value;

        if (convertField.value == "binary") {
            number = (+number).toString(2);
        } else if (convertField.value == "hexadecimal") {
            number = (+number).toString(16).toUpperCase();
        }
        resultField.value = number;

        inputField.value = "";
    })
}
