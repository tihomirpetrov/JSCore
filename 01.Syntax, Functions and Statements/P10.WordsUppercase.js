function solve(words) {
    let wordsUppercase = '';

    for (let i = 0, l = words.length; i < l; i++) {

        if (words[i] == "," || words[i] == "!" || words[i] == "?") {
            wordsUppercase += '';
        } else if (words[i] == " " || words[i] == ".") {
            wordsUppercase += ', ';
        } else {
            wordsUppercase += words[i].toUpperCase();
        }
    }

    console.log(wordsUppercase);
}

solve('Hi, how are you?');