const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Obtener todos los items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear un nuevo item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware para obtener un item por ID
async function getItem(req, res, next) {
    let item;
    try {
        item = await Item.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.item = item;
    next();
}


// Actualizar un item
router.put('/:id', getItem, async (req, res) => {
    if (req.body.name != null) {
        res.item.name = req.body.name;
    }

    try {
        const updatedItem = await res.item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un item
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.remove();
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
