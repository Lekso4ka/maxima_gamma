/*
    Посчитать выручку кафе за год!

    Дано:
        напитки - капучино (180), эспрессо (100), лате (200), американо (150), чай (80)
        количество пользователей в кафе в день составляет от 30 до 200
*/

let menu = [
    {name: "капучино", price: 180},
    {name: "эспрессо", price: 100},
    {name: "лате", price: 200},
    {name: "американо", price: 150},
    {name: "чай", price: 80}
]

// Посчитать выручку за день
function daily(n = 1) {
    let usersCnt = getNumber(201, 30)
    // console.log(usersCnt)

    let dayLog = ""
    let daySum = 0;

    for (let i = 0; i < usersCnt; i++) {
        let drinkIndex = getNumber(menu.length)
        let drink = menu[drinkIndex];
        daySum += drink.price;
        // dayLog += `Посетитель №${i + 1} выбрал напиток ${drink.name} стоимостью ${drink.price} руб. В кассе ${daySum} руб.\n`
    }

    dayLog = `За день №${n} пришло ${usersCnt} человек. Выручка составила ${daySum} руб.`
    // console.log(dayLog)
    return daySum;
}


// Посчитать выручку за месяц

// i -> j -> k

const names = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const money = []


let yearSum = 0;
for (let i = 0; i < 12; i++) {
    let monthSum = 0
    for (let j = 1; j <= days[i]; j++) {
        monthSum += daily(j)
    }
    money.push(monthSum)
    console.log(`За ${names[i]} было заработанно ${monthSum} руб. за ${days[i]} дней `)
    yearSum += monthSum;
}

console.log(`За год заработанно ${yearSum} руб`)
console.log(money);