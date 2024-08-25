import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Link 
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f0f0f0', py: 4, marginTop: '70px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <img src="../images/logo.png" alt="Logo" width={125} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h2" component="h1">
                Perro Come Perro
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Box sx={{ mb: 2, display: 'flex' }}>
                <FacebookIcon />
                <Link href="https://www.facebook.com/" underline="hover" sx={{ ml: 1 }}>
                  Facebook
                </Link>
              </Box>
              <Box sx={{ mb: 2, display: 'flex' }}>
                <InstagramIcon />
                <Link href="https://www.instagram.com/" underline="hover" sx={{ ml: 1 }}>
                  Instagram
                </Link>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <XIcon sx={{ fontSize: 24 }} />
                <Link href="https://www.x.com" underline="hover" sx={{ ml: 1 }}>
                  X
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;