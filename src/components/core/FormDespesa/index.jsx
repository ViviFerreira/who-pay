import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, MenuItem, Button } from '@mui/material';
import { FormDespesa, FormContainer } from 'components/core/FormDespesa/style';
import { FormularioContext } from 'common/context/FormularioProvider';
import useDespesaContext from 'common/hooks/useDespesaContext';
import useErros from 'common/hooks/useErros';

export default () => {
   const {
      item,
      recebedor,
      qtParcelaTotais,
      formaPagamento,
      detalhes,
      proxPagamento,
      valor,
      setItem,
      setRecebedor,
      setQtParcelaTotais,
      setFormaPagamento,
      setDetalhes,
      setProxPagamento,
      setValor,
   } = useContext(FormularioContext);

   const { handleForm, actionBtnForm } = useDespesaContext();
   const { formValidado } = useErros();

   return (
      <FormDespesa>
         <FormContainer>
            <TextField
               id="item"
               label="O que estou pagando"
               type="text"
               value={item}
               onChange={(event) => setItem(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
               required
            />
            <TextField
               id="recebedor"
               label="A quem devo pagar"
               type="text"
               value={recebedor}
               onChange={(event) => setRecebedor(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
               required
            />
            <TextField
               id="parcelasTotais"
               label="Em quantas parcelas"
               type="number"
               value={qtParcelaTotais}
               onChange={(event) => setQtParcelaTotais(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
               required
            />
            <TextField
               id="formaPagamento"
               value={formaPagamento}
               onChange={(event) => setFormaPagamento(event.target.value)}
               size="small"
               label="Forma de Pagamento"
               select
               sx={{ m: '0.3rem' }}
               required
            >
               <MenuItem value="Cartão de Crédito">Cartão de Crédito</MenuItem>
               <MenuItem value="Cartão de Débito">Cartão de Débito</MenuItem>
               <MenuItem value="Pix">Pix</MenuItem>
               <MenuItem value="Dinheiro">Dinheiro</MenuItem>
               <MenuItem value="Outra">Outra</MenuItem>
            </TextField>
            <TextField
               id="detalhe"
               label="Detalhes"
               type="text"
               value={detalhes}
               onChange={(event) => setDetalhes(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <TextField
               id="proxPagamento"
               label="Próxima pagamento em"
               type="date"
               value={proxPagamento}
               onChange={(event) => setProxPagamento(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <TextField
               id="valor"
               label="Valor da parcela"
               type="number"
               value={valor}
               onChange={(event) => setValor(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <Button
               variant="contained"
               className="btn-custom"
               sx={{ m: '0.3rem' }}
               onClick={(e) => handleForm(e)}
               disabled={!formValidado()}
            >
               {actionBtnForm}
            </Button>
         </FormContainer>
         <ToastContainer autoClose={1500} />
      </FormDespesa>
   );
};
