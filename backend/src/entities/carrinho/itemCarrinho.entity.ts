import { Entity } from '../types';
import { IsAutoGeneratedID, Column, IsUnique, CheckFK } from '../decorators/entity.decorators';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class ItemCarrinho extends Entity {
    @CheckFK('Livro', 'id')
    @Column()
    idLivro: string;

    @Column()
    quantidade: number;

    @Column()
    preco: number;
}
