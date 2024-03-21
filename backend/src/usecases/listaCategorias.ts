import { Repository } from "../infra/repository/base.repository";
import { Categoria } from "../entities/categoria/categoria.entity";

export function listaCategorias() {
    const categoriaRepository = new Repository<Categoria>(Categoria);
    const categorias: any[] = categoriaRepository.getAll();
    if (categorias != undefined) {
        categorias.map((e, i ,a) => {
            console.log(e.id, e.descricao);
        });
    }
}