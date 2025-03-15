/*
    {}
    Массивы - Array
    Массив - упорядоченная последовательность значений (любых)
    [] - пустой массив
*/

let fruits = [
    "банан",
    "яблоко",
    "апельсин"
]

let bag = ["House", "flower", 3, true, null, "123"]

let word = "apple"
console.log(word[0])
console.log(bag[3])

bag[10] = word;
console.log(bag[6])

/*
    Методы массивов
    .push(el) - добавить в конец массива
    .pop() - изъять элемент из конца массива (и получить значение изъятого элемента)
    .unshift(el) - добавить элемент в начало массива
    .shift() - изъять первый элемент из массива
    .length - количество элементов в массиве
*/
fruits.push("дыня")
fruits.push("виноград")
let fr = fruits.shift()
fruits.unshift(fruits.pop())
// fr = fruits.pop()
// fr = fruits.pop()
// fr = акгшfruits.pop()

console.log(fruits, fr)

/*
    Стек - LIFO last in first out (push + pop)
    Очередь - FIFO first in first out (push + shift)
*/

/*
    Найти сумму всех чисел в массиве
*/

// Создаем массив со случайными числами (100) от 0 до 99
let n = 100000000;
let nums = [];
while(n--) {
    nums.push(getNumber(100))
}
// console.log(nums)

let sum = 0; 
// Пройтись циклом по массиву

// цикл for / while
console.time("for")
for (let i = 0; i < nums.length; i++) { 
    sum += nums[i]; 
}
console.log(sum)
console.timeEnd("for")

// цикл for in - для объектов - !!!!!!! Плохо использовать для работы с массивами
sum = 0;
console.time("for-in")
// for (let k in nums) {
//     sum += nums[k]
// }
console.log(sum)
console.timeEnd("for-in")

// цикл for of - для массивов!!!
sum = 0;
console.time("for-of")
for (let val of nums) {
    sum += val;
}
console.log(sum)
console.timeEnd("for-of")