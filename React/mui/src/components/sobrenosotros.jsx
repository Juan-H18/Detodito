import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Avatar, 
  Chip 
} from '@mui/material';

function SobreNosotros() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" align="center">
            CONOCENOS
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x200"
              alt="Imagen de la empresa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nuestra misión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nuestra misión es proporcionar servicios de alta calidad a nuestros clientes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x200"
              alt="Imagen de la empresa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nuestra visión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nuestra visión es ser líderes en el mercado de servicios.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SobreNosotros;