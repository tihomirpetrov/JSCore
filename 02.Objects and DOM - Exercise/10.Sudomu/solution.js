function solve() {
    let cells = document.getElementsByTagName("input");
    let quickCheck = document.getElementsByTagName("button")[0];
    let clear = document.getElementsByTagName("button")[1];
    let table = document.getElementsByTagName("table")[0];
    let outputText = document.getElementsByTagName("p")[0];

    quickCheck.addEventListener("click", () => {

        let hasRightNumbers = true;

        for (let i = 0; i < 3; i++) {
            if (Number(cells[i].value) + Number(cells[i + 3].value) + Number(cells[i + 6].value) != 6) {
                hasRightNumbers = false;
            }
            if (Number(cells[i * 3].value) + Number(cells[i * 3 + 1].value) + Number(cells[i * 3 + 2].value) != 6) {
                hasRightNumbers = false;
            }
        }

        if (hasRightNumbers){
            table.style.border = "2px solid green";
            outputText.style.color = "green";
            outputText.textContent = "You solve it! Congratulations!";
        }
        else {
            table.style.border = "2px solid red";
            outputText.style.color = "red";
            outputText.textContent = "NOP! You are not done yet...";
        }
    });

    clear.addEventListener("click", ()=>{
        for (let i = 0; i < cells.length; i++) {
            cells[i].value = "";
        }
        table.style.border = "";
        outputText.style.color = "";
        outputText.textContent = "";
    });
}
