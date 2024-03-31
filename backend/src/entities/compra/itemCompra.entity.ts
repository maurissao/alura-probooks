import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from "../livro/livro.entity";

@Entity('item_compra')
export class ItemCompra {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Livro)
    @JoinColumn()
    livro: Livro;

    @Column()
    quantidade: number;

    @Column()
    preco: number;
}