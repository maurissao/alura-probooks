import { Repository } from "../infra/repository/base.repository";
import { Carrinho } from '../entities/carrinho/carrinho.entity';
import { ItemCarrinho } from '../entities/carrinho/itemCarrinho.entity';
import { Compra } from '../entities/compra/compra.entity';
import { ItemCompra } from '../entities/compra/itemCompra.entity';
import { Entity, FormaPagamento } from "../entities/types";
import { CompraRepository } from "../infra/repository/compra/compra.repository";

export async function registraCompra() {
    const carrinho = new Carrinho();
    const compra = new Compra();
    compra.onChange = (target: Compra) => {
        target.valorPparcelas = target.total | 0 / target.parcelas | 1;
    }
    compra.id = '1';
    const carrinhoRepository = new Repository<Carrinho>(Carrinho);
    const compraRepository = new CompraRepository();
    carrinho.idUsuario = '559567ab-0c12-4048-a7e8-aa3d5551e806';
    carrinho.total = 50;
    const itemcarrinho = new ItemCarrinho();
    itemcarrinho.idLivro = 'e5f20dd1-7c61-4a4d-8eed-30185cb357bc';
    itemcarrinho.preco = 50;
    itemcarrinho.quantidade = 1;
    carrinho.itemCarrinho.push(itemcarrinho);
    carrinho.itemCarrinho.push(itemcarrinho);
    carrinhoRepository.insert(carrinho);
    for (let item of carrinho.itemCarrinho) {
        const itemCompra = new ItemCompra();
        itemCompra.idLivro = item.idLivro;
        itemCompra.preco = item.preco;    
        compra.ItemCompra.push(itemCompra);
    }
    compra.formaPagamento = FormaPagamento.CREDITO;
    compra.parcelas = 18;
    compra.idUsuario = carrinho.idUsuario;
    compra.total = carrinho.total;
    await compraRepository.insert(compra);
}