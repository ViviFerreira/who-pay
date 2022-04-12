import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { editar } from 'api';
import { ToastContainer, toast } from 'react-toastify';
import { buscar } from 'api';
import Layout from 'components/Layout';
import { H3 } from 'components/typography/H3';
import { todayDate, getNextMonth, getMonth } from 'common/utils/Datas';
import styled from 'styled-components';
import Loading from 'components/Loading';

export const FormContainer = styled.div`
   width: 35%;
   height: 30%;
   display: grid;
   grid-template-columns: auto auto;
   align-items: center;
   margin-left: 2rem;

   @media only screen and (max-width: 764px) {
      width: 90%;
      margin: 0.5rem auto;
   }

   .btn-grid {
      grid-column-start: 2;
      grid-column-end: 3;
   }
`;

export default function PagarDespesa() {
   let { id } = useParams();
   const [foundDespesa, setFoundDespesa] = useState({});
   const [dataPagamento, setDataPagamento] = useState(todayDate);
   const [proxPagamento, setProxPagamento] = useState('');
   const [valorPago, setValorPago] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(async () => {
      const despesa = await buscar(`pagar/${id}`);
      setFoundDespesa(despesa);
      setValorPago(despesa.valorParcela);
      const proxPagamento = getNextMonth(despesa.proxPagamento);
      setProxPagamento(proxPagamento);

      setIsLoading(false);
   }, []);

   const limparForm = () => {
      setDataPagamento(todayDate);
      setValorPago(0);
   };

   const pagarDespesa = async (event) => {
      event.preventDefault();
      const mesPagamento = getMonth(proxPagamento);
      const qtParcelasPagas = foundDespesa.qtParcelasPagas
         ? foundDespesa.qtParcelasPagas + 1
         : 1;

      const status = await editar(
         {
            ultimoPagamento: dataPagamento,
            valorPago,
            ...foundDespesa,
            proxPagamento,
            mesPagamento,
            qtParcelasPagas,
         },
         id
      );

      status === 200 || status === 201
         ? toast.success('Você pagou essa despesa')
         : toast.error('Erro ao pagar despesa');

      limparForm();
   };

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
   return (
      <Layout>
         <H3>Pagar despesa</H3>
         <FormContainer>
            <TextField
               id="despesa"
               label="Despesa"
               value={`${foundDespesa.item}`}
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
               value={`${foundDespesa.recebedor}`}
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
            <TextField
               id="proxPagamento"
               label="Próxima pagamento em"
               type="date"
               value={proxPagamento}
               onChange={(event) => setProxPagamento(event.target.value)}
               size="small"
               sx={{ m: '0.3rem' }}
            />
            <Button
               variant="contained"
               className="btn-custom btn-grid"
               sx={{ m: '0.3rem' }}
               onClick={(e) => pagarDespesa(e)}
               disabled={proxPagamento === '' || proxPagamento === ''}
            >
               Pagar
            </Button>
         </FormContainer>
         <ToastContainer autoClose={1500} />
      </Layout>
   );
}
