export function carrinho(dadosCarrinho: any) {
    dadosCarrinho['total'] = dadosCarrinho['preco'] * dadosCarrinho['qtd'];
    const areaApp: HTMLElement = document.querySelector('.body-app');
    if (areaApp) {
        const htmlCarrinho: string = `
        <section>
            <div class="carrinho-container">
                <table>
                    <thead class="table-carrinho-h">
                        <th scope="col">Item</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Qtd</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <div class="table-carrinho-col-item">
                                    <span>
                                        <img src="assets/images/hp.jpg">
                                    </span>
                                    <span>
                                        ${dadosCarrinho['nome']}
                                    </span>
                                </div>
                            </th>
                            <td>${dadosCarrinho['preco']}</td>
                            <td><input type="number" class="carrinho-input-qtd" min="1" max="999" value="${dadosCarrinho['qtd']}"></td>
                            <td>${dadosCarrinho['total']}</td>
                            <td><i class="fa-regular fa-trash-can"></i></td>

                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>200,00</td>
                        </tr>
                    </tfoot>
                </table>
            </div
        </section>
        `;
        areaApp.innerHTML = htmlCarrinho;
        const inputQtde: HTMLElement = document.querySelector('.carrinho-input-qtd');
        inputQtde.addEventListener('change', (event: Event) => {
            dadosCarrinho['qtd'] = parseInt(inputQtde['value']);
            carrinho(dadosCarrinho);
        });
    }
}
