import { createContext, useState } from 'react';
import { todayDate } from 'common/utils/Datas';

export const FormularioContext = createContext();
FormularioContext.displayName = 'Formulário';

export default function FormularioProvider({ children }) {
   const [item, setItem] = useState('');
   const [recebedor, setRecebedor] = useState('');
   const [qtParcelasTotais, setqtParcelasTotais] = useState('');
   const [formaPagamento, setFormaPagamento] = useState('Pix');
   const [detalhes, setDetalhes] = useState('');
   const [proxPagamento, setProxPagamento] = useState(todayDate);
   const [valorParcela, setValorParcela] = useState(0);
   const [id, setId] = useState('');

   return (
      <FormularioContext.Provider
         value={{
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
         }}
      >
         {children}
      </FormularioContext.Provider>
   );
}
