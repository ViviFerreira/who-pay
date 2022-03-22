import { colorGray, colorRed, colorWhite } from 'components/IU/variaveis';
import styled from 'styled-components';

const Footer = styled.div`
   background: ${colorGray};
   text-align: center;
   font-size: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${colorWhite};

   a {
      color: ${colorWhite};
   }

   i {
      color: ${colorRed};
   }
`;

export default () => (
   <Footer>
      {' '}
      <p>
         Desenvolvido por{' '}
         <span>
            <a href="https://github.com/ViviFerreira" target="blank">
               Viviane Ferreira
            </a>{' '}
            <i className="bi bi-suit-heart-fill"></i>
         </span>
      </p>
   </Footer>
);
