'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let text = document.querySelector('.text');
let navLinksCollection = document.querySelectorAll('.nav-link');
navLinksCollection.forEach(function (navLinkItem) {
    navLinkItem.addEventListener('click', clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.

    // если кликаем на уже активную вкладку, не выполняем обработку
    if (event.target.classList.contains('active')) {
        return;
    }
    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    let activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');
    event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let a = 0;
    switch (event.target.innerText.toLowerCase()) {
        case 'link 1':
            text.innerText = texts.text1;
            break;
        case 'link 2':
            text.innerText = texts.text2;
            break;
        case 'link 3':
            text.innerText = texts.text3;
            break;
    }
}