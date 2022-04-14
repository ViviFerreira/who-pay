import { useContext } from 'react';
import { FormularioContext } from 'common/context/FormularioProvider';
import { DespesaContext } from 'common/context/DespesasProvider';
import { ModalContext } from 'common/context/ModalProvider';
import { cadastrar, buscar, editar } from 'api';
import { todayDate, getMonth } from 'common/utils/Datas';
import { toast } from 'react-toastify';

export default function useDespesaContext() {
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

   const { setListaDespesas } = useContext(DespesaContext);

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

   const loadDespesa = (despesa) => {
      setItem(despesa.item);
      setRecebedor(despesa.recebedor);
      setqtParcelasTotais(despesa.qtParcelasTotais);
      setFormaPagamento(despesa.formaPagamento);
      setDetalhes(despesa.detalhes);
      setProxPagamento(despesa.proxPagamento);
      setValorParcela(despesa.valorParcela);
      setId(despesa.id);

      handleClose();
   };

   const buscarDespesas = async () => {
      setListaDespesas(await buscar('/pagar'));
   };

   const handleForm = async (event) => {
      event.preventDefault();
      const mesPagamento = getMonth(proxPagamento);
      const objDespesa = {
         item,
         recebedor,
         qtParcelasTotais,
         formaPagamento,
         detalhes,
         proxPagamento,
         valorParcela,
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

      restartForm();
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
