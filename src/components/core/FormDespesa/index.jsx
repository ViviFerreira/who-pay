import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { TextField, MenuItem } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { FormDespesa, FormContainer } from 'components/core/FormDespesa/style';
import { FormularioContext } from 'common/context/Formulario';
import useDespesaContext from 'common/hooks/useHandleFormulario';
import useErros from 'common/hooks/useErros';
import Button from 'components/Button';

export default () => {
   const {
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
   } = useContext(FormularioContext);

   const { handleForm } = useDespesaContext();
   const { validated } = useErros();

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
               value={qtParcelasTotais}
               onChange={(event) => setqtParcelasTotais(event.target.value)}
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
               <MenuItem value="Cart??o de Cr??dito">Cart??o de Cr??dito</MenuItem>
               <MenuItem value="Cart??o de D??bito">Cart??o de D??bito</MenuItem>
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
               label="Pr??xima pagamento em"
               type="date"
               value={proxPagamento}
               onChange={(event) => setProxPagamento(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <TextField
               id="valorParcela"
               label="Valor da parcela"
               type="number"
               value={valorParcela}
               onChange={(event) => setValorParcela(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <Button
               handle={handleForm}
               validated={validated}
               style={{ m: '0.3rem' }}
            >
               {!id ? 'Cadastrar' : 'Editar'}
            </Button>
         </FormContainer>
         <ToastContainer autoClose={1500} />
      </FormDespesa>
   );
};
