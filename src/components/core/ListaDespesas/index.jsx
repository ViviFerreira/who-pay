import { useContext, useEffect } from 'react';
import { DespesaContext } from 'common/context/DespesasProvider';
import { useDespesaContext } from 'common/hooks/useDespesaContext';
import moment from 'moment';

export default function ListaDespesa() {
   const { listaDespesas } = useContext(DespesaContext);
   const { atualizarListaDespesas } = useDespesaContext();

   useEffect(() => {
      atualizarListaDespesas();
   }, []);

   const datasPagamentos = listaDespesas.map(
      (despesa) => despesa.dataPagamento
   );

   const mesesPagamento = datasPagamentos.map((data) => {
      if (data) {
         data = new Date(`${data}T12:00`);
         data = data.getMonth() + 1;
      }
      return data;
   });

   const mesesDistintos = [...new Set(mesesPagamento)].sort();

   const novaLista = listaDespesas.map((despesa) => {
      if (despesa.dataPagamento) {
         var data = new Date(`${despesa.dataPagamento}T12:00`);
         var data = data.getMonth() + 1;
         despesa.mes = data;
      }
      return despesa;
   });

   const contasApagar = (mes) =>
      novaLista.map((despesa) => {
         if (despesa.mes == mes) return <li>Conta: {despesa.item}</li>;
      });

   return (
      <ul>
         {mesesDistintos.map((mes) => {
            if (mes) {
               return (
                  <>
                     <li>Mês: {mes}</li>
                     <li>{contasApagar(mes)}</li>
                  </>
               );
            }
         })}
      </ul>
   );
}
