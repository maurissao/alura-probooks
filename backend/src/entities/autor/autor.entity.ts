import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as EntityDecorators from '../decorators/entity.decorators';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@Entity('autor')
export class Autor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  biografia: string;

  @Column()
  dataCadastro: Date;
}
