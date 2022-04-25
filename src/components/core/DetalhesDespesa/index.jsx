import styled from 'styled-components';
import { useContext } from 'react';
import {
   colorLight,
   colorDark,
   colorBlue,
   colorRed,
   colorGreen,
} from 'components/IU/variaveis';
import {
   Button,
   Dialog,
   DialogContent,
   DialogContentText,
   DialogTitle,
   DialogActions,
} from '@mui/material';
import { dateFormat } from 'common/utils/Datas';
import { ModalContext } from 'common/context/ModalProvider';
import useDespesaContext from 'common/hooks/useDespesaContext';
import { useNavigate } from 'react-router-dom';
import { DespesaSelecionadaContext } from 'common/context/DespesaSelecionadaProvider';

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, auto);
   grid-template-rows: repeat(7, auto);
   justify-items: center;

   @media only screen and (max-width: 764px) {
      grid-template-columns: repeat(1, auto);
   }
`;

const GridItem = styled.div`
   width: 100%;
   padding: 0.5rem;
   background-color: ${colorLight};
   margin: 0.5rem;
   color: ${colorDark};
`;

export default () => {
   const { despesaSelecionada: despesa } = useContext(
      DespesaSelecionadaContext
   );
   const navigate = useNavigate();
   const { open, handleClose } = useContext(ModalContext);
   const { loadDespesa } = useDespesaContext();

   return (
      <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <DialogTitle id="alert-dialog-title">
            Detalhes desse pagamento
         </DialogTitle>
         <DialogContent>
            <DialogContentText id="alert-dialog-description">
               <Grid>
                  <GridItem>Item - {despesa.item}</GridItem>
                  <GridItem>Recebedor - {despesa.recebedor}</GridItem>
                  <GridItem>
                     Parcela -{' '}
                     {despesa.qtParcelasPagas ? despesa.qtParcelasPagas + 1 : 1}
                     /{despesa.qtParcelasTotais}
                  </GridItem>
                  <GridItem>
                     Valor Total Pago - {despesa.valorPago || 0}
                  </GridItem>
                  <GridItem>
                     Forma de pagamento - {despesa.formaPagamento}
                  </GridItem>
                  <GridItem>Detalhes - {despesa.detalhes}</GridItem>
                  <GridItem>
                     Próx pagamento - {dateFormat(despesa.proxPagamento)}
                  </GridItem>
                  <GridItem>Valor da Parcela - {despesa.valorParcela}</GridItem>
               </Grid>
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button
               onClick={() => loadDespesa()}
               variant="contained"
               sx={{ background: colorBlue }}
               size="small"
            >
               Editar
            </Button>
            <Button
               onClick={handleClose}
               variant="contained"
               sx={{ background: colorRed }}
               size="small"
            >
               Fechar
            </Button>
            <Button
               onClick={() => navigate(`/pagar`)}
               variant="contained"
               sx={{ background: colorGreen }}
               size="small"
            >
               Paguei
            </Button>
         </DialogActions>
      </Dialog>
   );
};
