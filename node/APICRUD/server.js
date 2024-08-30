const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const itemsRouter = require('./routes/items');

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://hernandez1810:speedunit18@hernandezcluster.bjptp.mongodb.net/db_users?retryWrites=true&w=majority&appName=HernandezCluster')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(express.json());

// Rutas API
app.use('/api/items', itemsRouter);

// Ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
