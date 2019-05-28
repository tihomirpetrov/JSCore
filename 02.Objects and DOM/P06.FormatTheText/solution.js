function solve() {
    let paragraphToChange = document.getElementById('input');
    let paragraphContent = paragraphToChange.textContent;

    let allParagraphSentences = paragraphContent.toString().split('. ');
    let outputDiv = document.getElementById('output');

    for (let i = 0; i < allParagraphSentences.length; i += 3) {
        let createParagraphElement = document.createElement('p');
        createParagraphElement.textContent = allParagraphSentences[i] + '.';

        if (allParagraphSentences[i + 1] != null) {
            createParagraphElement.textContent += ' ' + allParagraphSentences[i + 1] + '.';
        }
        if (allParagraphSentences[i + 2] != null) {
            createParagraphElement.textContent += ' ' + allParagraphSentences[i + 2] + '.';
        }

        outputDiv.appendChild(createParagraphElement);
    }
}
