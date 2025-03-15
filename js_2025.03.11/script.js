const faqTags = document.querySelectorAll(".question");

const sayHi = function(e) {
    e.currentTarget.innerText = "Hello!"
}

for (let i = 0; i < faqTags.length; i++) {
    const tg = faqTags[i];
    //tg.onclick = function() {
    //    this.style.borderColor = "red";
    //}
    //tg.addEventListener("click", sayHi)
    //tg.addEventListener("click", function () {
    //    this.style.borderColor = "red";
    //})
    //if (i % 2 === 0) {
    //    tg.removeEventListener("click", sayHi)
    //}
    tg.addEventListener("click", function () {
        //const str = this.className
        //if (str.includes("active")) {
        //    // split("") - метод, который разбивает строку на массив по заданным критериям
        //    this.className = str.split(" ").shift()
        //} else {
        //    this.className += " active"
        //}
        
        //console.log(this.classList) // список классов
        //console.log(this.classList.contains("active")) // есть ли класс у этого тега
        //if (this.classList.contains("active")) {
        //    this.classList.remove("active"); // убрать класс
        //} else {
        //    this.classList.add("active"); // добавить класс
        //}
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            this.nextElementSibling.style.maxHeight = `${this.scrollHeight}px`;
        } else {
            this.nextElementSibling.style.maxHeight = 0;
        }
        for (let j = 0; j < faqTags.length; j++) {
            if (i !== j) {
                //console.log(faqTags[j])
                if (this.classList.contains("active") && faqTags[j].classList.contains("active")) {
                    faqTags[j].classList.remove("active")
                    faqTags[j].nextElementSibling.style.maxHeight = 0;
                }
            }
        }
    })
}

// Получение формы


const form = document.forms.add_card

const uInp = form.elements.user
const digitInp = form.elements.digit
//console.log(document.body.children)
//console.log(form.children)
//console.log(form.elements.user)


uInp.addEventListener("change", (e) => {
    const tg = e.currentTarget;
    tg.value = tg.value.toUpperCase();
})

digitInp.addEventListener("input", function (e) {
    const start = this.value.split(" ")
    let str = start[start.length - 1]
    // "1111 2222 3333 4444"
    // ["1111", "2222", "3333", "4444"]
    if (str.length > 4) {
        start[start.length - 1] = str.slice(0, 4)
        start.push(str.slice(4))
    }
    //console.log(start)
    this.value = start.join(" ")
})


form.addEventListener("submit", function (e) {
    e.preventDefault(); // запрет на авто события (если у тега браузером было запланированно действие, тоо этот метод его отменяет)
    console.log("Hello!")
    const data = {}
    for (let i = 0; i < form.elements.length; i++) {
        const el = form.elements[i];
        const name = el.name
        if (name) {
            if (el.type === "radio" && el.checked) {
                data[name] = el.value
            } else if (el.type !== "radio") {
                data[name] = el.value
            }
        }
    }
    console.log(data)
})