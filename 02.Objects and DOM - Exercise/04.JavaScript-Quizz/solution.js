function solve() {

    let quizPoints = 0;
    let counter = 0;
    let sections = Array.from(document.getElementsByTagName("section"));
    let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let leftBtns = Array.from(document.getElementsByClassName("quiz-answer low-value"));

    for (let i = 0; i < leftBtns.length; i++) {
        leftBtns[i].addEventListener('click', () => {
            if (leftBtns[i].children[0].children[0].textContent == correctAnswers[i]) {
                quizPoints++;
            }
            changeSection();
        })
    }

    let rightBtns = document.getElementsByClassName("quiz-answer high-value");
    for (let i = 0; i < rightBtns.length; i++) {
        rightBtns[i].addEventListener("click", () => {
            if (rightBtns[i].children[0].children[0].textContent == correctAnswers[i]) {
                quizPoints++;
            }
            changeSection();
        })
    }

    function changeSection() {
        let currentSection = sections[counter];
        currentSection.style.display = "none";
        if (counter < 2) {
            let newSection = sections[++counter];
            newSection.style.display = "block";
        } else {
            let result = document.querySelector('#results');
            if (quizPoints == 3) {
                result.children[0].children[0].textContent = 'You are recognized as top JavaScript fan!';
            }
            else{
                result.children[0].children[0].textContent = `You have ${quizPoints} right answers`;
            }

            result.style.display = "block";
        }
    }
}
