import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autor } from "../autor/autor.entity";
import { Categoria } from "../categoria/categoria.entity";

@Entity('livro')
export class Livro {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    nome: string;

    @Column({length: 500})
    resumo: string;

    @Column({length: 100})
    sumario: string;

    @Column()
    preco: number;

    @Column()
    paginas: number;
    
    @Index({unique: true})
    @Column({length: 20})
    ISBN: string;

    @Column({name: 'data_publicacao', type: 'timestamp'})
    dataPublicacao: string;

    @ManyToOne(() => Categoria)
    @JoinColumn()
    categoria: string;

    @ManyToOne(() => Autor)
    @JoinColumn()
    autor: string;
}
