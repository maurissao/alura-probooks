import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { TLivro, TCart } from '../../types';
import { useCartCount } from '../../hooks/CartCountHook';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../../state/cartState';

function Livro() {
    const [livro, setLivro] = useState<TLivro>();
    const [cartCount, setCartCount] = useRecoilState(cartState);

    const { id } = useParams();
    const incrementCart = () => {
        setCartCount(cartCount + 1);
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
            <button onClick={() => { incrementCart() }}>
                Adicionar ao carrinho
            </button>
        </>
    )
}

export default Livro;