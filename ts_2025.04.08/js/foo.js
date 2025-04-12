const updCard = (index, obj, block, modal, library) => {
    const card = document.createElement("div");
    card.className = "card";

    const pic = document.createElement("div");
    pic.className = "pic";
    if (obj.image) {
        pic.style.backgroundImage = `url(${obj.image})`
    }

    const info = document.createElement("div");
    info.className = "info";

    const txt = obj.description.length <= 50 ? obj.description : obj.description.slice(0,50) + "..."

    info.innerHTML = `
        <h3>${obj.title}</h3>
        <h4>${obj.author}</h4>
        <p>${txt}</p>
        <div class="bottom">
            <span>${obj.isbn}</span>
            <span>${obj.genre}</span>
        </div>
    `

    const del = document.createElement("button");
    del.innerText = "del";

    del.addEventListener("click", () => {
        library = library.filter((el) => el.isbn !== obj.isbn)
        localStorage.setItem("books", JSON.stringify(library))
        card.remove();
    })
    const upd = document.createElement("button");
    upd.innerText = "upd";
    upd.addEventListener("click", () => {
        modal.style.display = "flex";
        for (let i = 0; i < form.elements.length; i++) {
            const el = form.elements[i]
            if (el.name && obj[el.name]) {
                el.value = obj[el.name]
            }
        }
    })
    card.append(pic, info)

    info.lastElementChild.append(del, upd);
    
    const first = block.children[index];
    block.insertBefore(card, first);
    first.remove()
}

const createCard = (obj, block, modal, library) => {
    const card = document.createElement("div");
    card.className = "card";

    const pic = document.createElement("div");
    pic.className = "pic";
    if (obj.image) {
        pic.style.backgroundImage = `url(${obj.image})`
    }

    const info = document.createElement("div");
    info.className = "info";

    const txt = obj.description.length <= 50 ? obj.description : obj.description.slice(0,50) + "..."

    info.innerHTML = `
        <h3>${obj.title}</h3>
        <h4>${obj.author}</h4>
        <p>${txt}</p>
        <div class="bottom">
            <span>${obj.isbn}</span>
            <span>${obj.genre}</span>
        </div>
    `

    const del = document.createElement("button");
    del.innerText = "del";

    del.addEventListener("click", () => {
        library = library.filter((el) => el.isbn !== obj.isbn)
        localStorage.setItem("books", JSON.stringify(library))
        card.remove();
    })
    const upd = document.createElement("button");
    upd.innerText = "upd";
    upd.addEventListener("click", () => {
        modal.style.display = "flex";
        for (let i = 0; i < form.elements.length; i++) {
            const el = form.elements[i]
            if (el.name && obj[el.name]) {
                el.value = obj[el.name]
            }
        }
    })
    card.append(pic, info)

    info.lastElementChild.append(del, upd);
    block.append(card)
}

export { updCard, createCard }