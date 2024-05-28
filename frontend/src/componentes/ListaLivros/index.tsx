import React, { useEffect, useState } from 'react';
import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Livro = {
    id: string;
    nome: string;
    resumo: string;
    sumario: string;
    preco: number;
    paginas: number;
    ISBN: string;
    dataPublicacao: string;
    categoria: string;
    autor: string;    
}

function ListaLivros() {
    const [livros, setLivros] = useState<Livro[]>([]);
    useEffect(() => {
        axios.get<Livro[]>('http://localhost:3000/livro')
        .then((response) => {
            setLivros(response.data);
        });
    }, []) 

    return (
        <h1>
            {livros?.map(
                item => {return <Link key={item.id} to={"/livro/" + item.id}>{item.nome}</Link>}
            )}
        </h1>
    )
}

export default ListaLivros;