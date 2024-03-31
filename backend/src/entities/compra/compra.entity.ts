import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { ItemCompra } from "./itemCompra.entity";

@Entity('compra')
export class Compra {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  idUsuario: string;

  @OneToMany(() => ItemCompra, (compra) => compra.id)
  @JoinColumn()
  itens: ItemCompra;

  @Column()
  formaPagamento: string;

  @Column()
  parcelas: number = 1;

  @Column()
  valorPparcelas: number;

  @Column()
  dataCompra: Date;

  @Column()
  total: number;
}