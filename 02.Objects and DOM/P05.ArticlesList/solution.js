function createArticle() {

    let createTitleElement = document.getElementById('createTitle');
    let createTitleValue = createTitleElement.value;

    let createTextElement = document.getElementById('createContent');
    let createTextValue = createTextElement.value;

    if (createTitleValue && createTextValue) {
        let titleElement = document.createElement('h3');
        titleElement.textContent = createTitleValue;

        let textElement = document.createElement('p');
        textElement.textContent = createTextValue;

        let articleElement = document.createElement('article');
        articleElement.appendChild(titleElement);
        articleElement.appendChild(textElement);

        let articlesElement = document.getElementById('articles');
        articlesElement.appendChild(articleElement);

        createTitleElement.value = '';
        createTextElement.value = '';
    }
}
