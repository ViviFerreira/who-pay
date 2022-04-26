import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';
import { H3 } from 'components/typography/H3';
import styled from 'styled-components';
import Loading from 'components/Loading';
import usePagamento from 'common/hooks/usePagamento';

export const FormContainer = styled.div`
   width: 35%;
   height: 30%;
   min-width: 30rem;
   display: grid;
   grid-template-columns: auto auto;
   align-items: center;
   margin-left: 2rem;

   @media only screen and (max-width: 764px) {
      width: 90%;
      margin: 0.5rem auto;
   }
`;

export default function PagarDespesa() {
   const {
      pagarDespesa,
      isLoading,
      despesaSelecionada,
      dataPagamento,
      valorPago,
      proxPagamento,
      setDataPagamento,
      setValorPago,
      setProxPagamento,
      ultimoPagamento,
      despesaQuitada,
   } = usePagamento();

   const navigate = useNavigate();

   if (isLoading) {
      return (
         <Layout>
            <Loading
               style={{
                  height: '100%',
               }}
            />
         </Layout>
      );
   }

   if (!despesaSelecionada) {
      navigate('/despesas');
   }

   return (
      <Layout>
         <H3>Pagar despesa</H3>
         <FormContainer>
            <TextField
               id="despesaSelecionada"
               label="Despesa"
               value={`${despesaSelecionada.item}`}
               size="small"
               sx={{ m: '0.3rem' }}
               InputProps={{
                  readOnly: true,
               }}
            />
            <TextField
               id="recebedor"
               label="Quem devo pagar"
               type="text"
               value={`${despesaSelecionada.recebedor}`}
               size="small"
               sx={{ m: '0.3rem' }}
               InputProps={{
                  readOnly: true,
               }}
            />
            <TextField
               id="dataPagamento"
               label="Pagamento realizado em"
               type="date"
               value={dataPagamento}
               onChange={(event) => setDataPagamento(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <TextField
               id="valor"
               label="Valor pago"
               type="number"
               value={valorPago}
               onChange={(event) => setValorPago(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            {!ultimoPagamento && !despesaQuitada && (
               <TextField
                  id="proxPagamento"
                  label="Próxima pagamento em"
                  type="date"
                  value={proxPagamento}
                  onChange={(event) => setProxPagamento(event.target.value)}
                  size="small"
                  sx={{ m: '0.3rem' }}
               />
            )}
            <Button
               variant="contained"
               className="btn-custom"
               sx={{ m: '0.3rem' }}
               onClick={() => pagarDespesa()}
               disabled={proxPagamento === '' || proxPagamento === ''}
            >
               Pagar
            </Button>
         </FormContainer>
         <ToastContainer autoClose={1500} />
      </Layout>
   );
}
