import { useContext } from 'react';
import { CardDespesa, Badge } from './style';
import DetalhesDespesa from 'components/core/DetalhesDespesa';
import { ModalContext } from 'common/context/ModalProvider';
import { DespesaSelecionadaContext } from 'common/context/DespesaSelecionadaProvider';

export default ({ despesa }) => {
   const { defineDespesa } = useContext(DespesaSelecionadaContext);
   const { handleClickOpen } = useContext(ModalContext);

   const handleCardDespesa = () => {
      defineDespesa(despesa);
      handleClickOpen();
   };

   return (
      <>
         <CardDespesa onClick={handleCardDespesa}>
            <div>{despesa.item}</div>
            <div>
               <Badge>{despesa.recebedor}</Badge>
            </div>
         </CardDespesa>
         <DetalhesDespesa />
      </>
   );
};
