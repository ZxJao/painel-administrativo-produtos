const adminLogado = localStorage.getItem("adminLogado")
const btnVoltar = document.getElementById("btnVoltar")

const form = document.getElementById("formP")

const nome = document.getElementById("nome")
const preco = document.getElementById("preco")
const categoria = document.getElementById("categoria")
const quantidade = document.getElementById("quantidade")
const mProdutos = document.getElementById(`produtos`)

if(adminLogado !== "true"){
    alert("Não está logado.");
    window.location.href = "index.html";
}

btnVoltar.addEventListener("click", () => {
    window.location.href = "dashboard.html"
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const nomeV = nome.value
    const precoV = Number(preco.value)
    const categoriaV = categoria.value
    const quantidadeV = Number(quantidade.value)
    if (
    nomeV.trim() === "" ||
    categoriaV.trim() === "" ||
    precoV <= 0 ||
    quantidadeV <= 0
    ) {
    alert("Preencha os campos corretamente.");
    return;
    }   
    const produto = {
        nome: nomeV,
        preco: precoV,
        categoria: categoriaV,
        quantidade: quantidadeV,
    }

    const pegarP = localStorage.getItem("produtos")

    let produtos = []

    if(pegarP) {
        produtos =  JSON.parse(pegarP)
    }
    const produtoExiste = produtos.some((p) => {
    return p.nome.toLowerCase() === nomeV.toLowerCase();
    });

    if(produtoExiste){
    alert("Esse produto já está cadastrado.");
    return;
    }
    produtos.push(produto)


    localStorage.setItem("produtos", JSON.stringify(produtos))

    mostrarProdutos();
    form.reset();
})

function mostrarProdutos() {
    
    const pProdutos = JSON.parse(localStorage.getItem("produtos"));
    if(!pProdutos || pProdutos.length === 0) {
        mProdutos.innerHTML = `<p>Nenhum Produto Cadastrado.</p>`
         return
    }
    mProdutos.innerHTML = ``
    pProdutos.forEach((produto, index) => {
    mProdutos.innerHTML +=  `  
     <div class="card-produto">
        <p><strong>Nome:</strong> ${produto.nome}</p>
        <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
        <button class="btn-excluir" onClick="excluirProduto(${index})"> Excluir </button>
    </div> 
    `
    })
    
}

function excluirProduto(index) {
    const taProdutos = JSON.parse(localStorage.getItem("produtos"));

    const confirmar = confirm(
        `Deseja excluir o produto "${taProdutos[index].nome}"?`
    );

    if (!confirmar) {
        return;
    }

    taProdutos.splice(index, 1);

    localStorage.setItem(
        "produtos",
        JSON.stringify(taProdutos)
    );

    mostrarProdutos();
}

mostrarProdutos()