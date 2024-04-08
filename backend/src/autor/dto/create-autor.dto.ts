import { IsEmail, IsNotEmpty, IsString, MinLength, ValidationArguments } from 'class-validator';
import { IsNotEmptyMessage, IsValidMessage, MinLengthMessage } from '../../entities/decorators/entity.decorators';
import { EntityDTO, UniqueKeyValidator } from '../../infra/database/validation-services/datasource.validator';
import { Inject } from '@nestjs/common';

@EntityDTO('autor')
export class CreateAutorDto {
  @IsString()
  @IsNotEmpty(IsNotEmptyMessage)
  nome: string;

  @UniqueKeyValidator()
  @IsEmail({}, IsValidMessage)
  email: string;

  @IsString()
  @MinLength(10, MinLengthMessage)
  biografia: string;
}
