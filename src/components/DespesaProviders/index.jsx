import FormularioProvider from 'common/context/Formulario';
import DespesasProvider from 'common/context/ListaDespesas';
import DespesaSelecionadaProvider from 'common/context/DespesaSelecionada';
import ModalProvider from 'common/context/Modal';

export default function DespesaProviders({ children }) {
   return (
      <FormularioProvider>
         <DespesasProvider>
            <DespesaSelecionadaProvider>
               <ModalProvider>{children}</ModalProvider>
            </DespesaSelecionadaProvider>
         </DespesasProvider>
      </FormularioProvider>
   );
}
