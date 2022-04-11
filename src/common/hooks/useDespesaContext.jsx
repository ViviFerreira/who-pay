import { useContext } from 'react';
import { FormularioContext } from 'common/context/FormularioProvider';
import { DespesaContext } from 'common/context/DespesasProvider';
import { ModalContext } from 'common/context/ModalProvider';
import { cadastrar, buscar, editar } from 'api';
import { todayDate } from 'common/utils/Datas';
import { toast } from 'react-toastify';
import { getMonth } from 'common/utils/Datas';

export default function useDespesaContext() {
   const {
      item,
      recebedor,
      qtParcelaTotais,
      formaPagamento,
      detalhes,
      proxPagamento,
      valor,
      id,
      setItem,
      setRecebedor,
      setQtParcelaTotais,
      setFormaPagamento,
      setDetalhes,
      setProxPagamento,
      setValor,
      setId,
   } = useContext(FormularioContext);

   const { setListaDespesas } = useContext(DespesaContext);

   const { handleClose } = useContext(ModalContext);

   const limparForm = () => {
      setItem('');
      setRecebedor('');
      setQtParcelaTotais('');
      setFormaPagamento('Pix');
      setDetalhes('');
      setProxPagamento(todayDate);
      setValor(0);
   };

   const loadDespesa = (despesa) => {
      setItem(despesa.item);
      setRecebedor(despesa.recebedor);
      setQtParcelaTotais(despesa.qtParcelaTotais);
      setFormaPagamento(despesa.formaPagamento);
      setDetalhes(despesa.detalhes);
      setProxPagamento(despesa.proxPagamento);
      setValor(despesa.valor);
      setId(despesa.id);

      handleClose();
   };

   const buscarDespesas = async () => {
      setListaDespesas(await buscar('/pagar', setListaDespesas));
   };

   const handleForm = async (event) => {
      event.preventDefault();
      const mesPagamento = getMonth(proxPagamento);
      const objDespesa = {
         item,
         recebedor,
         qtParcelaTotais,
         formaPagamento,
         detalhes,
         proxPagamento,
         valor,
         mesPagamento,
      };

      if (!id) {
         const status = await cadastrar({ ...objDespesa });

         status === 200 || status === 201
            ? toast.success('Sua despesa foi cadastrada')
            : toast.error('Erro ao cadastrar sua despesa');
      } else {
         const status = await editar({ ...objDespesa }, id);

         status === 200 || status === 201
            ? toast.success('Sua despesa foi alterada')
            : toast.error('Erro ao alterar sua despesa');

         setId('');
      }

      limparForm();
      buscarDespesas();
   };

   const actionBtnForm = !id ? 'Cadastrar' : 'Editar';
   const tituloForm = !id
      ? 'Registrar nova conta a pagar'
      : 'Editar conta a pagar';

   return {
      buscarDespesas,
      handleForm,
      loadDespesa,
      actionBtnForm,
      tituloForm,
   };
}
