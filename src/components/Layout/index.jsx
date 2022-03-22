import styled from 'styled-components';
import Header from 'components/template/Header';
import Main from 'components/template/Main';
import Footer from 'components/template/Footer';

const Layout = styled.div`
   display: grid;
   grid-template-rows: 10vh 90vh 5rem;
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
