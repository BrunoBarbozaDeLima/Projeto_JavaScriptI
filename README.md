# Loja Online - Projeto JavaScript

Este é um projeto simples de uma loja online desenvolvido com **HTML** e **JavaScript**. O objetivo é demonstrar a manipulação do DOM, criação dinâmica de elementos e a conexão entre HTML e JavaScript.

---

## Funcionalidades

- **Título Dinâmico**: O título da página é adicionado via JavaScript.
- **Produto Dinâmico**: Um produto é criado dinamicamente com nome, descrição, preço e imagem.
- **Manipulação do DOM**: Uso de métodos como `createElement`, `appendChild`, `innerText` e `innerHTML`.

---

## Estrutura do Projeto

O projeto consiste em dois arquivos principais:

- `index.html`: Contém a estrutura básica do HTML e a tag de script para conectar ao arquivo JavaScript.
- `script.js`: Contém o código JavaScript que adiciona o título e o produto à página.

---

## Estrutura de Pastas

/loja-online │ ├── index.html ├── script.js ├── notebook.jpg └── README.md


---

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/loja-online.git

2. Navegue até a pasta do projeto:

cd loja-online

3. Abra o arquivo index.html no seu navegador.

Código Explicado

index.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja Online</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>

script.js

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
imagemProduto.src = 'notebook.jpg'; // Caminho relativo para a imagem na mesma pasta
imagemProduto.alt = 'Notebook Gamer';
imagemProduto.style.width = '150px'; // Ajuste o tamanho da imagem se necessário

// Adicionando os elementos filhos ao produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

// Adicionando o produto ao corpo do documento
document.body.appendChild(produto);

Tecnologias Utilizadas

HTML: Estrutura básica da página.
JavaScript: Manipulação do DOM e criação dinâmica de elementos.
