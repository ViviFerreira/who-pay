import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from 'components/IU/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';

export default function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Routes />
      </BrowserRouter>
   );
}
