import { useContext } from 'react';
import {
   addOrEditDespesa,
   onDeleteDespesa,
   getDespesas,
} from 'services/FirebaseService';
import { toast } from 'react-toastify';
import { DespesaContext } from 'common/context/ListaDespesas';

export default function useCrudDespesa() {
   const { setListaDespesas } = useContext(DespesaContext);

   const cadastrarDespesa = async (despesa) => {
      const status = await addOrEditDespesa(despesa);
      status === 200
         ? toast.success('Sua despesa foi cadastrada')
         : toast.error('Erro ao cadastrar sua despesa');
   };

   const buscarDespesas = async () => {
      await getDespesas(setListaDespesas);
   };

   const editarDespesa = async (despesa) => {
      const status = await addOrEditDespesa(despesa);
      status === 200 || status === 201
         ? toast.success('Sua despesa foi alterada')
         : toast.error('Erro ao alterar sua despesa');
   };

   const excluirDespesa = async (id) => {
      const status = await onDeleteDespesa(id);
      status === 200 || status === 201
         ? toast.success('Sua despesa foi excluida')
         : toast.error('Erro ao excluir despesa');

      buscarDespesas();
   };

   return {
      cadastrarDespesa,
      buscarDespesas,
      editarDespesa,
      excluirDespesa,
   };
}
