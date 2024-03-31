import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
    
    @Column({length: 20})
    ISBN: string;

    @Column({name: 'data_publicacao', type: 'timestamp'})
    dataPublicacao: string;

    @OneToOne(() => Categoria)
    @JoinColumn()
    categoria: string;

    @OneToOne(() => Autor)
    @JoinColumn()
    autor: Autor;
}
