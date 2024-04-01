import { Inject, Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from '../entities/compra/compra.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class CompraService {

  constructor(
    @Inject(REQUEST) private request: Request,
    @Inject('CompraRepository') private compraRepository: Repository<Compra>
  ){}

  async create(createCompraDto: CreateCompraDto) {
    const carrinho = this.request.session['carrinho'];
    if(carrinho) {
      return this.compraRepository.insert(createCompraDto);
    } else {
      throw new Error('Carrinho vazio');
    }
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
