const form = document.getElementById(`formLogin`)
const email = document.getElementById(`email`)
const senha = document.getElementById(`senha`)

const emailAdmin = "admin@gmail.com"
const senhaAdmin = "123456"

form.addEventListener(`submit`, function(event) {
    event.preventDefault();

    const emailValor = email.value
    const senhaValor = senha.value

    if(emailValor === emailAdmin && senhaValor === senhaAdmin) {
        localStorage.setItem(`adminLogado`, "true")
        
        alert(`Login Realizado `)
        window.location.href = `dashboard.html`
    } else {
        alert(`[ERRO] Senha ou email nao coincedem`)
    }
})