import { Column, CreateDateColumn, Double, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationOptions } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { ItemCompra } from "./item-compra.entity";

@Entity('compra')
export class Compra {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;

  @OneToMany(() => ItemCompra, (item) => item.id, {cascade: true, eager: true})
  itemCompra: ItemCompra[];

  @Column({name: 'forma_pagamento'})
  formaPagamento: string;

  @Column('int')
  parcelas: number = 1;

  @Column('float', {name: 'valor_parcela'})
  valorParcela: number;

  @CreateDateColumn({name: 'data_compra'})
  dataCompra: string;

  @Column('float')
  total: number;
}
