const colorPiker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPiker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelector('.news');

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
    colorPiker.addEventListener('input', (e)=>{
        const cor = e.target.value;
        body.backgroundColor = '#' +cor;
        localStorage.setItem('colorPicker', cor);
    })

});