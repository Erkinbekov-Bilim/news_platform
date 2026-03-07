import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#212121',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
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
              }}
            >
              News
            </Typography>
            <Button
              component={Link}
              to="/news/add"
              sx={{
                background: grey[50],
                color: grey[900],
                padding: '5px 20px',
                borderRadius: 5,
              }}
            >
              add new post
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
