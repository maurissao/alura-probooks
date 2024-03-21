import { detalharLivro } from "./detalhelivro.js";

renderMenuCategorias();
renderAreaLivros();

async function renderMenuCategorias() {
    const ulCategorias: HTMLElement = document.querySelector('.lista-categorias-app');
    if (ulCategorias) {
        const response = await fetch('http://localhost:3000/categoria');
        const categorias = await response.json();
        ulCategorias.innerHTML = '';
        let htmlCategorias: string = '';
        for (let categoria of categorias) {
            htmlCategorias += `
                <li><a href="${categoria['id']}">${categoria['descricao']}</a></li>
            `;
        }
        ulCategorias.innerHTML = htmlCategorias;
    }
}

async function renderAreaLivros() {
    const areaLivros: HTMLElement = document.querySelector('.area-livros-app');
    if (areaLivros) {
        const response = await fetch('http://localhost:3000/livro');
        const livros = await response.json();
        const container = `
            <h1 class="lista-livros">ÚLTIMOS LANÇAMENTOS</h1>
            <div>
                <ul class="div-lista-livros">
                </ul>
            </div>
        `;
        areaLivros.innerHTML += container;
        const ulListaLivros: HTMLElement = document.querySelector('.div-lista-livros');
        let htmlListaLivros: string = '';
        for (let livro of livros) {
            htmlListaLivros += `
                <a class="expande-detalhe-livro"  href="/dist/detalhelivro.html?id=${livro['id']}">
                    <li>
                        <div class="grid-template-livros" data-id="${livro['id']}">
                            <img class="livro-pic" src="assets/images/hp.jpg">
                            <span class="livro-titulo">${livro['nome']}</span>
                            <span class="livro-valor">R$ ${livro['preco']}</span>
                        </div>                            
                    </li>
                </a>
            `;
        }
        ulListaLivros.innerHTML = htmlListaLivros;
        const listaSelecao = document.querySelector('.expande-detalhe-livro');
        if (listaSelecao) {
            listaSelecao.addEventListener('click', (event: MouseEvent) => {
                event.preventDefault();
                const e: HTMLElement = event.target['closest']('div');
                detalharLivro(e.getAttribute('data-id'));
            });
        }    
    }
}
