import styled from 'styled-components';
import { fontRoboto } from '../IU/variaveis';

export const P = styled.p`
   font-size: 1rem;
   margin-left: 1rem;
   margin-top: 0.5rem;
   font-family: ${fontRoboto};

   @media only screen and (max-width: 764px) {
      text-align: center;
      margin-left: 0;
   }
`;
