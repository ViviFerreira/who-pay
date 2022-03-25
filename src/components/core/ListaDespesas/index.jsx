import { useContext, useEffect } from 'react';
import { DespesaContext } from 'common/context/DespesasProvider';
import { useDespesaContext } from 'common/hooks/useDespesaContext';
import { getNameMonth } from 'common/utils/Datas';

export default function ListaDespesa() {
   const { listaDespesas } = useContext(DespesaContext);
   const { atualizarListaDespesas } = useDespesaContext();

   useEffect(() => {
      atualizarListaDespesas();
   }, []);

   const mesesPagamento = [
      ...new Set(listaDespesas.map((despesa) => despesa.mesPagamento)),
   ];

   const contasApagar = (mes) =>
      listaDespesas.map((despesa) => {
         if (despesa.mesPagamento == mes) return <li>Conta: {despesa.item}</li>;
      });

   return (
      <ul>
         {mesesPagamento.map((mes) => {
            if (mes) {
               return (
                  <>
                     <li>Mês: {getNameMonth(mes)}</li>
                     <li>{contasApagar(mes)}</li>
                  </>
               );
            }
         })}
      </ul>
   );
}
