import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import estilos from './home.module.scss';
import ListaLivros from '../../componentes/ListaLivros';

function App() {
  return (
    <>
      <NavBar />
      <ListaLivros />
    </>
  );
}

export default App;