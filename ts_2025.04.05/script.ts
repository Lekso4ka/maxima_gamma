/*
    let n: any;
    let m = 8; // m - number

    let m2: number = 12
    let txt: string = "123"
    let flag: boolean;

    n = "ololo"
    n = 8;

    console.log(n);
*/

// Задача: посчитать сколько стоят яблоки (зная вес и количество яблок)

// 1) Создать дерево
// 2) Описать "модель яблока"
// 3) Отправить яблоко на дерево (повесить)
// 4) Повторить n раз
// 5) Соравть яблоко и положить в корзину
// 6) Посчитать цену корзины с яблоками

let d : number; // Диаметр яблока - до 10см от 3.5

// Объявление типа функции 
// () : void {}

/*
function getRandom(max: number, min: number = 0) : number {
    return Math.floor(Math.random() * (max - min) + min)
}
*/

type Point = {
    x: number,
    y: number
}

// type Basket = [string, number, string]
type Gender = "male" | "female" | "м" | "ж"

// const user : {
//     name: string,
//     g: Gender,
//     age: number
// } = {
//     name: "Oleg",
//     g: "муж",
//     age: 9
// }

const getRandom = (max: number, min: number = 0, isFloat: boolean = false) : number => {
    let rand : number = Math.random() * (max - min) + min;
    if (isFloat) {
        return parseFloat(rand.toFixed(2))
    }
    return Math.floor(rand);
} 

// d = getRandom(10, 3.5, true)

// const point = {
//     x: 234,
//     y: 156
// }


const createPoint = (): Point => {
    const x: number = getRandom(400)
    const y: number = getRandom(400)
    return ({x, y})
}

/*
    let age = 30

    let user = {
        name: "Dima",
        age: age
    }

    let user = {
        name: "Dima",
        age
    }
*/


// const tree = document.querySelector(".tree") as HTMLDivElement; 
const tree = document.querySelector(".tree")!; // ! - здесь точно не пустое значение

const treeCenter: Point = {
    x: 200,
    y: 200
}

const {height: treeH, bottom: treeBottom} = tree.getBoundingClientRect()


// const {x} = point
// console.log(x)

// const includesTree = ({x, y} : {x: number, y: number}) : boolean => {
const includesTree = ({x, y} : Point) : boolean => {
    // {x, y, weight, size}
    // (x - x0)^2 + (y - y0)^2 <= r^2
    const v1: number = (x - treeCenter.x) ** 2
    const v2: number = (y - treeCenter.y) ** 2
    const v3: number = 200 ** 2
    return v1 + v2 <= v3
}

const addApple = () : void => {
    // Animal -> Volf -> Dog
    // Object -> HTMLElement -> HTMLDivElement
    const apple: HTMLDivElement = document.createElement("div");
    apple.className = "apple";
    const d: number = getRandom(10, 4, true)
    const size : number = Math.round(d * 4)
    const point: Point = createPoint()
    /*
        4cm ? x
        10cm - 40px
        x = 4 * 40 / 10 
    */
    apple.style.width = `${size}px`
    apple.style.height = `${size}px`
    apple.style.top = `${point.y - Math.floor(size/2)}px`
    apple.style.left = `${point.x - Math.floor(size/2)}px`
    if (includesTree(point)) {
        tree.append(apple)
        apple.addEventListener("click", function(e: Event) : void {
            const {bottom} = this.getBoundingClientRect();
            const tr: number = treeBottom - bottom + 260;
            this.style.transform = `translate(0, ${tr}px)`
        }, {once: true})
    }
    
}

let cnt: number = 100;

while(cnt--) {
    addApple()
}





class Apple {
    // constructor(hor, ver) { // hor [0, 200]
    //     this.x = getRandom(hor[1], hor[0])
    // }
    x: number;
    y: number;
    size: number;
    weight: number;


    // [string, number, boolean, number]
    // [number] = [1]
    // [string] = ["one"]
    // number[] = [1,2,3,4,5]
    // string[] = ["1", "2"]
    // constructor(hor: number[], ver: number[]) { // hor [200, 0]
    constructor(hor: [number, number], ver: [number, number]) { // hor [200, 0]
        // Деструктуризация ...
        // [200, 0] => (200, 0) => ...hor
        this.x = getRandom(...hor)
        this.y = getRandom(...ver)
        this.size = getRandom(10, 4, true)
        this.weight = 0

        // 200 - 10
        // 314 / 200 = 1.55
        // s / w = 1.55
        // w = s / 1.55
    }
    getWeight(): void {
        const s: number = Math.PI * (this.size ** 2)
        this.weight = Math.round(s / 1.55)
    }
}

class AppleTree {
    fruitsCnt: number;
    fruits: Apple[] | [] | any;
    weight: number;
    harvestPrice: number;
    
    constructor() {
        this.fruitsCnt = getRandom(200, 50)
        this.fruits = []
        this.weight = 0;
        this.harvestPrice = 0
    }

    collectFruits(): void { // определить яблоки на дереве
        let cnt: number = this.fruitsCnt
        while(cnt--) {
            const apple: Apple = new Apple([400, 0], [400, 0])
            apple.getWeight()
            if (includesTree(apple)) {
                this.fruits?.push(apple)
            }
        }
    }
    harvest(price: number): void { // собрать урожай
        // 1kg => 269rub
        // 1kg === 1000g
        let fullWeight: number = 0;
        for (let i = 0; i < this.fruits.length; i++) {
            const fr: Apple = this.fruits[i];
            fullWeight += fr.weight;
        }
        this.weight = parseFloat((fullWeight / 1000).toFixed(2))
        this.harvestPrice = parseFloat((price * this.weight).toFixed(2))
    }

}

const tree2 = new AppleTree()
tree2.collectFruits()
tree2.harvest(100)
console.log("tree", tree2)

/*
    type Point =  {
        x: number,
        y: number
    }

    class Point {
        x: number;
        y: number;
        constructor() {
            this.x = 0;
            this.y = 0;
        }
    }

    interface Point {
        x: number,
        y: number
    }
*/


interface User  {
    name: string,
    age: number,
}

interface User  {
    gender: Gender
}

const person1: User = {
    name: "Oleg",
    age: 43,
    gender: "male"
}

var a = 0
let b = 0

var a = 1


for (let i = 0; i < 2; i++) {
    var a = i;
}

// this