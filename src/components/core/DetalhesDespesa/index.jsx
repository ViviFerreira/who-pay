import { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { colorBlue, colorRed, colorGreen } from 'components/IU/variaveis';
import { Grid, GridItem } from './style';
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
import useCrudDespesa from 'common/hooks/useCrudDespesa';

export default () => {
   const { despesaSelecionada } = useContext(DespesaSelecionadaContext);
   const navigate = useNavigate();
   const { open, handleClose } = useContext(ModalContext);
   const { loadDespesa } = useDespesaContext();
   const { excluirDespesa } = useCrudDespesa();

   return (
      <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <DialogTitle
            id="alert-dialog-title"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
         >
            Detalhes desse pagamento
            <GrFormClose
               onClick={handleClose}
               style={{ fontSize: '1.8rem', cursor: 'pointer' }}
            />
         </DialogTitle>
         <DialogContent>
            <DialogContentText id="alert-dialog-description">
               <Grid>
                  <GridItem>Item - {despesaSelecionada.item}</GridItem>
                  <GridItem>
                     Recebedor - {despesaSelecionada.recebedor}
                  </GridItem>
                  <GridItem>
                     Parcela -{' '}
                     {despesaSelecionada.qtParcelasPagas
                        ? despesaSelecionada.qtParcelasPagas + 1
                        : 1}
                     /{despesaSelecionada.qtParcelasTotais}
                  </GridItem>
                  <GridItem>
                     Valor Total Pago - {despesaSelecionada.valorPago || 0}
                  </GridItem>
                  <GridItem>
                     Forma de pagamento - {despesaSelecionada.formaPagamento}
                  </GridItem>
                  <GridItem>Detalhes - {despesaSelecionada.detalhes}</GridItem>
                  <GridItem>
                     Próx pagamento -{' '}
                     {dateFormat(despesaSelecionada.proxPagamento)}
                  </GridItem>
                  <GridItem>
                     Valor da Parcela - {despesaSelecionada.valorParcela}
                  </GridItem>
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
               onClick={() => excluirDespesa(despesaSelecionada.id)}
               variant="contained"
               sx={{ background: colorRed }}
               size="small"
            >
               Excluir
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
