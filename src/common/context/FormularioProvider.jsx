import { createContext, useState } from 'react';
import { todayDate } from 'common/utils/Datas';

export const FormularioContext = createContext();
FormularioContext.displayName = 'Formulário';

export default function FormularioProvider({ children }) {
   const [item, setItem] = useState('');
   const [recebedor, setRecebedor] = useState('');
   const [qtParcelaTotais, setQtParcelaTotais] = useState('');
   const [formaPagamento, setFormaPagamento] = useState('Pix');
   const [detalhes, setDetalhes] = useState('');
   const [proxPagamento, setProxPagamento] = useState(todayDate);
   const [valor, setValor] = useState(0);
   const [id, setId] = useState('');

   return (
      <FormularioContext.Provider
         value={{
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
         }}
      >
         {children}
      </FormularioContext.Provider>
   );
}
