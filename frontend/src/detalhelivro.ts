import { carrinho } from "./carrinho.js";
export async function detalharLivro(id: any) {
    const areaApp: HTMLElement = document.querySelector('.body-app');
    if (areaApp) {
        const response = await fetch(`http://localhost:3000/livro/${id}`);
        const livro = await response.json();
        const htmlLivro: string = `
            <div class="grid-detalhe-livros">
                <span class="livro-detalhe-pic"><img src="assets/images/hp.jpg"></span>
                <div class="grid-detalhe-livros-dir">
                    <span class="livro-detalhe-titulo">${livro['nome']}</span>
                    <span class="livro-detalhe-valor">
                        <div>
                            <span>
                                <span>Compre agora "${livro['nome']}" por:</span>
                                <span>R$ ${livro['preco']}</span>
                            </span>
                            <div style="border-bottom: 1px solid black; padding: 8px 0 8px 0; margin: 0 0 20px 0;"></div>
                            <div style="text-align: center; width: 100%; display: flex; flex-direction: column; align-items: stretch; gap: 10px">
                                <span><button type="button" class="btn btn-primary btn-add-carrinho" style="width: 80%;">Adicionar ao carrinho</button></span>
                                <span><button type="button" class="btn btn-secondary btn-comprar-agora" style="width: 80%;">Comprar agora</button></span>
                            </div>
                        </div>
                    </span>
                    <span class="livro-detalhe-resumo">${livro['resumo']}</span>
                    <span class="livro-detalhe-sumario">${livro['sumario']}</span>
                    <span class="livro-detalhe-autor">Autor: ${livro['autor']}</span>
                    <span class="livro-detalhe-isbn">ISBN: ${livro['ISBN']}</span>
                    <span class="livro-detalhe-pages">Páginas: ${livro['paginas']}</span>

                </div>
            </div>
        `;
        areaApp.innerHTML = htmlLivro;
        const btnCart = document.querySelector('.btn-add-carrinho');
        if (btnCart) {
            btnCart.addEventListener('click', (event: MouseEvent) => {
                event.preventDefault();
                const e: HTMLElement = document.querySelector('.cart-count');
                const cartCount: string = e.innerHTML;
                e.innerHTML = (parseInt(cartCount) + 1).toString();
            });
        }    

        const btnNow = document.querySelector('.btn-comprar-agora');
        if (btnNow) {
            btnNow.addEventListener('click', (event: MouseEvent) => {
                event.preventDefault();
                carrinho({...livro, qtd: 1, total: 0});
            });
        }    
    }
}