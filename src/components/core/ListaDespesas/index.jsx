import { useContext, useEffect } from 'react';
import { DespesaContext } from 'common/context/DespesasProvider';
import { useDespesaContext } from 'common/hooks/useDespesaContext';
import CardDespesa from 'components/core/CardDespesa';
import { getNameMonth } from 'common/utils/Datas';
import { H4 } from 'components/typography/H4';
import { BoxDespesa, ContainerDespesas } from './style';
import { Alert } from '@mui/material';
import ModalProvider from 'common/context/ModalProvider';

export default function ListaDespesa() {
   const { listaDespesas } = useContext(DespesaContext);
   const { atualizarListaDespesas } = useDespesaContext();

   useEffect(() => {
      atualizarListaDespesas();
   }, []);

   const mesesPagamento = [
      ...new Set(listaDespesas.map((despesa) => despesa.mesPagamento)),
   ].sort();

   return (
      <ContainerDespesas>
         {mesesPagamento.length > 0 ? (
            mesesPagamento.map((mes, index) => {
               return (
                  <BoxDespesa key={index}>
                     <H4
                        key={index}
                        style={{
                           marginLeft: 0,
                           padding: 0,
                           paddingBottom: '0.5rem',
                        }}
                     >
                        Em {getNameMonth(mes)}
                     </H4>
                     {listaDespesas
                        .filter((despesa) => despesa.mesPagamento === mes)
                        .map((despesa) => (
                           <ModalProvider key={despesa.id}>
                              <CardDespesa despesa={despesa} />
                           </ModalProvider>
                        ))}
                  </BoxDespesa>
               );
            })
         ) : (
            <Alert
               severity="info"
               variant="outlined"
               style={{ justifySelf: 'start', marginLeft: '2rem' }}
            >
               Você ainda não possui nenhuma despesa cadastrada!
            </Alert>
         )}
      </ContainerDespesas>
   );
}
