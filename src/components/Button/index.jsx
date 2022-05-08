import { Button } from '@mui/material';

export default ({ children, handle, validated = true, style }) => (
   <Button
      variant="contained"
      className="btn-custom"
      sx={{ ...style }}
      onClick={handle}
      disabled={!validated}
   >
      {children}
   </Button>
);
