import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Pagina404 from 'pages/Pagina404';
import RegistrarDespesa from 'pages/RegistrarDespesa';

export default () => (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Pagina404 />} />
      <Route path="/formulario" element={<RegistrarDespesa />} />
   </Routes>
);
