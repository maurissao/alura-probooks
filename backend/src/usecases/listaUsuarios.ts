import { Repository } from "../infra/repository/base.repository";
import { Usuario } from "../entities/usuario/usuario.entity";

export function listaUsuarios() {
    const usuarioRepository = new Repository<Usuario>(Usuario);
    const usuarios: any[] = usuarioRepository.getAll();
    if (usuarios != undefined) {
        usuarios.map((e, i ,a) => {
            console.log(e.nome, e.cpf, e.endereco.bairro, e.dataPublicacao);
        });
    }
}