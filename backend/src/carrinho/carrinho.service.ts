import { Inject, Injectable } from '@nestjs/common';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { Carrinho } from '../entities/carrinho/carrinho.entity';
import { Repository } from 'typeorm';
import { v4 as uuid} from 'uuid';

@Injectable()
export class CarrinhoService {

  create(createCarrinhoDto: CreateCarrinhoDto) {
    if (!createCarrinhoDto.id || createCarrinhoDto.id === '')
      createCarrinhoDto.id = uuid();
    createCarrinhoDto.total = createCarrinhoDto.itemCarrinho.reduce(
      (p, c) => p + c.preco * c.quantidade, 0
    );
  }

  findAll() {
    return `This action returns all carrinho`;
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
