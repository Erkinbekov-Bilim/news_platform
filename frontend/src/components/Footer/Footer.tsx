import { Box, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        background: grey[900],
        margin: 'auto',
        clear: 'both',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          to={'/'}
          sx={{
            textTransform: 'uppercase',
            letterSpacing: 5,
            fontSize: 14,
            textDecoration: 'none',
            color: grey[50],
            display: 'flex',
            justifyContent: 'center',
            padding: 3,
          }}
        >
          News
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
