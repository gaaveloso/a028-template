function addElement(){
    const lista = document.getElementById("lista")

    const item0 = document.createElement("li")
    item0.innerHTML = "Item 0"
    lista.insertAdjacentElement('afterbegin', item0)

    const item5 = document.createElement("li")
    item5.innerHTML = "Item 5"
    lista.insertAdjacentElement('beforeend', item5)
}

addElement()