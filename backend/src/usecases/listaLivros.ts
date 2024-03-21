import { Repository } from "../infra/repository/base.repository";
import { Livro } from "../entities/livro/livro.entity";

export function listaLivros() {
    const livroRepository = new Repository<Livro>(Livro);
    const livros: any[] = livroRepository.getAll();
    if (livros != undefined) {
        livros.map((e, i ,a) => {
            console.log(e.nome, e.dataPublicacao);
        });
    }
}