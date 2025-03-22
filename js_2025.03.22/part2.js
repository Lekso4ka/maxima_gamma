const block = document.querySelector(".cats");


// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         const card = document.createElement("div");
//         card.className = "card";
//         card.style.backgroundImage = `url(${data[0].url})`
        
//         block.append(card)
//         const {width} = card.getBoundingClientRect()
//         console.log(width)
//         /*
//             x   - 185
//             100 - 500

//             x = 185 * 100 / 500
//         */
//        card.style.height = `${data[0].height * ((width * 100) / data[0].width) / 100}px`
//     })


const arrOfFetches = [];

let cnt = 20;
function getImage() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
}

function createCard(obj) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${obj.url})`
    block.append(card)
    const {width} = card.getBoundingClientRect()
    card.style.height = `${obj.height * ((width * 100) / obj.width) / 100}px`
}

while (cnt--) {
    arrOfFetches.push(getImage())
}

Promise.all(arrOfFetches)
    .then(arr => {
        const cats = arr
            .filter(el => el[0].width > el[0].height)
            .map(item => {
                let obj = item[0]
                delete obj.id
                return obj;
            })
        // console.log(cats)
        cats.forEach(obj => {
            createCard(obj)
        })
    })



cnt = 100;
const nums = []

while(cnt--) {
    nums.push(getNumber(31))
}

console.log(nums)

/*
    .forEach - ничего не возвращают
    .sort

    .map - возвращает новый массив с измененными данными
    .filter - возвращает новый массив с отфильтрованными значениями
    
    .includes - включает ли в себя массив значение
    
    .reduce
*/

// nums.forEach(function(el, index) {
//     console.log(el, index)
// })


// console.log(nums.includes(300))

// nums.sort((elNext,elCurrent) => {})
nums.sort((a,b) => {
//    return a - b 
   if (a - b > 0) {
    return 1
   } else {
    return -1;
   }
})

const filteredNums = nums.filter((el) => el % 2 > 0)

const result = filteredNums.map((el, i) => `Число ${el} под номером ${i}`)
    


