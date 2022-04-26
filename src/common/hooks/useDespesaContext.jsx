import { useContext } from 'react';
import { todayDate, getMonth } from 'common/utils/Datas';
import { FormularioContext } from 'common/context/FormularioProvider';
import { ModalContext } from 'common/context/ModalProvider';
import { DespesaSelecionadaContext } from 'common/context/DespesaSelecionadaProvider';
import useCrudDespesa from 'common/hooks/useCrudDespesa';

export default function useDespesaContext() {
   const { cadastrarDespesa, buscarDespesas, editarDespesa } = useCrudDespesa();

   const {
      item,
      recebedor,
      qtParcelasTotais,
      formaPagamento,
      detalhes,
      proxPagamento,
      valorParcela,
      id,
      setItem,
      setRecebedor,
      setqtParcelasTotais,
      setFormaPagamento,
      setDetalhes,
      setProxPagamento,
      setValorParcela,
      setId,
   } = useContext(FormularioContext);

   const { despesaSelecionada, setDespesaSelecionada } = useContext(
      DespesaSelecionadaContext
   );

   const { handleClose } = useContext(ModalContext);

   const restartForm = () => {
      setItem('');
      setRecebedor('');
      setqtParcelasTotais('');
      setFormaPagamento('Pix');
      setDetalhes('');
      setProxPagamento(todayDate);
      setValorParcela(0);
   };

   const loadDespesa = () => {
      setItem(despesaSelecionada.item);
      setRecebedor(despesaSelecionada.recebedor);
      setqtParcelasTotais(despesaSelecionada.qtParcelasTotais);
      setFormaPagamento(despesaSelecionada.formaPagamento);
      setDetalhes(despesaSelecionada.detalhes);
      setProxPagamento(despesaSelecionada.proxPagamento);
      setValorParcela(despesaSelecionada.valorParcela);
      setId(despesaSelecionada.id);

      handleClose();
   };

   const handleForm = async () => {
      const novaDespesa = {
         ...despesaSelecionada,
         item,
         recebedor,
         qtParcelasTotais,
         formaPagamento,
         detalhes,
         proxPagamento,
         valorParcela: parseFloat(valorParcela),
         mesPagamento: getMonth(proxPagamento),
      };

      if (!id) {
         await cadastrarDespesa(novaDespesa);
      } else {
         await editarDespesa(novaDespesa, despesaSelecionada.id);
         setId('');
         setDespesaSelecionada('');
      }

      restartForm();
      buscarDespesas();
   };

   return {
      handleForm,
      loadDespesa,
   };
}
