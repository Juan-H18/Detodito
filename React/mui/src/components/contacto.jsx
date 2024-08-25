import React, { useState } from 'react';
import { Container, Box, Grid, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && correo && comentario) {
      const nuevoComentario = {
        nombre,
        correo,
        comentario,
      };
      setComentarios([...comentarios, nuevoComentario]);
      setNombre('');
      setCorreo('');
      setComentario('');
      setOpenSnackbar(true);
      setMensajeError('');
    } else {
      setOpenSnackbar(true);
      setMensajeError('Por favor, llene todos los datos para enviar el mensaje');
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    }}
  >
    <Container maxWidth="sm" >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Contáctanos
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Comentario"
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        {mensajeError ? (
          <Alert severity="error">{mensajeError}</Alert>
        ) : (
          <Alert severity="success">Mensaje enviado</Alert>
        )}
      </Snackbar>
    </Container>
    </Box>
  );
}

export default Contacto;