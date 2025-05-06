/*
1 - Seleciona e armazena os elementos DOM necessários
2 - Utiliza querySelector para seleção mais moderna
*/
const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticle = document.querySelectorAll('.news');


/*
    Carrega aspreferências do usuário armazenadas no localStorage
    @function loadPreferences
*/
const loadPreferences = () =>{

    // Cor
    const savedColor = localStorage.getItem('primaryColor');

    if(savedColor){

        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;

    }

    // Cor dos Artigos
    const savedArticleColor = localStorage.getItem('articleColor');
    if(savedArticleColor){

        newsArticle.forEach(article =>{

            article.style.backgroundColor = savedArticleColor;

        });

        articleColorPicker.value = savedArticleColor;

    }

    // Fonte
    const savedFont = localStorage.getItem('fontFamily');

    if(savedFont){

        document.documentElement.style.setProperty('--font-family', savedFont);

        fontSelect.value = savedFont;

    }

    // Tema
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark'){

        body.classList.add('dark');

        themeToggle.innerHTML = '<span class="material-icons">light_mode</span>';

    }

};

/*
 * 1 - Adiciona listeners de eventos para os controles de interface
 * 2 - @event input - Monitora mudanças no seletor de cor
 * 3 - @param {Event} e - Objeto de evento contendo o novo valor da cor
*/

colorPicker.addEventListener('input', (e) =>{

    const color = e.target.value;

    document.documentElement.style.setProperty('--primary-color', color);

    localStorage.setItem('primaryColor', color);

});

articleColorPicker.addEventListener('input', (e) =>{

    const color = e.target.value;

    newsArticle.forEach(article =>{

        article.style.backgroundColor = color;

    });

    localStorage.setItem('articleColor', color);

});

fontSelect.addEventListener('change', (e) =>{

    const font = e.target.value;

    document.documentElement.style.setProperty('--font-family', font);

    localStorage.setItem('fontFamily', font);

});

themeToggle.addEventListener('click', () =>{

    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');

    themeToggle.innerHTML = isDark
        ? '<span class="material-icons">light_mode</span>'
        : '<span class="material-icons">dark_mode</span>';
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

});


// Inicializa a aplicação carregando as preferências
loadPreferences();