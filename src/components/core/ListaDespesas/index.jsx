import { useContext, useEffect } from 'react';
import { DespesaContext } from 'common/context/DespesasProvider';
import { useDespesaContext } from 'common/hooks/useDespesaContext';

export default function ListaDespesa() {
   const { listaDespesas } = useContext(DespesaContext);
   const { atualizarListaDespesas } = useDespesaContext();

   useEffect(() => {
      atualizarListaDespesas();
   }, []);

   return (
      <ul>
         {listaDespesas.map((despesa) => (
            <li key={despesa.id}>
               {despesa.item} | {despesa.valor}{' '}
            </li>
         ))}
      </ul>
   );
}
