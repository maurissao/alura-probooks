import "reflect-metadata";
import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';
import { EntityDTO, ForeignKeyValidator, UniqueKeyValidator } from '../../infra/database/validation-services/datasource.validator';
import { LengthMessage, MinLengthMessage } from "../../entities/decorators/entity.decorators";
import { Categoria } from "../../entities/categoria/categoria.entity";
import { Autor } from "../../entities/autor/autor.entity";

@EntityDTO('livro')
export class CreateLivroDto {
    @IsString()
    @MinLength(10, MinLengthMessage)
    nome: string;

    @IsString()
    @MinLength(10, MinLengthMessage)
    resumo: string;

    @IsString()
    @MinLength(10, MinLengthMessage)
    sumario: string;

    preco: number;

    paginas: number;

    @Length(9, 13, LengthMessage)
    @UniqueKeyValidator()
    ISBN: string;

    dataPublicacao: string;

    @ForeignKeyValidator({referencedEntity: 'Categoria', referencedColumn: 'id'})
    categoria: Categoria;

    @ForeignKeyValidator({referencedEntity: 'Autor', referencedColumn: 'id'})
    autor: Autor;
}
