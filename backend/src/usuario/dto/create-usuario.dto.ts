import "reflect-metadata";
import { EntityDTO, UniqueKeyValidator } from "../../infra/database/validation-services/datasource.validator";
import { Endereco } from "../../entities/usuario/endereco.entity";
import { IsArray, IsEmail, IsNotEmpty, Validate, ValidateNested, isNotEmpty } from "class-validator";
import { IsNotEmptyMessage, IsValidMessage, ValidateCPF } from "../../entities/decorators/entity.decorators";
import { EnderecoUsuarioDTO } from "./create-endereco_usuario.dto";
import { Type } from "class-transformer";

@EntityDTO('usuario')
export class CreateUsuarioDto {
  nome: string;

  @IsNotEmpty(IsNotEmptyMessage)
  @IsEmail({}, IsValidMessage)
  email: string;

  @IsNotEmpty(IsNotEmptyMessage)
  @Validate(ValidateCPF)
  @UniqueKeyValidator()
  cpf: string;

  @IsNotEmpty(IsNotEmptyMessage)
  telefone: string;

  @ValidateNested()
  @IsArray()
  @Type(() => EnderecoUsuarioDTO)
  endereco: Endereco[];

  @IsNotEmpty()
  senha: string;

  dataCadastro: string;
}
