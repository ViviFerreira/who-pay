import Layout from 'components/Layout';
import FormDespesa from 'components/core/Despesa';
import { ContainerFlex, Title } from './style';

export default function RegistrarDespesa() {
   return (
      <Layout>
         <Title>Registrar uma nova conta a pagar</Title>
         <ContainerFlex>
            <FormDespesa />
         </ContainerFlex>
      </Layout>
   );
}
