import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from "../livro/livro.entity";
import { Compra } from "./compra.entity";

@Entity('item_compra')
export class ItemCompra {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Compra, (compra) => compra.itemCompra)
    compra: Compra;

    @Column()
    livroId: string;

    @ManyToOne(() => Livro)
    @JoinColumn({name: 'livroId'})
    livro: Livro;

    @Column()
    quantidade: number;

    @Column()
    preco: number;
}