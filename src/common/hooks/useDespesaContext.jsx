import { useContext } from 'react';
import { FormularioContext } from 'common/context/FormularioProvider';
import { DespesaContext } from 'common/context/DespesasProvider';
import { ModalContext } from 'common/context/ModalProvider';
import { cadastrar, buscar, editar } from 'api';
import { todayDate } from 'common/utils/Datas';
import { toast } from 'react-toastify';
import { getMonth } from 'common/utils/Datas';

export function useDespesaContext() {
   const {
      item,
      recebedor,
      qtParcelaTotais,
      formaPagamento,
      detalhes,
      dataPagamento,
      valor,
      setItem,
      setRecebedor,
      setQtParcelaTotais,
      setFormaPagamento,
      setDetalhes,
      setDataPagamento,
      setValor,
   } = useContext(FormularioContext);

   const { setListaDespesas } = useContext(DespesaContext);

   const { handleClose } = useContext(ModalContext);

   const atualizarListaDespesas = () => {
      buscar('/pagar', setListaDespesas);
   };

   const limparForm = () => {
      setItem('');
      setRecebedor('');
      setQtParcelaTotais('');
      setFormaPagamento('Pix');
      setDetalhes('');
      setDataPagamento(todayDate);
      setValor(0);
   };

   const mesPagamento = getMonth(dataPagamento);

   const handleForm = async (event) => {
      event.preventDefault();
      const status = await cadastrar({
         item,
         recebedor,
         qtParcelaTotais,
         formaPagamento,
         detalhes,
         dataPagamento,
         valor,
         mesPagamento,
      });

      if (status === 200) {
         toast.success('Sua despesa foi cadastrada');
      } else {
         toast.error('Erro ao cadastrar sua despesa');
      }
      limparForm();
      atualizarListaDespesas();
   };

   const loadDespesa = (despesa) => {
      setItem(despesa.item);
      setRecebedor(despesa.recebedor);
      setQtParcelaTotais(despesa.qtParcelaTotais);
      setFormaPagamento(despesa.formaPagamento);
      setDetalhes(despesa.detalhes);
      setDataPagamento(despesa.dataPagamento);
      setValor(despesa.valor);

      handleClose();
   };

   return {
      atualizarListaDespesas,
      handleForm,
      loadDespesa,
   };
}
