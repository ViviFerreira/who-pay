import Layout from 'components/Layout';
import FormDespesa from 'components/core/FormDespesa';
import ListaDespesas from 'components/core/ListaDespesas';
import { ContainerFlex } from './style';
import { Title } from 'components/Title';
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
               <Title>Próximos pagamentos</Title>
               <ListaDespesas />
            </FormularioProvider>
         </DespesasProvider>
      </Layout>
   );
}
