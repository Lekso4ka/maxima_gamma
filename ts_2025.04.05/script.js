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
var d; // Диаметр яблока - до 10см от 3.5
// const user : {
//     name: string,
//     g: Gender,
//     age: number
// } = {
//     name: "Oleg",
//     g: "муж",
//     age: 9
// }
var getRandom = function (max, min, isFloat) {
    if (min === void 0) { min = 0; }
    if (isFloat === void 0) { isFloat = false; }
    var rand = Math.random() * (max - min) + min;
    if (isFloat) {
        return parseFloat(rand.toFixed(2));
    }
    return Math.floor(rand);
};
// d = getRandom(10, 3.5, true)
// const point = {
//     x: 234,
//     y: 156
// }
var createPoint = function () {
    var x = getRandom(400);
    var y = getRandom(400);
    return ({ x: x, y: y });
};
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
var tree = document.querySelector(".tree"); // ! - здесь точно не пустое значение
var treeCenter = {
    x: 200,
    y: 200
};
var _a = tree.getBoundingClientRect(), treeH = _a.height, treeBottom = _a.bottom;
// const {x} = point
// console.log(x)
// const includesTree = ({x, y} : {x: number, y: number}) : boolean => {
var includesTree = function (_a) {
    var x = _a.x, y = _a.y;
    // {x, y, weight, size}
    // (x - x0)^2 + (y - y0)^2 <= r^2
    var v1 = Math.pow((x - treeCenter.x), 2);
    var v2 = Math.pow((y - treeCenter.y), 2);
    var v3 = Math.pow(200, 2);
    return v1 + v2 <= v3;
};
var addApple = function () {
    // Animal -> Volf -> Dog
    // Object -> HTMLElement -> HTMLDivElement
    var apple = document.createElement("div");
    apple.className = "apple";
    var d = getRandom(10, 4, true);
    var size = Math.round(d * 4);
    var point = createPoint();
    /*
        4cm ? x
        10cm - 40px
        x = 4 * 40 / 10
    */
    apple.style.width = "".concat(size, "px");
    apple.style.height = "".concat(size, "px");
    apple.style.top = "".concat(point.y - Math.floor(size / 2), "px");
    apple.style.left = "".concat(point.x - Math.floor(size / 2), "px");
    if (includesTree(point)) {
        tree.append(apple);
        apple.addEventListener("click", function (e) {
            var bottom = this.getBoundingClientRect().bottom;
            var tr = treeBottom - bottom + 260;
            this.style.transform = "translate(0, ".concat(tr, "px)");
        }, { once: true });
    }
};
var cnt = 100;
while (cnt--) {
    addApple();
}
var Apple = /** @class */ (function () {
    // [string, number, boolean, number]
    // [number] = [1]
    // [string] = ["one"]
    // number[] = [1,2,3,4,5]
    // string[] = ["1", "2"]
    // constructor(hor: number[], ver: number[]) { // hor [200, 0]
    function Apple(hor, ver) {
        // Деструктуризация ...
        // [200, 0] => (200, 0) => ...hor
        this.x = getRandom.apply(void 0, hor);
        this.y = getRandom.apply(void 0, ver);
        this.size = getRandom(10, 4, true);
        this.weight = 0;
        // 200 - 10
        // 314 / 200 = 1.55
        // s / w = 1.55
        // w = s / 1.55
    }
    Apple.prototype.getWeight = function () {
        var s = Math.PI * (Math.pow(this.size, 2));
        this.weight = Math.round(s / 1.55);
    };
    return Apple;
}());
var AppleTree = /** @class */ (function () {
    function AppleTree() {
        this.fruitsCnt = getRandom(200, 50);
        this.fruits = [];
        this.weight = 0;
        this.harvestPrice = 0;
    }
    AppleTree.prototype.collectFruits = function () {
        var _a;
        var cnt = this.fruitsCnt;
        while (cnt--) {
            var apple = new Apple([400, 0], [400, 0]);
            apple.getWeight();
            if (includesTree(apple)) {
                (_a = this.fruits) === null || _a === void 0 ? void 0 : _a.push(apple);
            }
        }
    };
    AppleTree.prototype.harvest = function (price) {
        // 1kg => 269rub
        // 1kg === 1000g
        var fullWeight = 0;
        for (var i = 0; i < this.fruits.length; i++) {
            var fr = this.fruits[i];
            fullWeight += fr.weight;
        }
        this.weight = parseFloat((fullWeight / 1000).toFixed(2));
        this.harvestPrice = parseFloat((price * this.weight).toFixed(2));
    };
    return AppleTree;
}());
var tree2 = new AppleTree();
tree2.collectFruits();
tree2.harvest(100);
console.log("tree", tree2);
var person1 = {
    name: "Oleg",
    age: 43,
    gender: "male"
};
var a = 0;
var b = 0;
var a = 1;
for (var i = 0; i < 2; i++) {
    var a = i;
}
// this
