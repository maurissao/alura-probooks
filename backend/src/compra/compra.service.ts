import { Inject, Injectable, Logger, UseGuards } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from '../entities/compra/compra.entity';
import { Repository } from 'typeorm';
import { CreateCarrinhoDto } from '../carrinho/dto/create-carrinho.dto';
import { ItemCompra } from '../entities/compra/item-compra.entity';
import { AuthGuard } from '../auth/auth.guard';

@Injectable()
export class CompraService {
  private readonly logger = new Logger(CompraService.name);

  constructor(
    @Inject('CompraRepository') private compraRepository: Repository<Compra>){}

  @UseGuards(AuthGuard)
  async create(createCompraDto: CreateCompraDto, createCarrinhoDto: CreateCarrinhoDto) {
    if(createCarrinhoDto) {
      this.logger.log(`registrando nova compra de ${createCarrinhoDto.usuarioId}`);
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
