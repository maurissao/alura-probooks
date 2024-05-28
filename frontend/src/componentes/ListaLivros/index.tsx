import React, { useEffect, useState } from 'react';
import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Livro = {
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
            console.log(response.data);
            setLivros(response.data);
        });
    }, []) 

    return (
        <h1>
            {livros?.map(item => item.nome)}
        </h1>
    )
}

export default ListaLivros;