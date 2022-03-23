import Layout from 'components/Layout';
import FormDespesa from 'components/core/FormDespesa';
import { ListaDespesa } from 'components/core/ListaDespesas';
import { ContainerFlex, Title } from './style';

export default function RegistrarDespesa() {
   return (
      <Layout>
         <Title>Registrar uma nova conta a pagar</Title>
         <ContainerFlex>
            <FormDespesa />
         </ContainerFlex>
         <ListaDespesa url="/pagar" />
      </Layout>
   );
}
