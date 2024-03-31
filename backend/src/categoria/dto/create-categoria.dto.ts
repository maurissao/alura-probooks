import { IsNotEmpty, IsString, MinLength, ValidationArguments } from 'class-validator';

export class CreateCategoriaDto {
    @MinLength(10, {message: (args: ValidationArguments) => {
        return `${args.property} precisa ter no mínimo ${args.constraints[0]} caracteres`
      }})
        @IsNotEmpty({message: (args: ValidationArguments) => {
        return `${args.property} não pode estar vazio`
      }})
    descricao: string;
}
