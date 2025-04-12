class Apple {
    // constructor(hor, ver) { // hor [0, 200]
    //     this.x = getRandom(hor[1], hor[0])
    // }

    constructor(hor, ver) { // hor [200, 0]
        // Деструктуризация ...
        // [200, 0] => (200, 0) => ...hor
        this.x = getRandom(...hor)
        this.y = getRandom(...ver)
        this.size = getRandom(10, 4, true)

        // 200 - 10
        // 314 / 200 = 1.55
        // s / w = 1.55
        // w = s / 1.55
    }
    getWeight() {
        const s = Math.PI * (this.size ** 2)
        this.weight = Math.round(s / 1.55)
    }
}

class AppleTree {
    constructor() {
        this.fruitsCnt = getRandom(200, 50)
        this.fruits = []
    }

    collectFruits() { // определить яблоки на дереве
        let cnt = this.fruitsCnt
        while(cnt--) {
            const apple = new Apple([400, 0], [400, 0])
            apple.getWeight()
            if (includesTree(apple)) {
                this.fruits.push(apple)
            }
        }
    }
    harvest(price) { // собрать урожай
        // 1kg => 269rub
        // 1kg === 1000g
        let fullWeight = 0;
        for (let i = 0; i < this.fruits.length; i++) {
            const fr = this.fruits[i];
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