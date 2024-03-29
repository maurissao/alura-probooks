import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { response } from 'express';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post()
  create(@Body() createCarrinhoDto: CreateCarrinhoDto, @Res() response) {
    return this.carrinhoService.create(createCarrinhoDto)
      .then((value) => {
        response.send(value);
      })
      .catch((reason) => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          reason: reason.toString(),
          data: createCarrinhoDto
        })
      });
  }

  @Get()
  findAll() {
    return this.carrinhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrinhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrinhoDto: UpdateCarrinhoDto) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrinhoService.remove(+id);
  }
}
