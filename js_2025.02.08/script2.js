let digit = 0;
/*
    while (digit < 15) {
        console.log(digit)
        digit++;
    }
*/

/*
    for - для ( каждого условия )


    for (;;) {}
    for (выражение1;условие;выражение2) {}

    выражение1 - выполнится один  единственный раз до начала цикла (можно создать переменную итератор)

    внутри части с условием всегда должен быть логический ответ true / false

    выражение2 - выполняется после каждой итерации цикла (иинкремент/декремент)
*/

// for (;digit < 15;) {
//     console.log(digit)
//     digit++;
// }

for (digit = 12; digit <= 15; digit++) {
    console.log(digit)
}


const word = "Прокрастинация!"
console.log(word)

/*
    Методы для работы со строками
        .indexOf("буква") (любое положительное число от 0, иначе - -1)
        .charAt(порядковый номер буквы) (индекс)

        .length - сколько всего букв в строке
*/


console.log(word.charAt(0))
console.log(word.indexOf("t")) // -1
console.log(word.indexOf("т")) // 7
console.log(word.length)
console.log(word.charAt(15)) // null (такой буквы в строке нет)
console.log(word.charAt(word.length - 1)) // word.length - 1 - всегда последняя буква в строке!
console.log(word[word.length - 1]) // последний символ
console.log(word[0]) // первый символ
console.log(word[7]) // т

console.log("__________________");

// let i = 0;
// while(word[i]) {
//     console.log(word[i])
//     i++
// }

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }


for (let i = word.length - 1; i >= 0; i-=2) {
    // if (i % 3 == 0) {
        console.log(word[i]);
    // }
}

// console.log(i)


console.log(word.toLowerCase()); // приводит к нижнему регистру (маленькие символы)
console.log(word.toUpperCase()); // приводит к верхнему регистру (большие буквы)


/*
    Задача №1
    Васе 12 лет
    Каждый день рождения родители дарят Васе на 1000 руб больше, чем на прошлый (когда Васе исполнилось 13 лет - ему подарили 1000 руб)
    Какую сумму Василий накопит к 25 годам?


    Задача №2
    Написать цикл на нахождение палиндрома (заказ - это палиндром, заезд - не палиндром)
    Результат - фраза "Слово ' ' является палиндромом / Слово  ' ' не является палиндромом"
*/

