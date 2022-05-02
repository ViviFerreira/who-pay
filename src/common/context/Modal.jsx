import { createContext, useState } from 'react';

export const ModalContext = createContext();
ModalContext.displayName = 'Modal';

export default function DespesasProvider({ children }) {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <ModalContext.Provider
         value={{
            open,
            handleClickOpen,
            handleClose,
         }}
      >
         {children}
      </ModalContext.Provider>
   );
}
