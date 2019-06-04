function solve() {

    let getButtons = document.getElementsByTagName("button");
    let expressionField = document.getElementById("expressionOutput");
    let resultField = document.getElementById("resultOutput");

    for (let i = 0; i < getButtons.length; i++) {

        getButtons[i].addEventListener("click", (e)=>{
            let clickedBtn = getButtons[i].getAttribute("value");

            switch (clickedBtn) {
                case "+": expressionField.textContent += " + "; break;
                case "-": expressionField.textContent += " - "; break;
                case "*": expressionField.textContent += " * "; break;
                case "/": expressionField.textContent += " / "; break;
                case "Clear": expressionField.textContent = "";
                resultField.textContent = ""; break;
                case "=":
                    let textArr = expressionField.textContent.split(" ");
                    let leftValue = +textArr[0];
                    let operand = textArr[1];
                    let rightValue = +textArr[2];
                    let result;

                    switch (operand) {
                        case "+": result = leftValue + rightValue; break;
                        case "-": result = leftValue - rightValue; break;
                        case "*": result = leftValue * rightValue; break;
                        case "/": result = leftValue / rightValue; break;
                    }
                    if (rightValue == 0) {
                        resultField.textContent = "NaN"; break;
                    }
                    else {
                        resultField.textContent = result; break;
                    }
                    default: expressionField.textContent += clickedBtn; break;
            }
        })
    }
}
