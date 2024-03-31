import { IsEmail, IsNotEmpty, IsString, MinLength, ValidationArguments } from 'class-validator';
import { IsNotEmptyMessage, IsValidMessage, MinLengthMessage } from '../../entities/decorators/entity.decorators';

export class CreateAutorDto {
  @IsString()
  @IsNotEmpty(IsNotEmptyMessage)
  nome: string;

  @IsEmail({}, IsValidMessage)
  email: string;

  @IsString()
  @MinLength(10, MinLengthMessage)
  biografia: string;
}
