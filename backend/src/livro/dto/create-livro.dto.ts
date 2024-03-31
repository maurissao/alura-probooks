import "reflect-metadata";
import { IsNotEmpty, IsString, Length, MinLength, Validate, ValidationArguments } from 'class-validator';
import { EntityDTO, ForeignKeyValidator, UniqueKeyValidator } from '../../infra/database/validation-services/foreign-key.validator';
import { Livro } from '../../entities/livro/livro.entity';
import { LengthMessage, MinLengthMessage } from "../../entities/decorators/entity.decorators";

@EntityDTO(Livro)
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
    categoria: string;

    @ForeignKeyValidator({referencedEntity: 'Autor', referencedColumn: 'id'})
    autor: string;
}
