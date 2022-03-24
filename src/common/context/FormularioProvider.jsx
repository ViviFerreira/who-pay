import { createContext, useState } from 'react';
import { todayDate } from 'common/utils/Datas';

export const FormularioContext = createContext();
FormularioContext.displayName = 'Formulário';

export default function FormularioProvider({ children }) {
   const [item, setItem] = useState('');
   const [recebedor, setRecebedor] = useState('');
   const [qtParcelaTotais, setQtParcelaTotais] = useState('');
   const [formaPagamento, setFormaPagamento] = useState('');
   const [detalhes, setDetalhes] = useState('');
   const [dataPagamento, setDataPagamento] = useState(todayDate);
   const [valor, setValor] = useState(0);

   const limparForm = () => {
      setItem('');
      setRecebedor('');
      setQtParcelaTotais('');
      setFormaPagamento('');
      setDetalhes('');
      setDataPagamento(todayDate);
      setValor(0);
   };

   return (
      <FormularioContext.Provider
         value={{
            item,
            recebedor,
            qtParcelaTotais,
            formaPagamento,
            detalhes,
            dataPagamento,
            valor,
            setItem,
            setRecebedor,
            setQtParcelaTotais,
            setFormaPagamento,
            setDetalhes,
            setDataPagamento,
            setValor,
            limparForm,
         }}
      >
         {children}
      </FormularioContext.Provider>
   );
}
