import {
   colorDark,
   colorRed,
   colorLight,
   fontMont,
} from 'components/IU/variaveis';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

const Footer = styled.div`
   background: ${colorDark};
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;

   a {
      color: ${colorLight};
      font-weight: 100;
      font-family: ${fontMont};
   }

   svg {
      color: ${colorRed};
   }

   span {
      font-style: italic;
      text-decoration: underline;
      padding-right: 0.4rem;
   }
`;

export default () => (
   <Footer>
      <a href="https://github.com/ViviFerreira" target="blank">
         Desenvolvido por <span>Viviane Ferreira</span>
         <FaRegHeart />
      </a>
   </Footer>
);
