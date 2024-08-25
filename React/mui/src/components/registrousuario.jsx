import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Snackbar, Alert } from '@mui/material';

function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorContraseña, setErrorContraseña] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      setUsuarios(JSON.parse(usuariosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const validarNombre = () => {
    if (nombre.trim() === '') {
      setErrorNombre('El nombre es requerido');
    } else {
      setErrorNombre('');
    }
  };

  const validarCorreo = () => {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
      setErrorCorreo('El correo no es válido');
    } else {
      setErrorCorreo('');
    }
  };

  const validarTelefono = () => {
    const regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(telefono)) {
      setErrorTelefono('El teléfono debe tener 10 dígitos');
    } else {
      setErrorTelefono('');
    }
  };

  const validarContraseña = () => {
    if (contraseña.length < 8) {
      setErrorContraseña('La contraseña debe tener al menos 8 caracteres');
    } else {
      setErrorContraseña('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validarNombre();
    validarCorreo();
    validarTelefono();
    validarContraseña();
    if (!errorNombre && !errorCorreo && !errorTelefono && !errorContraseña) {
      const nuevoUsuario = {
        nombre,
        correo,
        telefono,
        contraseña,
      };
      setUsuarios([...usuarios, nuevoUsuario]);
      setOpenSnackbar(true);
      setNombre('');
      setCorreo('');
      setTelefono('');
      setContraseña('');
    } else {
      setOpenErrorSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
  };

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
				padding: 2,
			}}
		>
			<Box sx={{ maxWidth: 'sm', width: '100%'}}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">Registrate</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Nombre"
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							onBlur={validarNombre}
							error={errorNombre !== ''}
							helperText={errorNombre}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Correo"
							value={correo}
							onChange={(e) => setCorreo(e.target.value)}
							onBlur={validarCorreo}
							error={errorCorreo !== ''}
							helperText={errorCorreo}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Teléfono"
							value={telefono}
							onChange={(e) => setTelefono(e.target.value)}
							onBlur={validarTelefono}
							error={errorTelefono !== ''}
							helperText={errorTelefono}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Contraseña"
							type="password"
							value={contraseña}
							onChange={(e) => setContraseña(e.target.value)}
							onBlur={validarContraseña}
							error={errorContraseña !== ''}
							helperText={errorContraseña}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" onClick={handleSubmit} fullWidth>
							Registrar
						</Button>
					</Grid>
					<Snackbar
						open={openSnackbar}
						autoHideDuration={6000}
						onClose={handleCloseSnackbar}
					>
						<Alert severity="success">Usuario registrado con éxito!</Alert>
					</Snackbar>
          <Snackbar
            open={openErrorSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseErrorSnackbar}
          >
            <Alert severity="error">Error al registrar, por favor revise los campos</Alert>
          </Snackbar>
				</Grid>
			</Box>
		</Box>
	);
}

export default RegistroUsuario;
