import { Link } from 'react-router-dom';
import { colorWhite, fontRoboto } from 'components/IU/variaveis';
import styled from 'styled-components';

const Nav = styled.nav`
   width: 25vw;
   display: flex;
   justify-content: space-around;

   a {
      color: ${colorWhite};
      font-size: 1rem;
      font-family: ${fontRoboto};
      font-size: 1rem;
      font-weight: 500;
      padding: 0.6rem 0.5rem;
      border-radius: 0.2rem;
   }

   @media only screen and (max-width: 764px) {
      width: 90vw;
   }
   @media only screen and (max-width: 340px) {
      display: none;
   }
`;

export default () => (
   <Nav>
      <Link to="/">
         <i className="bi bi-house"></i> Inicio
      </Link>
      <Link to="/formulario">
         <i className="bi bi-wallet2"></i> Despesas
      </Link>
      <Link to="/pagamento">
         <i className="bi bi-credit-card"></i> Paguei
      </Link>
   </Nav>
);
