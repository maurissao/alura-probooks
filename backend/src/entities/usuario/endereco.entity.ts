import "reflect-metadata";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { UUID } from "crypto";

@Entity('endereco_usuario')
export class Endereco {
    @PrimaryColumn()
    usuarioId: string;

    @OneToOne(() => Usuario, (usuario) => usuario.endereco)
    @JoinColumn()
    usuario: Usuario

    @Column()
    pais: string;

    @Column()
    estado: string;

    @Column()
    cidade: string;

    @Column()
    bairro: string;

    @Column()
    rua: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    cep: string;
}