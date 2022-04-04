import Layout from 'components/Layout';
import FormDespesa from 'components/core/FormDespesa';
import ListaDespesas from 'components/core/ListaDespesas';
import { ContainerFlex } from './style';
import { H3 } from 'components/typography/H3';
import { useDespesaContext } from 'common/hooks/useDespesaContext';

export default function RegistrarDespesa() {
   const { tituloForm } = useDespesaContext();

   return (
      <Layout>
         <H3>{tituloForm}</H3>
         <ContainerFlex>
            <FormDespesa />
         </ContainerFlex>
         <H3>Próximos pagamentos</H3>
         <ListaDespesas />
      </Layout>
   );
}
