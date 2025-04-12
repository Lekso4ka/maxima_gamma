import { 
    updCard, 
    createCard 
} from "./foo.js";

/*
    1) Создать объект с данными нашей книги
    2) Научиться добавлять его при помомщи JS в html
    3) Научиться изменять объект (открывать модалку и заполнить форму нужными данными)
    4) Научиться удалять карточку
    5) Добавить выгрузку информации с fakerapi
*/

/*
    localStorage / sessionStorage
        .getItem("text")
        .setItem("text", "что надо сохранить по ключу text")
        .removeItem("text")
*/

// const book = {
//     "title": "Hatter continued.",
//     "author": "Stephan Pfannerstill",
//     "genre": "Dignissimos",
//     "description": "Him, and ourselves, and it. Don't let me help to undo it!' 'I shall sit here,' the Footman remarked, 'till tomorrow--' At this moment Five, who had been (Before she had got its head impatiently, and.",
//     "isbn": "9785033591725",
//     "image": "http://placeimg.com/480/640/any"
// }

let library = localStorage.getItem("books");

if (!library) {
    library = []
} else {
    library = JSON.parse(library)
}
console.log(library)

const block = document.querySelector(".content");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector(".close");
const addBtn = document.querySelector("button.add");
const form = document.forms[0];

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})



library.forEach(book => {
    createCard(book, block, modal, library)
})

addBtn.addEventListener("click", () => {
    fetch("https://fakerapi.it/api/v2/books?_quantity=1")
        .then(res => res.json())
        .then(({data}) => {
            library.push(data[0])
            localStorage.setItem("books", JSON.stringify(library));
            createCard(data[0], block, modal, library);
        })
})


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const body = {}
    for (let i = 0; i < form.elements.length; i++) {
        const el = form.elements[i]
        if (el.name) {
            body[el.name] = el.value
        }
    }
    console.log(body)

    // o1 = {
    //     "name": "Igor",
    //     "age": 5,
    //     "pet": "dog" 
    // }
    // o2 = {
    //     prof: "devops",
    //     pet: "perrot"
    // }

    // o3 = {
    //     ...o1,
    //     ...o2
    // }

    // {
    //     "name": "Igor",
    //     "age": 5,
    //     prof: "devops",
    //     pet: "perrot"
    // }
    
    library = library.map((book, i) => {
        if (book.isbn === body.isbn) {
            book = {
                ...book,
                ...body
            }
            updCard(i, book, block, modal, library)
        }
        return book;
    })
    localStorage.setItem("books", JSON.stringify(library))
    for (let i = 0; i < form.elements.length; i++) {
        const el = form.elements[i]
        if (el.name) {
            el.value = ""
        }
    }
    modal.style.display = "none"

    /*
        1) надо заменить объект в library
        2) надо перерисовать карточку в html
    */
})