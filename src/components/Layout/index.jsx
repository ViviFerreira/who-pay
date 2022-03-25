import styled from 'styled-components';
import Header from 'components/Layout/template/Header';
import Main from 'components/Layout/template/Main';
import Footer from 'components/Layout/template/Footer';

const Layout = styled.div`
   display: grid;
   grid-template-rows: 10vh auto 5rem;
   grid-template-areas: 'header' 'main' 'footer';

   header {
      grid-area: header;
   }

   main {
      grid-area: main;
   }

   footer {
      grid-area: footer;
   }
`;

export default ({ children }) => (
   <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
   </Layout>
);
