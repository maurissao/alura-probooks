import "reflect-metadata";
import { IsNotEmpty, IsString, Length, MinLength, Validate, ValidationArguments } from 'class-validator';
import { EntityDTO, ForeignKeyValidator, UniqueKeyValidator } from '../../infra/database/validation-services/foreign-key.validator';
import { Livro } from '../../entities/livro/livro.entity';

@EntityDTO(Livro)
export class CreateLivroDto {
    @IsString()
    @MinLength(10, {message: (args: ValidationArguments) => {
        return `${args.property} precisa ter no mínimo ${args.constraints[0]} caracteres`
    }})
    nome: string;

    @IsString()
    @MinLength(10, {message: (args: ValidationArguments) => {
      return `${args.property} precisa ter no mínimo ${args.constraints[0]} caracteres`
    }})
    resumo: string;

    @IsString()
    @MinLength(10, {message: (args: ValidationArguments) => {
      return `${args.property} precisa ter no mínimo ${args.constraints[0]} caracteres`
    }})
    sumario: string;

    preco: number;

    paginas: number;

    @Length(9, 13, {message: (args: ValidationArguments) => {
        return `${args.property} precisa ter no mínimo ${args.constraints[0]} caracteres`
    }})
    @UniqueKeyValidator()
    ISBN: string;

    dataPublicacao: string;

    @ForeignKeyValidator({referencedEntity: 'Categoria', referencedColumn: 'id'})
    categoria: string;

    @ForeignKeyValidator({referencedEntity: 'Autor', referencedColumn: 'id'})
    autor: string;
}
