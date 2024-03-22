import { Entity } from '../types';
import { IsAutoGeneratedID, Column, IsUnique, CheckFK } from '../decorators/entity.decorators';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ItemCarrinho } from './itemCarrinho.entity';

export class Carrinho extends Entity {
  constructor() {
    super();
    this.itemCarrinho = [];
  }

  @IsAutoGeneratedID()
  @Column()
  id: string;

  @CheckFK('Usuario', 'id')
  @Column()
  idUsuario: string;

  @Column(ItemCarrinho)
  itemCarrinho: ItemCarrinho[];

  @Column()
  total: number;
}