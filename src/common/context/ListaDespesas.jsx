import { createContext, useState } from 'react';

export const DespesaContext = createContext();
DespesaContext.displayName = 'Despesa';

export default function DespesasProvider({ children }) {
   const [listaDespesas, setListaDespesas] = useState([]);

   return (
      <DespesaContext.Provider
         value={{
            listaDespesas,
            setListaDespesas,
         }}
      >
         {children}
      </DespesaContext.Provider>
   );
}
