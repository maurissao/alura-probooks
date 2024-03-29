import { cadastraAutor } from "./cadastraAutor";
import { cadastraLivro } from "./cadastraLivro";
import { listaAutores } from "./listaAutores";
import { listaLivros } from "./listaLivros";
import { cadastraCategoria } from "./cadastraCategoria"
import { listaCategorias } from "./listaCategorias"
import { cadastraUsuario } from "./cadastraUsuario";
import { listaUsuarios } from "./listaUsuarios";
import { registraCompra } from "./registraCompra";

(async () => {
    const uc: string = process.argv[2];
    try {
        if (uc == 'autor') {
            await cadastraAutor();
            listaAutores();
        }

        if (uc == 'livro') {
            await cadastraLivro();
            listaLivros();
        }

        if (uc == 'cat') {
            await cadastraCategoria();
            listaCategorias();
        }

        if (uc == 'user') {
            await cadastraUsuario();
            listaUsuarios();
        }

        if (uc == 'compra') {
            await registraCompra();
        }

    } catch (e) {
        console.log(e.toString());  
    }
})();
