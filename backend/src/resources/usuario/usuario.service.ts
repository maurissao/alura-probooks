import { Injectable, Inject } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from '../../infra/repository/base.repository';
import { Usuario } from '../../entities/usuario/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor (@Inject('UsuarioRepository') private usuarioRepository: Repository<Usuario>){}
  create(createUsuarioDto: CreateUsuarioDto) {
    this.usuarioRepository.insert(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.getAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
