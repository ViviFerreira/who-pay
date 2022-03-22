import styled from 'styled-components';
import Layout from 'components/Layout';

const Pagina404 = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

   .erro {
      font-size: 12rem;
   }

   .msg {
      font-size: 1.5rem;
      font-weight: 500;
   }
`;

export default () => (
   <Layout>
      <Pagina404>
         <span className="erro">404</span>
         <p className="msg">Ops..., essa página não existe!</p>
      </Pagina404>
   </Layout>
);
