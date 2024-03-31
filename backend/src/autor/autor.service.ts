import { Inject, Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from '../entities/autor/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutorService {
  constructor(@Inject('AutorRepository') private autorRepository: Repository<Autor>) {}

  create(createAutorDto: CreateAutorDto) {
    return this.autorRepository.insert(createAutorDto);
  }

  findAll() {
    return this.autorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return updateAutorDto;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
