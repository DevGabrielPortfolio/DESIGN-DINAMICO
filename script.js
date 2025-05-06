const colorPiker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPiker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelectorAll('.news');

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme);

    themeToggle.addEventListener('click', () => {

        const newtheme = document.body.classList.contains('light') ? 'dark' : 'light';

        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newtheme);
        localStorage.setItem('theme', newtheme);
    });




    const currentColor = localStorage.getItem('colorPicker');
    body.style.backgroundColor = currentColor;
    if(currentColor){
        body.style.backgroundColor = currentColor;
    }

    if(colorPiker){
        colorPiker.addEventListener('input', (e) =>{
            const cor = e.target.value;
            body.style.backgroundColor = cor;
            localStorage.setItem('colorPicker', cor);
        });
    }



    const currentArticleColor = localStorage.getItem('articleColor');
    newsArticles.forEach(article => {
        article.style.color = currentArticleColor;
    });

    if (articleColorPiker) {
        articleColorPiker.addEventListener('input', (e) => {
            const articleColor = e.target.value;
            newsArticles.forEach(article => {
                article.style.color = articleColor;
            });
            localStorage.setItem('articleColor', articleColor);
        });
    }



    const currentFont = localStorage.getItem('font') || 'Roboto';
    newsArticles.forEach(article => {
        article.style.fontFamily = currentFont;
    });
    if (fontSelect) {
        fontSelect.value = currentFont;
    }

    if (fontSelect) {
        fontSelect.addEventListener('change', (e) => {
            const selectedFont = e.target.value;
            newsArticles.forEach(article => {
                article.style.fontFamily = selectedFont;
            });
            localStorage.setItem('font', selectedFont);
        });
    }

});