import { createContext, useState } from 'react';

export const DespesaSelecionadaContext = createContext();
DespesaSelecionadaContext.displayName = 'Despesa Selecionada';

export default function DespesasProvider({ children }) {
   const [despesaSelecionada, setDespesaSelecionada] = useState('');

   const defineDespesa = (despesa) => {
      setDespesaSelecionada(despesa);
   };

   return (
      <DespesaSelecionadaContext.Provider
         value={{
            despesaSelecionada,
            setDespesaSelecionada,
            defineDespesa,
         }}
      >
         {children}
      </DespesaSelecionadaContext.Provider>
   );
}
