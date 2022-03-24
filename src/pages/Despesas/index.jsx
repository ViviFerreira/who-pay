import Layout from 'components/Layout';
import FormDespesa from 'components/core/FormDespesa';
import ListaDespesas from 'components/core/ListaDespesas';
import { ContainerFlex, Title } from './style';
import FormularioProvider from 'common/context/FormularioProvider';
import DespesasProvider from 'common/context/DespesasProvider';

export default function RegistrarDespesa() {
   return (
      <Layout>
         <Title>Registrar uma nova conta a pagar</Title>
         <DespesasProvider>
            <FormularioProvider>
               <ContainerFlex>
                  <FormDespesa />
               </ContainerFlex>
               <ListaDespesas />
            </FormularioProvider>
         </DespesasProvider>
      </Layout>
   );
}
