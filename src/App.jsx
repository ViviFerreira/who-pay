import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from 'components/IU/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import FormularioProvider from 'common/context/FormularioProvider';
import DespesasProvider from 'common/context/DespesasProvider';
import ModalProvider from 'common/context/ModalProvider';
import DespesaSelecionadaProvider from 'common/context/DespesaSelecionadaProvider';
import Routes from 'routes/Routes';

export default function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <DespesasProvider>
            <FormularioProvider>
               <ModalProvider>
                  <DespesaSelecionadaProvider>
                     <Routes />
                  </DespesaSelecionadaProvider>
               </ModalProvider>
            </FormularioProvider>
         </DespesasProvider>
      </BrowserRouter>
   );
}
