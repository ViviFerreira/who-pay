import styled from 'styled-components';
import { colorPrimary } from 'components/IU/variaveis';

export const FormDespesa = styled.form`
   width: 95vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media only screen and (max-width: 764px) {
      width: 90vw;
   }

   .btn-custom,
   .btn-custom:hover {
      background: ${colorPrimary};
      text-transform: none;
      font-size: 1rem;
      box-shadow: none;
   }

   input,
   #formaPagamento {
      background: white;
   }
`;

export const FormContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: auto auto auto auto;

   @media only screen and (max-width: 764px) {
      grid-template-columns: auto;
   }
`;
