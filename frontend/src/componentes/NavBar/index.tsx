import React, { useEffect, useState } from 'react';
import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'
import { useCartCount } from '../../hooks/CartCountHook';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../state/cartState';

const NavBar: React.FC = () => {
    const cartCount = useRecoilValue(cartState);

    return (
        <header className={estilos.menu_bg}>
            <div className={estilos.menu}>
                <div className={estilos.menu_logo}>
                    <Link to="/">
                        <i className="pb-logo fa-sharp fa-solid fa-book-open "></i>
                        <span>ProBooks</span>
                    </Link>
                </div>
                <nav className={estilos.menu_nav}>
                    <ul>
                        <li><Link to="#sobre">Sobre</Link></li>
                        <li><Link to="#produtos">Produtos</Link></li>
                        <Link to="#carrinho" className={estilos.carrinho_home}>
                            <i className="fa-solid fa-cart-shopping fa-lg"></i>
                            <div className={estilos.cart_count_circle}>
                                <span className={estilos.cart_count}>{cartCount}</span>
                            </div>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar