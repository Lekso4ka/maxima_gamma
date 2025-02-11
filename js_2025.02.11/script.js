/*
    Функции
*/

/*
let recipe = ""
recipe += "Взять сковороду, поставить ее на плиту, нагреть, смазать маслом. "
recipe += "Взять 2 яйца и разбить их в сковородку. "
recipe += "Добавить соль/перец по вкусу, накрыть сковородку крышкой. Подождать 5 минут. "
recipe += "Блюдо готово."
*/


/*
    function name() {
        //  все действия
    }
*/

function cookEggs(cnt = 2, meat = false, tomato = false, type="chicken") {
    let recipe = ""
    recipe += "Взять сковороду, поставить ее на плиту, нагреть, смазать маслом. "
    recipe += `Взять ${cnt} яйца и разбить их в сковородку. `
    if (meat) {
        recipe += "Добавить мясные продукты. "
    }
    if (tomato) {
        recipe += "Добавить помидорчиков. "
    }
    recipe += "Добавить соль/перец по вкусу, накрыть сковородку крышкой. Подождать 5 минут. "
    recipe += "Блюдо готово."
    console.log(recipe)
}

// cookEggs(2, false, true)
// cookEggs(1, true, true)
// cookEggs(4, true)

// cookEggs()

/*
function getNumber(max = 10) {
    let n = Math.floor(Math.random() * max)
    console.log(n)
}
    */


function getNumber(max = 11, min = 0) {
    // let digit = max - min
    // let random = Math.random() * digit + min
    // let n = Math.floor(random)

    let n = Math.floor(Math.random() * (max - min) + min)
    return n;
}

// let result = getNumber(10, 5)
// console.log(`Наше число - ${result}`)

// let str = `У Маши было ${result * 1000} руб.`
// console.log(str)


let question = getNumber(101)
let isPlaying = false; // поставьте true и играйте =)
let steps = 5;


function takeChance() {
    let answer = prompt("Угадайте число от 0 до 100 (вкл)")
    steps--;
    /*
        parseInt("") - преобразовывает строку в целое число
        parseFloat("") - преобразовывает строку в число c плавающей точкой (десятичное)
        isNaN(n) - возвращает true (если NaN) или false (если обычное число)
    */
    answer = parseInt(answer)
    if (isNaN(answer)) {
        console.log("Вы не хотите играть")
    } else {
        // Если число угадано - игра заканчивается
        if (answer === question) {
            console.log(`Вы угадали число ${question}`)
            isPlaying = false;
        } else {
            // Если число находится рядом с загаданным на 7 пунктов - пишем "Горячо"
            // Если число находится рядом с загаданным на 15 пунктов - пишем "Тепло"
            // Иначе - пишем "Холодно"
            // Math.abs() - число по модулю (всегда положительное)
            // |-3| = 3
            if (Math.abs(question - answer) <= 7) {
                console.log("Горячо!")
            } else if (Math.abs(question - answer) <= 15) {
                console.log("Тепло")
            } else {
                console.log("Холодно")
            }
        }
    }
}

while(isPlaying && steps > 0) {
    takeChance()
}

console.log("Game over")


/*
    Написать функцию formatNumber, которая принимает любое число и преобразовывает его в красивую строку с пробелами

    2000 => "2 000"

    Доп задание:
    Добавить аргумент с количеством знаков после запятой и доработать функцию

    Если 2 знака
    2000 => "2 000,00"

*/