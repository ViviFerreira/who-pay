import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { editar } from 'api';
import { DespesaSelecionadaContext } from 'common/context/DespesaSelecionadaProvider';
import { todayDate, getNextMonth, getMonth } from 'common/utils/Datas';

export default function usePagamento() {
   const { despesaSelecionada: despesa, setDespesaSelecionada } = useContext(
      DespesaSelecionadaContext
   );
   const [dataPagamento, setDataPagamento] = useState(todayDate);
   const [proxPagamento, setProxPagamento] = useState('');
   const [valorPago, setValorPago] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
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
      despesa.qtParcelasTotais == despesa?.qtParcelasPagas + 1 ||
      despesa.qtParcelasTotais == 1;

   const pagarDespesa = async (event) => {
      event.preventDefault();
      const mesPagamento = getMonth(proxPagamento);
      let qtParcelasPagas = despesa.qtParcelasPagas
         ? despesa.qtParcelasPagas + 1
         : 1;

      const valorTotalPago = despesa.valorPago
         ? parseFloat(despesa.valorPago) + parseFloat(valorPago)
         : valorPago;

      const status = await editar(
         {
            ...despesa,
            ultimoPagamento: dataPagamento,
            valorPago: valorTotalPago,
            proxPagamento,
            mesPagamento,
            qtParcelasPagas,
         },
         despesa.id
      );

      status === 200 || status === 201
         ? toast.success('Você pagou essa despesa')
         : toast.error('Erro ao pagar despesa');

      restartForm();
      setTimeout(() => setDespesaSelecionada(''), 2000);
   };

   return {
      pagarDespesa,
      isLoading,
      despesa,
      dataPagamento,
      valorPago,
      proxPagamento,
      setDataPagamento,
      setValorPago,
      setProxPagamento,
      ultimoPagamento,
   };
}
