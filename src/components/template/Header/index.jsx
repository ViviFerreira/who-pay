import Nav from 'components/template/Header/Nav';
import { colorPrimary, colorWhite, fontMont } from 'components/IU/variaveis';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
   background: ${colorPrimary};
   display: grid;
   grid-template-columns: auto auto;
   justify-items: flex-end;
   align-items: center;
   padding-right: 5rem;

   .logo {
      color: ${colorWhite};
      justify-self: flex-start;
      margin-left: 5rem;
      font-size: 1.2rem;
      font-family: ${fontMont};
      font-weight: 600;
   }

   @media only screen and (max-width: 764px) {
      justify-content: center;
      padding-right: 0;

      .logo {
         display: none;
      }
   }
`;

export default () => (
   <Header>
      <Link to="/" className="logo">
         <span>Who-Pay</span>
      </Link>
      <Nav />
   </Header>
);
