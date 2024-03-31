import "reflect-metadata";
import { IsNotEmpty, IsString, Length, MinLength, Validate, ValidationArguments } from 'class-validator';
import { Autor } from '../../entities/autor/autor.entity';
import { EntityDTO, ForeignKeyValidator } from 'src/infra/database/validation-services/foreign-key.validator';
import { Livro } from '../../entities/livro/livro.entity';
import { Categoria } from "src/entities/categoria/categoria.entity";

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
    ISBN: string;

    dataPublicacao: string;

    @Validate(ForeignKeyValidator, [
        (c: Categoria) => c.id
    ])
    categoria: string;

    autor: Autor;
}

const x = (c: Categoria) => c.id;
const c = new Categoria;
c.id = 'xxxxxxxxxxx';
const r = x(c);
console.log(r);