import { useContext } from 'react';
import { cadastrar, buscar, editar, excluir } from 'api';
import { toast } from 'react-toastify';
import { DespesaContext } from 'common/context/DespesasProvider';

export default function useCrudDespesa() {
   const { setListaDespesas } = useContext(DespesaContext);

   const cadastrarDespesa = async (despesa) => {
      const status = await cadastrar(despesa);
      status === 200 || status === 201
         ? toast.success('Sua despesa foi cadastrada')
         : toast.error('Erro ao cadastrar sua despesa');
   };

   const buscarDespesas = async () => {
      const resp = await buscar('pagar');
      setListaDespesas(resp);
   };

   const editarDespesa = async (despesa, id) => {
      const status = await editar(despesa, id);
      status === 200 || status === 201
         ? toast.success('Sua despesa foi alterada')
         : toast.error('Erro ao alterar sua despesa');
   };

   const excluirDespesa = async (id) => {
      const status = await excluir(id);
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
