import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
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

function Livro() {
    const [livro, setLivro] = useState<Livro>();
    const { id } = useParams();
    useEffect(() => {
        axios.get<Livro>(`http://localhost:3000/livro/${id}`)
        .then((response) => {
            console.log(response.data);
            setLivro(response.data);
        });
    }, []) 

    return (
        <>
            <h1>
                <p>{livro?.nome}</p>
                <p>{livro?.ISBN}</p>
                <p>{livro?.resumo}</p>
            </h1>
        </>
    )
}

export default Livro;