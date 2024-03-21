import { Repository } from "../infra/repository/base.repository";
import { Autor } from "../entities/autor/autor.entity";

export async function cadastraAutor() {
    const autorRepository = new Repository<Autor>(Autor);
    const autor = new Autor();
    autor.nome = 'George Orwell';
    autor.email = 'georgeorwell@amazon.com';
    autor.biografia = 'o texto deve ter mais de 10 caracteres ';
    autor.dataCadastro = new Date();
    await autorRepository.insert(autor);
}
