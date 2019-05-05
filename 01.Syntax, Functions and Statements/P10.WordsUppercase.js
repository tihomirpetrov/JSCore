function solve(words) {
    let wordsUppercase = words.toUpperCase().split(/\W+/).filter(x => x !== '');

    console.log(wordsUppercase.join(', '));
}