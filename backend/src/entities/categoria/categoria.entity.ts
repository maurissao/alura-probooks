import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    descricao: string;
}
