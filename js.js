/* const frutas = ["banana", "maçã", "uva", "goiaba"]

const images = ["../IMG/download.jpg", "../IMG/j.jpg"]

function Exibirvalores() {
    const itens = document.querySelector('.Lista')

     for (let i = 0; i < frutas.length; i++) {
         itens.innerHTML += `<li>${frutas[i]}
         <img src="${images[i]}"> 
         </li>`
     } 

    frutas.forEach((fruta) => {
        itens.innerHTML += `<li>${fruta}
        <img src="${images}">
        </li>`
    })
    images.forEach((image)=>{
         itens.innerHTML += `<li>
        <img src="${image}">
        </li>`
    })
}
Exibirvalores() */
const produtos = ["Café Expresso", "Cappuccino", "Chocolate Quente", "Bolo de Chocolate"]

const imagens = ["../IMG/cafe.jpg", "../IMG/capuccino.jpg", "../IMG/chocolote.jpg", "../IMG/BOLO.jpg"]

const precos = ["R$ 5,00", "R$ 8,00", "R$ 7,00", "R$ 6,00"]

const descricoes = [
    "Café forte e tradicional, servido em pequena quantidade.",
    "Café com leite cremoso e espuma deliciosa.",
    "Bebida quente feita com chocolate e leite.",
    "Bolo fofinho com cobertura de chocolate."
]

function Exibirvalores() {
    const lista = document.querySelector('.Lista')

    for (let i = 0; i < produtos.length; i++) {
        lista.innerHTML += `
        <li class="card">
            <h3>${produtos[i]}</h3>
            <img src="${imagens[i]}">
            <p>${descricoes[i]}</p>
            <strong>${precos[i]}</strong>
        </li>
        `
    }
}

Exibirvalores()