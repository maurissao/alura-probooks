import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
