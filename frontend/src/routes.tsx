import Home from './paginas/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Livro from './componentes/Livro';
import { CartCountProvider } from './hooks/CartCountHook';

export default function AppRouter() {
  return (
    <CartCountProvider>
      <main>
        <Home />
        <Routes>
          <Route path="/livro/:id" element={<Livro />} />
        </Routes>
      </main>
    </CartCountProvider>
  );
}

