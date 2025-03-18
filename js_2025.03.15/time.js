// let updTime = function() {
//     ...
// }

document.body.style.backgroundColor = getColor();
const tag = document.querySelector(".result");


let n = 0;
// let intervalId = setInterval(function() {
//     console.log(`${++n} intervals`)
//     document.body.style.backgroundColor = getColor();
// }, 2000);
updTime();

let intervalId = setTimeout(function() {
    console.log(`${++n} intervals`)
    document.body.style.backgroundColor = getColor();
}, 20000);

document.body.addEventListener("click", function() {
    console.log("click")
    // clearInterval(intervalId)
    clearTimeout(intervalId)
})

function updTime() {
    const today = new Date();
    tag.innerHTML = `
    <span>${today.getHours()}</span>
    <span>:</span>
    <span>${today.getMinutes()}</span>
    <span>:</span>
    <span>${today.getSeconds()}</span>
`
}

// setInterval(function() {
//     updTime()
// }, 1000)



// date - дата
// data - данные
// const today = new Date();

// const newYearDate = new Date("01.01.2021");
// const newYearDate = new Date("2021-10-25");
// const newYearDate = new Date("2021-10-25Z10:12:4");
const newYearDate = new Date(1999, 9, 8, 12, 78, 320, 900);


const monthNames = ["ЯНВ","ФЕВ","МАР","АПР","МАЙ","ИЮН","ИЮЛ","АВГ","СЕН","ОКТ","НОЯ","ДЕК"]
const weekDays = ["Вс","Пон","Вт","Ср","Чт","Пт","Сб"]
/*
    today.getTime() - мс с самого начала отсчета времени по Linux
    today.getHours()
    today.getMinutes()
    today.getSeconds()

    today.getMonth() - начало с 0 (0-11)
    today.getFullYear() - 2025
    today.getDate() - день месяца (1-31/30/28/29)
    today.getDay() - день недели (0 - 6) 0 - вс
*/

// console.log(monthNames[today.getMonth()]);
// console.log(newYearDate);
// console.log(weekDays[newYearDate.getDay()]);

// LIFO - стек
// События и отложенные функции:
// SetTimeout
// SetInterval
// DOM event