import { FormularioContext } from 'common/context/FormularioProvider';
import { useContext } from 'react';

export default function useErros() {
   const { item, recebedor, qtParcelasTotais, formaPagamento, valorParcela } =
      useContext(FormularioContext);

   const formValidado = () => {
      if (
         item === '' ||
         recebedor === '' ||
         qtParcelasTotais <= 0 ||
         formaPagamento === '' ||
         valorParcela <= 0
      )
         return false;

      return true;
   };

   return { formValidado };
}
