import { CircularProgress, Box } from '@mui/material';
import Layout from 'components/Layout';
import { colorGreen } from 'components/IU/variaveis';
import { H4 } from 'components/typography/H4';

export default () => (
   <Layout>
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <CircularProgress sx={{ color: colorGreen }} />
         <H4>Carregando...</H4>
      </Box>
   </Layout>
);
