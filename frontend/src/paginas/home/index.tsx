import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import estilos from './home.module.scss';
import ListaLivros from '../../componentes/ListaLivros';

export default function Home() {
  return (
    <>
      <NavBar />
      <ListaLivros />
    </>
  );
}
