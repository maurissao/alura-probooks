import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { TLivro, TCart } from '../../types';
import axios from 'axios';

function Livro() {
    const [livro, setLivro] = useState<TLivro>();
    const [cart, setCart] = useState<TCart>();
    const { id } = useParams();

    function addToCart() {
        if (cart) {
            cart.qtde++;
            setCart(cart)
        } else {
            let c: TCart = {
                itemid: id || '',
                qtde: 1
            }
            setCart(c);
        }
    }
    
    useEffect(() => {
        axios.get<TLivro>(`http://localhost:3000/livro/${id}`)
        .then((response) => {
            setLivro(response.data);
        });
    }, []) 

    return (
        <>
            <p>{livro?.nome}</p>
            <p>{livro?.ISBN}</p>
            <p>{livro?.resumo}</p>
            <button onClick={() => { addToCart() }}>
                Adicionar ao carrinho
            </button>
        </>
    )
}

export default Livro;