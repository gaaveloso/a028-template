function addElement() {
    let input = document.getElementById("meu-input")
    
    let item = document.createElement("li") 
    item.innerHTML = input.value
    
    let lista = document.getElementById("lista")

    lista.insertAdjacentElement("afterbegin", item)
    input.value = ""
}

// function addElement() {
//     let input = document.getElementById("meu-input")
//     let lista = document.getElementById("lista")
//     lista.innerHTML += `<li>${input.value}</li>`
//     input.value = ''
// }