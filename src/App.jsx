import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from 'components/IU/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';
import DespesaProviders from 'components/DespesaProviders';

export default function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <DespesaProviders>
            <Routes />
         </DespesaProviders>
      </BrowserRouter>
   );
}
