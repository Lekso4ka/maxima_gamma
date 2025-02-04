/*
    undefined - отсутствие данных
    null - отсутсвие значения, которое планирется быть!

    Boolean - булевый (логический) тип данных
        true - истина (правда)
        false - ложь
        операторы сравнения
            >
            <
            >= - больше или равно
            <=

            !!!!   == - равно
            !!!!   != - не равно
            === - строгое равенство (сначала проверяется равенство типов данных, а затем - значение)
            !== - строгое неравенство

*/

let user;
console.log(user);

let userAge;
userAge = null;

// console.log(dog);

let userAge1 = 30, userAge2 = 13;

// console.log(userAge1 != userAge2)
// console.log("13" === userAge2)

// console.log("Abc" < "b")
// console.log( 65 < 98)
// console.log(34 < "A") // false
// console.log("34" < "A") // true => 3 - #51, A - #65

/*
    Логические операторы
        ! - логическое отрицание (НЕ)
        || - логическое сложение (ИЛИ)
        && - логическое умножение (И)


*/

// console.log(!(5 > 6)) // true

/*
    a - на улице хорошая погода
    b - у меня есть зонт
    result - я хочу пойти гулять

    1 - true
    0 - false

        a   b
        0   0   false   0 + 0 = 0
        0   1   true    0 + 1 = 1
        1   0   true    1 + 0 = 1
        1   1   true    1 + 1 = !0

*/

/*
    Логическое умножение

    a - у меня есть ложка
    b - у меня есть суп
    result - я хочу кушать суп

        a   b
        0   0 => 0   0 * 0 = 0
        1   0 => 0   1 * 0 = 0
        0   1 => 0   0 * 1 = 0
        1   1 => 1   1 * 1 = 1

*/

// ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true) => true

/*
    Math
        .PI
        .E
        .sin() / .cos()
        .random() - 0 <= x < 1
*/

let n = 9.456
// console.log(Math.round(n))
// console.log(Math.ceil(n)) /* округление в большую сторону */
// console.log(Math.floor(n)) /* округление в меньшую сторону */

/*
    Получить случйное целое число в диапазоне от 0 до 100
*/
n = Math.random() * 100;
// console.log(n) // не целое число 0 <= x < 100
// console.log(Math.round(n))  // целое число 0 <= x <= 100
// console.log(Math.ceil(n))  // целое число 0 < x <= 100
// console.log(Math.floor(n))  // целое число 0 <= x < 100

let rand = Math.floor(Math.random() * 100) // любое число в диапазоне от 0 (вкл) до 100 (не вкл)

/*
    Условия!!!!
    if - если
*/
userAge = 28;
// if (userAge < 18) {
//     console.log("Мой юный друг, тебе еще рано идти на работу!")
// } else {
//     console.log("Ты почему еще не на работе???")
// }

// console.log("Конец условия 1")


// if (userAge < 18 || userAge >= 65) {
//     console.log("Вы не работаете")
// } else {
//     console.log("Вы трудоспособный человек")
// }


// if (userAge >= 18 && userAge < 65) {
//     console.log("Вы работаете")
// } else {
//     console.log("Вы на чиле")
// }

userAge = rand + 10;

// if (userAge < 18) {
//     console.log("Дитя")
// } else if (userAge >= 18 && userAge <= 30) {
//     console.log("Лучший возраст на свете")
// } else if (userAge < 65) {
//     console.log("Ваша жизнь только начинается!")
// } else if (userAge <= 75) {
//     console.log("Когда еще отдыхать на Мальдивах???")
// } else {
//     console.log("Так держать!!!")
// }

// console.log(userAge);

let quest = Math.ceil(Math.random() * 10); 
let answer = 2;//prompt("Угадайте число от 1 до 10")
console.log(quest, answer);

// if (answer == quest) {
//     alert("Вы угадали!")
// } else {
//     alert("Увы, это было число " + quest)
// }

user = "Vasya"
let userMessage = "Привет!!! ^_^"

console.log(user)
console.log(userAge)
console.log(userMessage)

let phrase = "Пользователя зовут " + user + ", ему " + userAge + " лет и он говорит: \"" + userMessage + "\"."

phrase = `Пользователя зовут user, ему userAge лет и он говорит: "userMessage"`
phrase = `Пользователя зовут ${user}, ему ${userAge - 100} лет и он говорит: "${userMessage}"`

console.log(phrase)


// Правильно написать фразу
// В тарелке лежало n конфет
// n - случайное число  (0 <= n <= 100)


// Научиться получать случайное число в диапазоне от a до b (5 - 20)

