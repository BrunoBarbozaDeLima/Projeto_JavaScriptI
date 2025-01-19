// Método Simples: Adicionando um título ao site
document.body.innerHTML = '<h1 id="titulo">Loja Online</h1>';

// Método Complexo: Criando um elemento de produto
const produto = document.createElement('div');
produto.id = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Notebook Gamer';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Notebook Gamer com processador Intel i7, 16GB de RAM e placa de vídeo NVIDIA GTX 1660Ti.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 5.499,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'imagens/51Wv-tEUn6L._AC_SL1000_.jpg';
imagemProduto.alt = 'Notebook Gamer';

// Adicionando os elementos filhos ao produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

// Adicionando o produto ao corpo do documento
document.body.appendChild(produto);