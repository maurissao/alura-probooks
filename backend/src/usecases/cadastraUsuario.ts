import { Repository } from "../infra/repository/base.repository";
import { Usuario } from "../entities/usuario/usuario.entity";

export async function cadastraUsuario() {
    const usuarioRepository = new Repository<Usuario>(Usuario);
    const usuario = new Usuario();
    usuario.nome = 'George Orwell';
    usuario.telefone = '21976408231';
    usuario.cpf = '11111111111';
    usuario.email = 'georgeorwell@amazon.com';
    usuario.dataCadastro = new Date();
    usuario.endereco.bairro = 'Cachambi';
    usuario.endereco.cidade = 'Rio de Janeiro';
    usuario.endereco.pais = 'Brasil';
    await usuarioRepository.insert(usuario);

    // usuario.nome = 'Nabucodonossor';
    // usuario.cpf = '222.222.222-22';
    // usuario.email = 'nabuco@amazon.com';
    // usuario.telefone = '21976408231';
    // usuario.dataCadastro = new Date();
    // usuario.endereco.bairro = 'Ninive';
    // usuario.endereco.cidade = 'Babilonia';
    // usuario.endereco.pais = 'Brasil';
    // await usuarioRepository.insert(usuario);

}
