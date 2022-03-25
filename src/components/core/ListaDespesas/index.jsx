import { useContext, useEffect } from 'react';
import { DespesaContext } from 'common/context/DespesasProvider';
import { useDespesaContext } from 'common/hooks/useDespesaContext';
import CardDespesa from 'components/core/CardDespesa';
import { getNameMonth } from 'common/utils/Datas';
import { Title } from 'components/Title';
import { BoxDespesa, ContainerDespesas } from './style';

export default function ListaDespesa() {
   const { listaDespesas } = useContext(DespesaContext);
   const { atualizarListaDespesas } = useDespesaContext();

   useEffect(() => {
      atualizarListaDespesas();
   }, []);

   const mesesPagamento = [
      ...new Set(listaDespesas.map((despesa) => despesa.mesPagamento)),
   ];

   return (
      <ContainerDespesas>
         {mesesPagamento.map((mes) => {
            return (
               <BoxDespesa>
                  <Title
                     style={{
                        marginLeft: 0,
                        padding: 0,
                        paddingBottom: '0.5rem',
                     }}
                  >
                     Em {getNameMonth(mes)}
                  </Title>
                  {listaDespesas
                     .filter((despesa) => despesa.mesPagamento === mes)
                     .map((despesa) => (
                        <CardDespesa despesa={despesa} />
                     ))}
               </BoxDespesa>
            );
         })}
      </ContainerDespesas>
   );
}
