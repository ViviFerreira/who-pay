import { Link } from 'react-router-dom';
import { colorWhite, fontRoboto } from 'components/IU/variaveis';
import { FaMoneyCheck, FaHome, FaWallet } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
   min-width: 15rem;
   display: flex;
   justify-content: space-around;
   align-items: baseline;

   a {
      color: ${colorWhite};
   }

   span {
      padding-left: 0.3rem;
      font-size: 1rem;
      font-family: ${fontRoboto};
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.6rem 0.5rem;
      border-radius: 0.2rem;
      text-transform: uppercase;
   }

   svg {
      font-size: 1.2rem;
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
         <FaHome />
         <span>Inicio</span>
      </Link>
      <Link to="/despesas">
         <FaWallet />
         <span>Despesas</span>
      </Link>
   </Nav>
);
