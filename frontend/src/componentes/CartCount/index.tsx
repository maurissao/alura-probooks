import React, { useEffect, useState } from 'react';
import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'
import { TLivro, TCart } from '../../types';

export const CartCount = () => {
    const [cart, setCart] = useState<TCart>();
    useEffect(() => {
        
    }, [])

    return (
        <span>
            {cart?.qtde || 0}
        </span>
    )
}