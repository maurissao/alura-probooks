import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as EntityDecorators from '../decorators/entity.decorators';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@Entity('autor')
export class Autor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100})
  nome: string;

  @Column({length: 320})
  email: string;

  @Column({length: 100})
  biografia: string;

  @CreateDateColumn({name: 'data_cadastro'})
  dataCadastro: string;
}
