import Home from './paginas/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Livro from './componentes/Livro';
import { CartCountProvider } from './hooks/CartCountHook';
import { RecoilRoot } from 'recoil';

export default function AppRouter() {
  return (
    <RecoilRoot>
      <main>
        <Home />
        <Routes>
          <Route path="/livro/:id" element={<Livro />} />
        </Routes>
      </main>
    </RecoilRoot>
  );
}

