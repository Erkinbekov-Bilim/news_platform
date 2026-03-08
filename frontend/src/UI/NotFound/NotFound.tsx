import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        fontSize: '2rem',
        padding: '2rem',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: grey[50],
        background: grey[900],
      }}
    >
      Not Found 404 😔
    </Box>
  );
};

export default NotFound;
