import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { editar } from 'api';
import { buscar } from 'api';
import { todayDate, getNextMonth, getMonth } from 'common/utils/Datas';

export default function usePagamento() {
   let { id } = useParams();
   const [foundDespesa, setFoundDespesa] = useState({});
   const [dataPagamento, setDataPagamento] = useState(todayDate);
   const [proxPagamento, setProxPagamento] = useState('');
   const [valorPago, setValorPago] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(async () => {
      const despesa = await buscar(`pagar/${id}`);
      setFoundDespesa(despesa);
      setValorPago(despesa.valorParcela);
      const proxPagamento = !ultimoPagamento
         ? getNextMonth(despesa.proxPagamento)
         : null;
      setProxPagamento(proxPagamento);

      setIsLoading(false);
   }, []);

   const restartForm = () => {
      setDataPagamento(todayDate);
      setValorPago(0);
   };

   const ultimoPagamento =
      foundDespesa.qtParcelasTotais == foundDespesa?.qtParcelasPagas + 1;

   const despesaQuitada =
      foundDespesa.qtParcelasTotais == foundDespesa?.qtParcelasPagas;

   const pagarDespesa = async (event) => {
      event.preventDefault();
      const mesPagamento = getMonth(proxPagamento);
      let qtParcelasPagas = foundDespesa.qtParcelasPagas
         ? foundDespesa.qtParcelasPagas + 1
         : 1;

      const status = await editar(
         {
            ultimoPagamento: dataPagamento,
            valorPago,
            ...foundDespesa,
            proxPagamento,
            mesPagamento,
            qtParcelasPagas,
         },
         id
      );

      status === 200 || status === 201
         ? toast.success('Você pagou essa despesa')
         : toast.error('Erro ao pagar despesa');

      restartForm();
   };

   return {
      pagarDespesa,
      isLoading,
      foundDespesa,
      dataPagamento,
      valorPago,
      proxPagamento,
      setDataPagamento,
      setValorPago,
      setProxPagamento,
      ultimoPagamento,
      despesaQuitada,
   };
}
