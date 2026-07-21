const adminLogado = localStorage.getItem("adminLogado");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cargo = document.getElementById("cargo");

const btnVoltar = document.getElementById("voltar");
const btnSair = document.getElementById("sair");

if (adminLogado !== "true") {
    alert("Você não está logado.");
    window.location.href = "index.html";
}

nome.innerText = "João Pedro";
email.innerText = "admin@gmail.com";
cargo.innerText = "Administrador";

btnVoltar.addEventListener("click", () => {
    window.location.href = "dashboard.html";
});

btnSair.addEventListener("click", () => {
    const confirmar = confirm("Deseja realmente sair da conta?");

    if (!confirmar) {
        return;
    }

    localStorage.removeItem("adminLogado");
    window.location.href = "index.html";
});