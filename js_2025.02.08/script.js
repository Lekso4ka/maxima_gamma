/*
    Цклы
    Circle - круг
*/

/*
    while (до тех пор, пока условие выполняется)
    while(условие) {
        код, которые работает до тех пор, пока условие истино
    }
*/

let n = 5;
while(n > 2) {
    console.log(`${n} больше 2`)
    n = n - 1;
}

let age = 0;

/*
    Каждый круг цикла - итерация (один такт)
    Переменная, на основе которой цикл изменяется - итератор
*/

while (age < 99) {
    age = age + 1;
    // console.log(`Вам ${age} лет`);
    if (age < 18) {
        // console.log("Вы - ребенок");
    } else if (age > 18) {
        // console.log("Вы больше не ребенок")
        if (age >= 65) {
            // console.log("Вы очень классно потрудились!")
        }
    }
}

/*
    ++ - инкремент (увеличение числа на 1 (число + 1))
    -- - декремент (уменьшение числа на 1 (число - 1))
    пост - после (a++)
    пре - перед (++a)
*/

let a = 22
// let b = a++; // a-23 b-22
// b = ++a; // a-23 b-23
b = a + 1; // a-22 b-23

/*
    a++
    ++a
    a += 1
    a = a + 1

    Все эти действия уваличивают число a на единицу
*/


let str = "Привет! "
let name = "Alexey!"
str += name;

// console.log(str + name);

console.log(str)

console.log("a:", a, "b:", b)

n = 10;

/*

    Преоразование с точке зрения Boolean

    true
        1
        -1
        0.234
        2e9
        "123"
        "111 sdfjhsdfjgh 1234"
        " "

    false
        0
        "" => Пустая строка!!!
        undefined
        null
*/

// while (n) {
//     console.log(n)
//     // n -= 3;
//     n--;
// } 
n = 0

do {
    // Делай действие
    console.log(`Сейчас n равно ${n--}`)
} while(n > 0) // проверка условия





