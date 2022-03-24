import { useContext } from 'react';
import { FormularioContext } from 'common/context/FormularioProvider';
import { DespesaContext } from 'common/context/DespesasProvider';
import { cadastrar, buscar } from 'api';
import { toast } from 'react-toastify';

export function useDespesaContext() {
   const {
      item,
      recebedor,
      qtParcelaTotais,
      formaPagamento,
      detalhes,
      dataPagamento,
      valor,
      limparForm,
   } = useContext(FormularioContext);
   const { setListaDespesas } = useContext(DespesaContext);

   const atualizarListaDespesas = () => {
      buscar('/pagar', setListaDespesas);
   };

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
      });

      if (status === 200) {
         toast.success('Sua despesa foi cadastrada');
      } else {
         toast.error('Erro ao cadastrar sua despesa');
      }
      limparForm();
      atualizarListaDespesas();
   };

   return {
      atualizarListaDespesas,
      handleForm,
   };
}
