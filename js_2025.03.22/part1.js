// let dog1 = {
//     name: "Sharik",
//     age: 2,
//     say: function() {
//         console.log("Woff")
//     }
// }
// let dog2 = {
//     name: "Murzik",
//     age: 5,
//     say: function() {
//         console.log("Woff")
//     }
// }
// let dog3 = {
//     name: "Milka",
//     age: 0,
//     say: function() {
//         console.log("Woff")
//     }
// }

class Dog {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    say() {
        console.log("Woff")
    }
    com(c) {
        console.log(`${this.name} выполняет команду ${c}`)
    }
}

let dog1 = new Dog("Sharik", 2)
let dog2 = new Dog("Murzik", 5)
let dog3 = new Dog("Milka", 0)



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    info() {
        return `Точка с координатами [${this.x};${this.y}]`
    }
}

const a = new Point(4, 8)


/*
    Animal
        - живут на суше
        - есть зубы и хвост
    Wolf
        - питаются мясом
        - умеют выть
        - вытянутая морда
    Dog
        - любит человека
        - виляет хвостом
    Корги
        - определенная порода
        - окрас
        - форма туловища
*/

/*
    extends - расширение (унаследование класса справа)
    super - конструктор родительского класса
*/

class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    info() {
        return `3D-точка с координатами [${this.x};${this.y};${this.z}]`
    }
}


const b = new Point3D(1, 1, 1);

class Star extends Point {
    constructor(x, y, sz, c = "yellow") {
        super(x, y)
        this.size = sz || 3
        this.color = c
    }
    draw(tag) {
        const el = document.createElement("div")
        // el.style = {
        //     width: `${this.size}px`,
        //     height: `${this.size}px`,
        //     position: "absolute",
        //     top: `${this.y - Math.floor(this.size / 2)}px`,
        //     left: `${this.x - Math.floor(this.size / 2)}px`,
        //     borderRadius: "50%",
        //     backgroundColor: "yellow"
        // }
        el.style.width = `${this.size}px`
        el.style.height = `${this.size}px`
        el.style.position = "absolute"
        el.style.top = `${this.y - Math.floor(this.size / 2)}px`
        el.style.left = `${this.x - Math.floor(this.size / 2)}px`
        el.style.borderRadius = "50%"
        el.style.backgroundColor = this.color
        tag.append(el)
    }
}

const board = document.querySelector(".win")


// const bounds = board.getBoundingClientRect();
const {height, width} = board.getBoundingClientRect();

let n = getNumber(1000, 100)

const sizes = [1, 1, 1, 3, 3, 3, 3, 5, 5, 7]
const colors = ["yellow", "yellow", "yellow", "orange", "orange", "pink", "cyan", "cyan", "cyan", "aquamarine", "goldenrood", "blueviolet"]

while(n--) {
    // const st = new Star(getNumber(width), getNumber(height))
    const st = new Star(
        getNumber(width), 
        getNumber(height), 
        sizes[getNumber(sizes.length)],
        colors[getNumber(colors.length)]
    )
    st.draw(board)
}


// function Point2(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
// }

// new Point2(1, 1)


// Point2.prototype.info = function() {

// }