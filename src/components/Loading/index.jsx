import { CircularProgress, Box } from '@mui/material';
import { colorGreen } from 'components/IU/variaveis';
import { H4 } from 'components/typography/H4';

export default ({ style }) => (
   <Box
      sx={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         ...style,
      }}
   >
      <CircularProgress sx={{ color: colorGreen }} />
      <H4>Carregando...</H4>
   </Box>
);
