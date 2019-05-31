function solve() {

    let targetDiv = document.getElementsByClassName("my-message")[0];
    let sendBtn = document.getElementById("send");
    let chatInput = document.getElementById("chat_input");
    let chatMsgArea = document.getElementById("chat_messages");

    sendBtn.addEventListener("click", function () {
        let targetDivClone = targetDiv.cloneNode(true);
        let chatInputText = chatInput.value;

        if (chatInputText !== "") {
            targetDivClone.textContent = chatInputText;
            chatMsgArea.appendChild(targetDivClone);

            chatInput.value = "";
        }
    });
}
