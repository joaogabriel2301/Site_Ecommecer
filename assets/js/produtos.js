
document.addEventListener("DOMContentLoaded", function () {
    // Captura o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get("id");

    if (produtoId) {
        fetch(`http://localhost:3000/produtos/${produtoId}`)
            .then(response => response.json())
            .then(produto => {
                const produtoContainer = document.getElementById("produto-container");

                const colImagem = document.createElement("div");
                colImagem.className = "col-md-6";
                colImagem.innerHTML = `<img src="${produto.imagem}" alt="${produto.nome}" class="img-fluid">`;

                const colDetalhes = document.createElement("div");
                colDetalhes.className = "col-md-6";
                colDetalhes.innerHTML = `
                    <h1>${produto.nome}</h1>
                    <p class="lead">${produto.descricao}</p>
                    <p class="price">Preço: ${produto.descricao.split('por apenas')[1]}</p>
                    <p class="availability">Disponibilidade: Em estoque</p>
                    <hr>
                    <label for="quantity">Quantidade:</label>
                    <input type="number" id="quantity" name="quantity" min="1" value="1" class="form-control mb-3">
                    <a href="carrinho.html" class="btn btn-primary">Adicionar ao carrinho</a>
                `;

                produtoContainer.appendChild(colImagem);
                produtoContainer.appendChild(colDetalhes);
            })
            .catch(error => console.error("Erro ao carregar os detalhes do produto:", error));
    } else {
        console.error("ID do produto não encontrado na URL.");
    }
});