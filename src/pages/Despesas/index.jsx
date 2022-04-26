import { useContext } from 'react';
import Layout from 'components/Layout';
import FormDespesa from 'components/core/FormDespesa';
import ListaDespesas from 'components/core/ListaDespesas';
import { ContainerFlex } from './style';
import { H3 } from 'components/typography/H3';
import { FormularioContext } from 'common/context/FormularioProvider';

export default function Despesas() {
   const { id } = useContext(FormularioContext);

   return (
      <Layout>
         <H3>
            {!id ? 'Registrar nova conta a pagar' : 'Editar conta a pagar'}
         </H3>
         <ContainerFlex>
            <FormDespesa />
         </ContainerFlex>
         <H3>Próximos pagamentos</H3>
         <ListaDespesas />
      </Layout>
   );
}
