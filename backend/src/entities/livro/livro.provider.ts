import { Module } from "@nestjs/common";
import { Livro } from "./livro.entity";

export const LivroProvider = {
    provide: 'LivroRepository',
    useFactory: (datasource) => {
        return datasource.getRepository(Livro);
    },
    inject: ['AppDataSource']
}