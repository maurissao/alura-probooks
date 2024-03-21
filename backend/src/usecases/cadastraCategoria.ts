import { Categoria } from "../entities/categoria/categoria.entity";
import { Repository } from "../infra/repository/base.repository";

export async function cadastraCategoria() {
    const categoriaRepository  = new Repository<Categoria>(Categoria);
    const categoria  = new Categoria();
    categoria.descricao = 'Política';
    await categoriaRepository.insert(categoria);
}