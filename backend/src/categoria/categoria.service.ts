import { Injectable, Inject } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from '../entities/categoria/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(@Inject('CategoriaRepository') private categoriaRepository: Repository<Categoria>){}
  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaRepository.insert(createCategoriaDto);
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
