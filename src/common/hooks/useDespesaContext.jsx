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
      id,
      setItem,
      setRecebedor,
      setQtParcelaTotais,
      setFormaPagamento,
      setDetalhes,
      setDataPagamento,
      setValor,
      setId,
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

      if (!id) {
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

         status === 200 || status === 201
            ? toast.success('Sua despesa foi cadastrada')
            : toast.error('Erro ao cadastrar sua despesa');
      } else {
         const status = await editar(
            {
               item,
               recebedor,
               qtParcelaTotais,
               formaPagamento,
               detalhes,
               dataPagamento,
               valor,
               mesPagamento,
            },
            id
         );

         status === 200 || status === 201
            ? toast.success('Sua despesa foi alterada')
            : toast.error('Erro ao alterar sua despesa');

         setId('');
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
      setId(despesa.id);

      handleClose();
   };

   const actionBtnForm = !id ? 'Cadastrar' : 'Editar';
   const tituloForm = !id
      ? 'Registrar nova conta a pagar'
      : 'Editar conta a pagar';

   return {
      atualizarListaDespesas,
      handleForm,
      loadDespesa,
      actionBtnForm,
      tituloForm,
   };
}
