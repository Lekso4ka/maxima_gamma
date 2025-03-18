// Promise

/*
    Обед:
        сын должен сходить в магазин за хлебом
        дочери необходимо порезать хлеб
*/  

const byeBread = function() {
    return "Хлеб куплен"
}
const cutBread = () => "Хлеб порезан"


byeBread() // одеться - сходить в магазин - найти хлеб - оплатить хлеб - вернуться с хлебом
cutBread()

// resolve - успешное выполнение задания
// reject - отказ (действие не было выполнено)

const brotherPromise = new Promise((resolve, reject) => {
    const v = Math.random()
    setTimeout(() => {
        if (v < 0.5) {
            reject("Хлеб не был куплен")
        } else {
            resolve(byeBread)
        }
    }, 1000)
})
const sisterPromise = new Promise((res, rej) => {
    const v = Math.random()
    setTimeout(() => {
        if (v < 0.3) {
            rej("Хлеб не был порезан")
        } else {
            res(cutBread)
        }
    }, 500)
})

// function() {
//     function() {
//         function() {
//             function() {
//                 function() {
                    
//                 }
//             }
//         }
//     }
// }

brotherPromise
    .then(ans => {
        console.log(ans())
        return sisterPromise
    })
    .then(sisAns => {
        console.log(sisAns())
    })
    // .then()
    // .then()
    .catch(err => console.log(err))

// AJAX - Async JavaScript & XML

/*
    После загрузки DOM из js посылается запрос на сервер, где есть БД с нужными ресурсами

    // 120 книг (мне нужна 105 или 3 стр)
    // 50 книг / стр
    // 101 - 120
*/

// fetch - отправить запрос на сервер для получения данных
// это асинхронный запрос, который возвращает Promise
// json - javascript object notation


// https://fakerapi.it/ - сервис для получения фейковых данных
fetch("https://fakerapi.it/api/v2/creditCards?_quantity=50&_locale=ru_RU")
    .then(result => {
        // return result.text()
        return result.json()
    })
    .then(data => {
        console.log(data)
    })



    // https://github.com/azat-io/you-dont-know-js-ru


