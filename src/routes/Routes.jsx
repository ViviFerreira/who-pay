import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Pagina404 from 'pages/Pagina404';
import Despesas from 'pages/Despesas';
import PagarDespesa from 'pages/PagarDespesa';

export default () => (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Pagina404 />} />
      <Route path="/despesas" element={<Despesas />} />
      <Route path="/pagar" element={<PagarDespesa />} />
   </Routes>
);
