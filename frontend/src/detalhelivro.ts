export async function detalharLivro(id: any) {
    const areaLivros: HTMLElement = document.querySelector('.area-livros-app');
    if (areaLivros) {
        const response = await fetch(`http://localhost:3000/livro/${id}`);
        const livro = await response.json();
        const htmlLivro: string = `
            <img src="assets/images/hp.jpg" style="max-width: 300px">
            <span>${livro['nome']}</span>
            <span>R$ ${livro['preco']}</span>
            <span>${livro['ISBN']}</span>
            <span>${livro['resumo']}
            <span>${livro['sumario']}
        `;
        areaLivros.innerHTML = htmlLivro;
    }
}