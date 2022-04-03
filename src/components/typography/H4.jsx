import styled from 'styled-components';
import { fontMont } from '../IU/variaveis';

export const H4 = styled.h4`
   font-size: 0.9rem;
   margin-left: 1rem;
   padding: 1rem;
   font-weight: bold;
   font-family: ${fontMont};

   @media only screen and (max-width: 764px) {
      text-align: center;
      margin-left: 0;
   }
`;
