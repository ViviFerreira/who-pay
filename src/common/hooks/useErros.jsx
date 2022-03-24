import { FormularioContext } from 'common/context/FormularioProvider';
import { useContext } from 'react';

function useErros() {
   const { item, recebedor, qtParcelaTotais, formaPagamento, valor } =
      useContext(FormularioContext);

   const formValidado = () => {
      if (
         item === '' ||
         recebedor === '' ||
         qtParcelaTotais <= 0 ||
         formaPagamento === '' ||
         valor <= 0
      )
         return false;

      return true;
   };

   return { formValidado };
}

export default useErros;
