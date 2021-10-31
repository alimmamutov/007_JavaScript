'use strict';

var obj = {
    name: 'Hello',
    age: 45,
    func(){
        console.log(this);
    }
};

// ********* es5 ***************
// СОЗДАНИЕ КОНСТРУКТОРА
// Конструктор автоматически создает объект
// Имя конструктора пишется с большой буквы (соглашение)
// Работает без ключеавого слова return (делает это сам)
function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

// СОЗДАНИЕ ПРОТОТИПА
// Позволяет хранить общие свойства для всех объектов этого прототипа
// Назначать общие методы работы с прототипом

let arg = {
    money: 100
} // Создали объект для прототипа

// назначим объекту User прототип arg
// (Теперь у всех объектов типа User будет свойство money)
//User.prototype = arg;

// Вызовем создание объекта через конструктор в  массиве
// let data = [
//     new User('Артем', 27, 'Белград'),
//     new User('Антон', 29, 'Грозный'),
//     new User('Петя', 32, 'Москва')
// ]

// console.log(data);

// console.log(data[0]) // Выведем первый объект массива


// можно было сделать то же самое без создания arg
User.prototype.money2 = 150; // Можем добавить в прототип свойство
User.prototype.say = function(){ // Можем добавить в прототип метод
    console.log(this.name);
}


// Вызовем создание объекта через конструктор в  массиве заново
let data = [
    new User('Артем', 27, 'Белград'),
    new User('Антон', 29, 'Грозный'),
    new User('Петя', 32, 'Москва')
];

console.log(data);

console.log(data[0]) // Выведем первый объект массива

// использование функции вне прототипа

function sayName(){ // это не конструктор - это обычная функция
    console.log(this.name); // обратить внимание, что объект для this неопределен
}

let user1 = new User('Артем', 27, 'Белград');

sayName.call(user1); // метод call у функции определяет какой объект мы будем использовать для this


// --------- без наследования :
// function UserRole(){
//     this.right = ['create', 'edit'];
// }
// function ModerRole(){
//     this.right = ['create', 'edit', 'delete'];
// }
// function AdminRole(){
//     this.right = ['create', 'edit', 'delete', ' ban'];
// }

// ---------- с наследованием
function UserRole(){
    this.right = ['create', 'edit'];
}
function ModerRole(){
    UserRole.call(this); // запустили конструктор для юзера внутри, указав объектом модератора
    this.right.push('delete'); // добавляем права модератору 
}
function AdminRole(){
    ModerRole.call(this); // запустили конструктор для модератора внутри, указав объектом админа
    this.right.push('ban'); // добавляем права модератору 
}

let user = new UserRole();
let moder = new ModerRole();


// *************** ES 6 *****************
//объявление класса
class Person {
    // объявление конструктора
    constructor (name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // объявление метода класса
    sayName(){
        console.log(this.name);
    }
    sayGender(){
        console.log(this.gender);
    }
}

let userPerson = new Person('Alim', 28, 'M');

console.log(userPerson);

// Наследование класса
class Personal extends Person{
    constructor (name, age, gender, work) {
        super(name, age, gender); // вызываем конструктор из родителя
        this.work = 'work'; // добавляем свойств , присущее только этому классу
    }

    sayWork(){ // Добавляем метод данного класса
        console.log(this.work);
    }
}

let userPersonal = new Personal('Alim', 28, 'M', 'Programmer');
console.log(userPersonal);