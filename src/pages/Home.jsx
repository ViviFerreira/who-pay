import Layout from 'components/Layout';
import { H3 } from 'components/typography/H3';
import { P } from 'components/typography/P';
import Button from 'components/Button';

export default function Home() {
   return (
      <Layout>
         <H3>Bem vinda(a) ao WHO PAY</H3>
         <P>
            Esse app foi desenvolvido para facilitar a vida de quem mensalmente
            precisa pagar água, luz, energia, fatura do cartão, fora outras
            despesas e precisa se lembrar de todas elas.
         </P>
         <P>
            Utilizando o who pay você apenas precisa registrar sua despesa e
            informar quando e como irá pagar. Mensalmente essa despesa é
            renovada e você só precisa acompanhar o dashbord de despesas para
            saber as suas despesas em aberto.
         </P>

         <Button style={{ m: '2rem' }}>Comecar</Button>
      </Layout>
   );
}
