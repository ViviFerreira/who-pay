import styled from 'styled-components';
import { colorLight, colorDark } from 'components/IU/variaveis';

export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, auto);
   grid-template-rows: repeat(7, auto);
   justify-items: center;

   @media only screen and (max-width: 764px) {
      grid-template-columns: repeat(1, auto);
   }
`;

export const GridItem = styled.div`
   width: 100%;
   padding: 0.5rem;
   background-color: ${colorLight};
   margin: 0.5rem;
   color: ${colorDark};
`;
