function escondeSenha(event){
    event.preventDefault()
    let myInput = document.getElementById("password")
    myInput.setAttribute("type", "password")

    let classe = document.querySelector(".light")
    classe.classList.remove("light")
    classe.classList.add("dark")
}