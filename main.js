'use strict'

let test = document.getElementById('one'); // нашли элемент по ид
console.log(test.innerText) // Вывод только видимого текста
console.log(test.textContent) // Вывод всего текста, включая скрытый
console.log(test.textContent.trim()) // Вывод всего текста, включая скрытый,обрезая лишнее слева и справа

let test2 = document.getElementsByTagName('p'); // Находим все элементы по данному тэгу
let test3 = document.querySelector('p');// Возвращает первое вхождение элемента
let test4 = document.querySelectorAll('.class-test'); // Возвращает список узлов элемента (nodeList). Указываем название тега или название класса с точкой перед названием
let test5 = document.querySelectorAll('p'); // Возвращает список узлов элемента (nodeList). Указываем название тега или название класса с точкой перед названием
let test6 = document.querySelectorAll('form[action="feedback"] input'); // Возвращает список узлов элемента (nodeList). Указываем название тега или название класса с точкой перед названием

// test6.forEach(function(input){ // обходим nodeList. в аргумент функции передается элемент nodeList
//      console.log(input.value);
// })

let test7 = document.querySelector('.test-span');
// console.log(test7.parentNode); // Выводим родительский узел 
// console.dir(test7.parentNode); // Выводмм как объект

let test8 = document.querySelectorAll('.wrap span'); // Вывели все элементы класса wrap c типом span
// console.dir(test8);

let test9 = document.querySelector('.wrap'); // Выводим первый элемент класса wrap c типом span
// console.dir(test9.childNodes);  // Выводим подчиненный nodelist узлы
// console.dir(test9.children);    // Выводим подчиненный HTML collection только тэги

