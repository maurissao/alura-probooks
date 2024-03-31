import { Inject, Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from '../entities/compra/compra.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompraService {

  constructor(@Inject('CompraRepository') private compraRepository: Repository<Compra>){}

  create(createCompraDto: CreateCompraDto) {
    return this.compraRepository.insert(createCompraDto);
  }

  findAll() {
    return this.compraRepository.find();
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
