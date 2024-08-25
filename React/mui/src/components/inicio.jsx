import React, { useState } from 'react';
import { 
	Container, 
	Grid, 
	Typography, 
	Card, 
	CardMedia, 
	CardContent, 
	CardActions, 
	Button 
} from '@mui/material';

function Inicio() {
	const productos = [
		{
			id: 1,
			imagen: 'https://via.placeholder.com/300x200',
			titulo: 'Producto 1',
			descripcion: 'Descripción del producto 1',
			precio: 100
		},
		{
			id: 2,
			imagen: 'https://via.placeholder.com/300x200',
			titulo: 'Producto 2',
			descripcion: 'Descripción del producto 2',
			precio: 200
		},
		{
			id: 3,
			imagen: 'https://via.placeholder.com/300x200',
			titulo: 'Producto 3',
			descripcion: 'Descripción del producto 3',
			precio: 300
		},
	];

	const [mostrarPrecio, setMostrarPrecio] = useState(false);

	return (
		<Container maxWidth={false} sx={{ padding: 0, paddingTop: 8 }}>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<img 
						src="https://via.placeholder.com/3500x300" 
						alt="Banner de la empresa" 
						style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
					/>
					<Typography variant="h3" component="h6" align="center" sx={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', color: '#000000' }}>
                        Deleita tu paladar con la comida mas grasosa de Medellín
					</Typography>
				</Grid>
				<Grid item xs={12} container spacing={2} sx={{ padding: 4 }}>
					{productos.map((producto) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
							<Card sx={{ maxWidth: 345, margin: 'auto' }}>
								<CardMedia
									component="img"
									height="140"
									image={producto.imagen}
									alt="Imagen del producto"
									sx={{ objectFit: 'cover' }}
								/>
								<CardContent sx={{ padding: 2 }}>
									<Typography gutterBottom variant="h5" component="div">
										{producto.titulo}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{producto.descripcion}
									</Typography>
									{mostrarPrecio && (
										<Typography variant="h6" color="text.primary">
											Precio: ${producto.precio}
										</Typography>
									)}
								</CardContent>
								<CardActions sx={{ justifyContent: 'center' }}>
									<Button size="small" onClick={() => setMostrarPrecio(true)}>
										Ver más
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Container>
	);
}

export default Inicio;