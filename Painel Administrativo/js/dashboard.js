const adminLogado = localStorage.getItem("adminLogado")
const perfil = document.getElementById(`perfil`)
const produtos = document.getElementById(`produtos`)
const sair = document.getElementById(`sair`)
const mensagem = document.getElementById(`mensagem`)

if(!adminLogado === "false") {
    alert(`Nao esta Logado`)
    window.location.href = `index.html`
} else {
    mensagem.innerText = "Bem-vindo, Administrador!"

}

perfil.addEventListener(`click`, () => {
    window.location.href = `perfil.html`
})

produtos.addEventListener(`click`, () => {
    window.location.href = `produtos.html`
})

sair.addEventListener(`click`, () => {
    localStorage.removeItem(`adminLogado`)
    window.location.href = `index.html`
})

