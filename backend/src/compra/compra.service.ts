import { Inject, Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from '../entities/compra/compra.entity';
import { Repository } from 'typeorm';
import { CreateCarrinhoDto } from '../carrinho/dto/create-carrinho.dto';
import { ItemCompra } from '../entities/compra/item-compra.entity';

@Injectable()
export class CompraService {

  constructor(
    @Inject('CompraRepository') private compraRepository: Repository<Compra>){}

  async create(createCompraDto: CreateCompraDto, createCarrinhoDto: CreateCarrinhoDto) {
    if(createCarrinhoDto) {
      createCompraDto.total = createCarrinhoDto.total;
      createCompraDto.usuarioId = createCompraDto.usuarioId || createCarrinhoDto.usuarioId;
      createCompraDto.itemCompra = [];
      createCarrinhoDto.itemCarrinho.forEach(async item => {
        createCompraDto.itemCompra.push({
          livroId: item.livroId,
          preco: item.preco,
          quantidade: item.quantidade
        } as ItemCompra);
      });
      return this.compraRepository.save(createCompraDto);
    } else {
      throw new Error('Carrinho vazio');
    }
  }

  async findAll() {
    return await this.compraRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    return `This action updates a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
