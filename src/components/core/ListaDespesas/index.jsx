import { useContext, useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { DespesaContext } from 'common/context/DespesasProvider';
import useCrudDespesa from 'common/hooks/useCrudDespesa';
import CardDespesa from 'components/core/CardDespesa';
import { getNameMonth, todayDate, getNameMonthDate } from 'common/utils/Datas';
import { H4 } from 'components/typography/H4';
import { BoxDespesa, ContainerDespesas } from './style';
import ModalProvider from 'common/context/ModalProvider';
import Loading from 'components/Loading';

export default function ListaDespesa() {
   const { listaDespesas } = useContext(DespesaContext);
   const { buscarDespesas } = useCrudDespesa();
   const [isLoading, setIsLoading] = useState(true);

   useEffect(async () => {
      await buscarDespesas();
      setIsLoading(false);
   }, []);

   const mesesPagamento = [
      ...new Set(
         listaDespesas
            .filter(
               (despesa) => despesa.qtParcelasTotais != despesa?.qtParcelasPagas
            )
            .map((despesa) => despesa.mesPagamento)
      ),
   ].sort();

   if (isLoading) {
      return (
         <Loading
            style={{
               marginTop: '5rem',
            }}
         />
      );
   }

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
                        {getNameMonthDate(todayDate) === getNameMonth(mes)
                           ? 'Este mês'
                           : `Em ${getNameMonth(mes)}`}
                     </H4>
                     {listaDespesas
                        .filter((despesa) => despesa.mesPagamento === mes)
                        .map((despesa) => (
                           <ModalProvider key={despesa.id}>
                              {despesa.qtParcelasTotais !=
                                 despesa?.qtParcelasPagas && (
                                 <CardDespesa despesa={despesa} />
                              )}
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
