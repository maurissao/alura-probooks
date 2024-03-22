import { Entity } from '../types';
import { IsAutoGeneratedID, Column, IsUnique } from '../decorators/entity.decorators';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class ItemCompra extends Entity {
    @Column()
    idLivro: string;

    @Column()
    quantidade: number;

    @Column()
    preco: number;
}