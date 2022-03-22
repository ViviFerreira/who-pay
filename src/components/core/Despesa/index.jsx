import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, MenuItem, Button } from '@mui/material';
import { cadastrar } from 'api/index';
import { FormDespesa, FormContainer } from 'components/core/Despesa/style';

export default () => {
   const [item, setItem] = useState('');
   const [recebedor, setRecebedor] = useState('');
   const [qtParcelaTotais, setQtParcelaTotais] = useState('');
   const [formaPagamento, setFormaPagamento] = useState('');
   const [detalhes, setDetalhes] = useState('');

   const limparForm = () => {
      setItem('');
      setRecebedor('');
      setQtParcelaTotais('');
      setFormaPagamento('');
      setDetalhes('');
   };

   const handleForm = (event) => {
      event.preventDefault();
      cadastrar({
         item,
         recebedor,
         qtParcelaTotais,
         formaPagamento,
         detalhes,
      }).then((status) => {
         if (status === 200) {
            toast.success('Sua despesa foi cadastrada');
         } else {
            toast.error('Erro ao cadastrar sua despesa');
         }
      });
      limparForm();
   };

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
               <MenuItem value="Nenhuma">
                  <em>Nenhuma</em>
               </MenuItem>
               <MenuItem value="Cartão de Crédito">Cartão de Crédito</MenuItem>
               <MenuItem value="Cartão de Débito">Cartão de Débito</MenuItem>
               <MenuItem value="Pix">Pix</MenuItem>
               <MenuItem value="Dinheiro">Dinheiro</MenuItem>
            </TextField>
            <TextField
               id="outlined-nome"
               label="Detalhes"
               type="text"
               value={detalhes}
               onChange={(event) => setDetalhes(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <Button
               className="btn-blue"
               variant="contained"
               onClick={(event) => handleForm(event)}
               sx={{ m: '0.3rem' }}
               type="submit"
            >
               Cadastrar
            </Button>
         </FormContainer>
         <ToastContainer autoClose={2000} />
      </FormDespesa>
   );
};
