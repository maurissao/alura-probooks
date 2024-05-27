import { Injectable, Inject, Logger } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from '../entities/usuario/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  private readonly logger = new Logger(UsuarioService.name);

  constructor (@Inject('UsuarioRepository') private usuarioRepository: Repository<Usuario>){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    this.logger.log(`criando usuário ${createUsuarioDto.nome}`)
    const salt = process.env.salt_probooks;
    const hash = await bcrypt.hash(createUsuarioDto.senha, salt);
    createUsuarioDto.senha = hash;
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: string) {
    return this.usuarioRepository.findOne({
      where: {id}
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
