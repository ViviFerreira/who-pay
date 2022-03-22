import styled from 'styled-components';
import { colorPrimary } from 'components/IU/variaveis';

export const FormDespesa = styled.form`
   width: 50vw;
   height: 50vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media only screen and (max-width: 764px) {
      width: 90vw;
   }

   .btn-blue,
   .btn-blue:hover {
      background: ${colorPrimary};
      text-transform: none;
      font-size: 1rem;
      box-shadow: none;
   }
`;

export const FormContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: auto auto auto;

   @media only screen and (max-width: 764px) {
      grid-template-columns: auto;
   }
`;
