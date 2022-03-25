import styled from 'styled-components';

export const ContainerDespesas = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, auto);
   justify-items: center;

   @media only screen and (max-width: 764px) {
      grid-template-columns: repeat(1, auto);
   }
`;
export const BoxDespesa = styled.div`
   width: 90%;
   padding: 0.8rem;
`;
