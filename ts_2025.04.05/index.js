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
