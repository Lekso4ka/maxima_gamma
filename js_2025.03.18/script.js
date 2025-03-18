const DB = "leksa"
const DEFAULT_TXT = "Об этом котике ничего не известно"
const DEFAUL_IMG = "./cat.png"

const wrapper = document.querySelector(".wrapper")
const addBtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal")
const addForm = document.forms[0];

function delCat(id, tag) {
    fetch(`https://cats.petiteweb.dev/api/single/${DB}/delete/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        tag.remove()
    })
}

function createCard(obj) {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
        <div class="pic">
            <img src=${obj.image ? obj.image : DEFAUL_IMG} alt="${obj.name}"/>
        </div>
        <div class="content">
            <h3>${obj.name}</h3>
            <p>${obj.description ? obj.description : DEFAULT_TXT}</p>
        </div>
    `
    const btn = document.createElement("button")
    btn.className = "btn";
    btn.innerText = "Удалить";
    btn.addEventListener("click", () => {
        delCat(obj.id, card)
    })
    card.append(btn);
    wrapper.append(card);
}


fetch(`https://cats.petiteweb.dev/api/single/${DB}/show`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            createCard(data[i]);
        }
    })


addBtn.addEventListener("click", function() {
    modal.style.display = "flex";
})
modal.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        this.style.display = "none";
    }
})

addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const body = {}
    for (let i = 0; i < this.elements.length; i++) {
        const el = this.elements[i];
        if (el.name) {
            body[el.name] = el.value;
        }
    }
    console.log(body);
    // JSON.stringify() - сдеалть из объекта или массива строку
    // JSON.parse() - сделать из строки объект
    fetch(`https://cats.petiteweb.dev/api/single/${DB}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.message !== "Кот успешно добавлен в Базу данных") {
                alert(data.message)
            } else {
                createCard(body)
                addForm.reset()
                modal.style.display = "none"
            }
        })
})