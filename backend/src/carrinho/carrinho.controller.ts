import "reflect-metadata";
import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Req, Session } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { Request, Response } from 'express';
import { CreateItemCarrinhoDTO } from "./dto/create-item_carrinho.dto";

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post()
  create(@Req() request: Request, @Body() createCarrinhoDto: CreateCarrinhoDto, @Res() response) {
    request.session['carrinho'] = createCarrinhoDto;
    const carrinho = request.session['carrinho'];
    response.status(HttpStatus.CREATED).send(carrinho);
  }

  @Get()
  findAll(@Req() request: Request, @Res() response: Response) {
    const carrinho = request.session['carrinho'];
    response.status(HttpStatus.OK).send(carrinho);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrinhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrinhoDto: UpdateCarrinhoDto) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

  @Delete()
  remove(@Req() request: Request, @Res() response: Response) {
    request.session['carrinho'] = undefined;
    response.status(HttpStatus.OK).send();
  }

  @Delete('item/:id')
  removeItem(@Req() request: Request, @Res() response: Response, @Param('id') id: string) {
    try {
      const carrinho: CreateCarrinhoDto = request.session['carrinho']; 
      const itens = carrinho.itemCarrinho.map(e => {
       if(e.livroId !== id)
        return {...e};
      });
      carrinho.itemCarrinho = itens;
      request.session['carrinho'] = carrinho;
      response.status(HttpStatus.CREATED).send(carrinho);
    } catch (e) {
      return e;
    }
  }
}
