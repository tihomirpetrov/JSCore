function solve() {
    let playerOneCards = document.getElementById("player1Div");
    let playerTwoCards = document.getElementById("player2Div");
    let resultArea = document.getElementById("result");
    let historyArea = document.getElementById("history");
    let currentPlayer1CardImg;
    let currentPlayer2CardImg;
    let resultFirstPlayer = resultArea.children[0];
    let resultSecondPlayer = resultArea.children[2];
    let isClickedFirstPlayer = false;
    let isClickedSecondPlayer = false;

    let keepHistory = "";

    let firstPlayer = -1;
    let secondPlayer = -1;

    for (let i = 0; i < playerOneCards.children.length; i++) {

        playerOneCards.children[i].addEventListener("click", () => {
            let firstPlayerCard = playerOneCards.children[i].getAttribute("name");
            currentPlayer1CardImg = playerOneCards.children[i];
            currentPlayer1CardImg.setAttribute("src", "images/whiteCard.jpg");
            firstPlayer = Number(firstPlayerCard);
            resultFirstPlayer.innerHTML = firstPlayer;
            isClickedFirstPlayer = true;
            checkGreater(firstPlayer, secondPlayer);
        });
    }

    for (let i = 0; i < playerTwoCards.children.length; i++) {

        playerTwoCards.children[i].addEventListener("click", () => {
            let secondPlayerCard = playerTwoCards.children[i].getAttribute("name");
            currentPlayer2CardImg = playerTwoCards.children[i];
            currentPlayer2CardImg.setAttribute("src", "images/whiteCard.jpg");
            secondPlayer = Number(secondPlayerCard);
            resultSecondPlayer.innerHTML = secondPlayer;
            isClickedSecondPlayer = true;
            checkGreater(firstPlayer, secondPlayer);
        });
    }

    function checkGreater(firstPlayer, secondPlayer) {

        let text = "";
        if (isClickedFirstPlayer && isClickedSecondPlayer && firstPlayer > -1 && secondPlayer > -1) {
            if (firstPlayer > secondPlayer) {
                currentPlayer1CardImg.setAttribute("style", "border: 2px solid green;");
                currentPlayer2CardImg.setAttribute("style", "border: 2px solid red;");
                keepHistory += `[${firstPlayer} vs ${secondPlayer}]`;

            } else if (secondPlayer > firstPlayer) {
                currentPlayer1CardImg.setAttribute("style", "border: 2px solid red;");
                currentPlayer2CardImg.setAttribute("style", "border: 2px solid green;");
                keepHistory += `[${firstPlayer} vs ${secondPlayer}]`;
            }
            let text = document.createTextNode(`[${firstPlayer} vs ${secondPlayer}] `);
            historyArea.appendChild(text);
            isClickedFirstPlayer = false;
            isClickedSecondPlayer = false;
        }
    }
}
