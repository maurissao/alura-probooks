import { Repository } from "../infra/repository/base.repository";
import { Autor } from "../entities/autor/autor.entity";

export function listaAutores() {
    const autorRepository = new Repository<Autor>(Autor);
    const autores: any[] = autorRepository.getAll();
    if (autores != undefined) {
        autores.map((e, i ,a) => {
            console.log(e.nome, e.dataCadastro);
        });
    }
}

