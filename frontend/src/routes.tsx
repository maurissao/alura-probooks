import Home from './paginas/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Livro from './componentes/Livro';

export default function AppRouter() {
  return (
    <main>
      <Home />
      <Routes>
        <Route path="/livro/:id" element={<Livro />} />
      </Routes>
    </main>
  );
}

