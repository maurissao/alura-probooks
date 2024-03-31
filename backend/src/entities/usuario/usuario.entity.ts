import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco.entity";
import { UUID } from "crypto";

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @OneToOne(() => Endereco, (endereco) => endereco.usuario)
  @JoinColumn()
  endereco: Endereco;

  @Column()
  dataCadastro: Date;
}
