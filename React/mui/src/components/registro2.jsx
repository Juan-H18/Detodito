import React, { useState } from 'react';
import { Box, TextField, Grid, Card, CardContent, FormControl, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const dataEspecialist = [
	{
		id: 1,
		descriptions: 'Frontend',
	},
	{
		id: 2,
		descriptions: 'Backend',
	},
	{
		id: 3,
		descriptions: 'Frontend & Backend',
	}
];

function Registro2() {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		rol: 0
	});

	const { firstname, lastname, rol } = formData;

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		setLoading(true);
		alert(`Datos del formulario:\nNombre: ${firstname}\nApellido: ${lastname}\nRol: ${rol !== 0 ? dataEspecialist.find(d => d.id === rol)?.descriptions : 'Ninguno'}`);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

	return (
		<div className="App">
			<header className="App-header">
				<Typography component="h2" variant="h2">Registro de Usuario</Typography>
				<Box my={2}>
					<Card>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										label="First Name"
										type="text"
										name="firstname"
										value={firstname}
										onChange={handleOnChange}
										margin="dense"
										fullWidth
										variant="outlined"
										helperText={firstname === '' ? "Campo obligatorio" : ""}
										error={firstname === ''}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label="Last Name"
										type="text"
										name="lastname"
										value={lastname}
										onChange={handleOnChange}
										margin="dense"
										fullWidth
										variant="outlined"
										helperText={lastname === '' ? "Campo obligatorio" : ""}
										error={lastname === ''}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl sx={{ width: '100%' }}>
										<InputLabel id="rol-select-label">Rol Develop</InputLabel>
										<Select
											labelId="rol-select-label"
											name="rol"
											value={rol}
											fullWidth
											label="Rol Develop"
											onChange={handleOnChange}
										>
											<MenuItem value={0}>Seleccione</MenuItem>
											{dataEspecialist.map(d => (
												<MenuItem key={d.id} value={d.id}>{d.descriptions}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<Box sx={{ '& > button': { m: 1 } }}>
										<LoadingButton
											size="small"
											onClick={handleSubmit}
											loading={loading}
											variant="outlined"
											disabled={!loading && (firstname === '' || lastname === '' || rol === 0)}
										>
											Enviar
										</LoadingButton>
									</Box>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Box>
			</header>
		</div>
	);
}

export default Registro2;
