import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { editar } from 'api';
import { DespesaSelecionadaContext } from 'common/context/DespesaSelecionadaProvider';
import { todayDate, getNextMonth, getMonth } from 'common/utils/Datas';

export default function usePagamento() {
   const { despesaSelecionada, setDespesaSelecionada } = useContext(
      DespesaSelecionadaContext
   );
   const [dataPagamento, setDataPagamento] = useState(todayDate);
   const [proxPagamento, setProxPagamento] = useState('');
   const [valorPago, setValorPago] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   const ultimoPagamento =
      despesaSelecionada.qtParcelasTotais ==
         despesaSelecionada?.qtParcelasPagas + 1 ||
      despesaSelecionada.qtParcelasTotais == 1;

   useEffect(() => {
      setValorPago(despesaSelecionada.valorParcela);
      const proxPagamento = !ultimoPagamento
         ? getNextMonth(despesaSelecionada.proxPagamento)
         : null;
      setProxPagamento(proxPagamento);
      setIsLoading(false);
   }, []);

   const restartForm = () => {
      setDataPagamento(todayDate);
      setValorPago(0);
   };

   const pagarDespesa = async () => {
      const mesPagamento = getMonth(proxPagamento);
      let qtParcelasPagas = despesaSelecionada.qtParcelasPagas
         ? despesaSelecionada.qtParcelasPagas + 1
         : 1;

      const valorTotalPago = despesaSelecionada.valorPago
         ? parseFloat(despesaSelecionada.valorPago) + parseFloat(valorPago)
         : valorPago;

      const status = await editar(
         {
            ...despesaSelecionada,
            ultimoPagamento: dataPagamento,
            valorPago: valorTotalPago,
            proxPagamento,
            mesPagamento,
            qtParcelasPagas,
         },
         despesaSelecionada.id
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
      despesaSelecionada,
      dataPagamento,
      valorPago,
      proxPagamento,
      setDataPagamento,
      setValorPago,
      setProxPagamento,
      ultimoPagamento,
   };
}
