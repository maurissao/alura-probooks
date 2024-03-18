import { Module } from "@nestjs/common";
import { Livro } from "./livro.entity";

export const LivroProvider = {
    provide: 'LivroRepository',
    useFactory: (store) => {
        return store.getRepository(Livro);
    },
    inject: ['StoreProvider']
}