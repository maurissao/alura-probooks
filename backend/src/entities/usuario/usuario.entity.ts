import { IEntity } from '../types';
import { IsAutoGeneratedID, Column, IsUnique, ValidateCPF, ValidateTelefone } from '../decorators/entity.decorators';
import { IsEmail, IsNotEmpty, IsString, Length, Validate } from 'class-validator';
import { Endereco } from './endereco.entity';

export class Usuario implements IEntity {
  constructor() {
    this.endereco = new Endereco();
  }

  @IsString()
  @IsNotEmpty({ message: 'O ID usuário não deve ser vazio' })
  @IsAutoGeneratedID()
  @Column()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @IsUnique()
  @Column()
  email: string;

  @IsUnique()
  @Column()
  @Validate(ValidateCPF)
  cpf: string;

  @IsNotEmpty()
  @Column()
  @Validate(ValidateTelefone)
  telefone: string;

  @Column(Endereco)
  endereco: Endereco;

  @Column(Date)
  dataCadastro: Date;
}
