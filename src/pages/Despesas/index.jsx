import Layout from 'components/Layout';
import FormDespesa from 'components/core/FormDespesa';
import ListaDespesas from 'components/core/ListaDespesas';
import { ContainerFlex } from './style';
import { H3 } from 'components/typography/H3';
import FormularioProvider from 'common/context/FormularioProvider';
import DespesasProvider from 'common/context/DespesasProvider';
import ModalProvider from 'common/context/ModalProvider';

export default function RegistrarDespesa() {
   return (
      <Layout>
         <H3>Registrar uma nova conta a pagar</H3>
         <DespesasProvider>
            <ModalProvider>
               <FormularioProvider>
                  <ContainerFlex>
                     <FormDespesa />
                  </ContainerFlex>
                  <H3>Próximos pagamentos</H3>
                  <ListaDespesas />
               </FormularioProvider>
            </ModalProvider>
         </DespesasProvider>
      </Layout>
   );
}
