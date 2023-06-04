let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
];

function criarCards() {
    const itensSection = document.getElementById('itens_section');
    itensSection.innerHTML = '';

    ITENS_LOJA.forEach((item, i) => {
        const card = `
            <div class="card">
                <img src="${item.url_img}">
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                <p>${item.descricao}</p>
                <button onclick="favoritarProduto(${i})">Favoritar</button>
                <button onclick="excluirProduto(${i})">Excluir</button>
            </div>
        `;
        itensSection.insertAdjacentHTML('beforeend', card);
    });

    const cardAdicionar = `
        <div class="card">
            <input type="text" id="nome-input" placeholder="Nome do produto">
            <input type="text" id="imagem-input" placeholder="URL da imagem">
            <input type="number" id="preco-input" placeholder="Preço do produto">
            <textarea id="descricao-input" placeholder="Descrição do produto"></textarea>
            <button onclick="adicionarProduto()">Adicionar</button>
        </div>
    `;
    itensSection.insertAdjacentHTML('beforeend', cardAdicionar);
}

function adicionarProduto() {
    const nomeInput = document.getElementById('nome-input');
    const imagemInput = document.getElementById('imagem-input');
    const precoInput = document.getElementById('preco-input');
    const descricaoInput = document.getElementById('descricao-input');

    const novoProdutoNome = nomeInput.value;
    const novoProdutoImagem = imagemInput.value;
    const novoProdutoPreco = parseFloat(precoInput.value);
    const novoProdutoDescricao = descricaoInput.value;

    const novoProduto = {
        nome: novoProdutoNome,
        preco: novoProdutoPreco,
        url_img: novoProdutoImagem,
        descricao: novoProdutoDescricao
    };

    ITENS_LOJA.unshift(novoProduto);
    criarCards();

    nomeInput.value = '';
    imagemInput.value = '';
    precoInput.value = '';
    descricaoInput.value = '';
}

function excluirProduto(i) {
    ITENS_LOJA.splice(i, 1);
    criarCards();
}

function favoritarProduto(i) {
    const produtoFavoritado = ITENS_LOJA.splice(i, 1)[0];
    ITENS_LOJA.unshift(produtoFavoritado);
    criarCards();
}

criarCards();