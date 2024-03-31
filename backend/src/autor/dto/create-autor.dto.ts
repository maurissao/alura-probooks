import { IsEmail, IsNotEmpty, IsString, MinLength, ValidationArguments } from 'class-validator';

export class CreateAutorDto {
  @IsString()
  @IsNotEmpty({message: (args: ValidationArguments) => {
    return `${args.property} não pode estar vazio`
  }})
  nome: string;

  @IsEmail({}, {message: (args: ValidationArguments) => {
    return `${args.property} inválido`
  }})
  email: string;

  @IsString()
  @MinLength(10, {message: (args: ValidationArguments) => {
    return `${args.property} precisa ter no mínimo ${args.constraints[0]} caracteres`
  }})
  biografia: string;
}
