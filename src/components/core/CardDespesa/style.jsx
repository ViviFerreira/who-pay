import styled from 'styled-components';
import { colorBlue, colorWhite } from 'components/IU/variaveis';

export const CardDespesa = styled.div`
   display: flex;
   justify-content: space-between;
   background: ${colorWhite};
   padding: 0.5rem;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
   margin-top: 0.3rem;

   :hover {
      background: white;
      cursor: pointer;
   }

   span {
      background: #7882a4;
   }
`;

export const Badge = styled.div`
   background-color: ${colorBlue};
   display: inline-block;
   padding: 0.35em 0.65em;
   font-size: 0.75em;
   font-weight: 600;
   line-height: 1;
   color: ${colorWhite};
   text-align: center;
   white-space: nowrap;
   vertical-align: baseline;
   border-radius: 0.25rem;
`;
