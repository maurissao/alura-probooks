import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Req } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Request, Response } from 'express';
import { CreateCarrinhoDto } from '../carrinho/dto/create-carrinho.dto';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  create(@Body() createCompraDto: CreateCompraDto, @Req() request: Request, @Res() response) {
    const createCarrinhoDto: CreateCarrinhoDto = request.session['carrinho'];
    return this.compraService.create(createCompraDto, createCarrinhoDto)
      .then((value) => {
        response.send(value);
      })
      .catch((reason) => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          reason: reason.toString(),
          data: createCompraDto
        });
      });
  }

  @Get()
  findAll(@Res() response: Response) {
    this.compraService.findAll()
      .then((value) => response.send(value))
      .catch((reason) => response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(reason.toString()));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(+id, updateCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
