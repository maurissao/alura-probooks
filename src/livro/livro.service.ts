import { Injectable, Inject } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Repository } from '../infra/repository/base.repository';
import { Livro } from '../entities/livro/livro.entity';

@Injectable()
export class LivroService {
  constructor (@Inject('LivroRepository') private livroRepository: Repository<Livro>){}
  create(createLivroDto: CreateLivroDto) {
    return this.livroRepository.insert(createLivroDto);
  }

  findAll() {
    return `This action returns all livro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}
