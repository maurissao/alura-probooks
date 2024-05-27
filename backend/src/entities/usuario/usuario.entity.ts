import "reflect-metadata"
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco.entity";
import { UUID } from "crypto";

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @OneToMany(() => Endereco, (endereco) => endereco.usuario, {cascade: true, eager: true})
  endereco: Endereco[];

  @Column()
  senha: string;

  @CreateDateColumn({name: 'data_cadastro'})
  dataCadastro: string;
}
