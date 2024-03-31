import { Inject, Injectable } from '@nestjs/common';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { Carrinho } from '../entities/carrinho/carrinho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarrinhoService {
  constructor(@Inject('CarrinhoRepository') private carrinhoRepository: Repository<Carrinho>){}

  create(createCarrinhoDto: CreateCarrinhoDto) {
    return this.carrinhoRepository.insert(createCarrinhoDto);
  }

  findAll() {
    return this.carrinhoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} carrinho`;
  }

  update(id: number, updateCarrinhoDto: UpdateCarrinhoDto) {
    return `This action updates a #${id} carrinho`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrinho`;
  }
}
