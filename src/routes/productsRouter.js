const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

const router = express.Router();

// Ruta para obtener todos los productos, con opción de limitar los resultados
router.get('/', getProducts);

// Ruta para obtener un producto específico por su ID
router.get('/:pid', getProductById);

// Ruta para agregar un nuevo producto
router.post('/', addProduct);

// Ruta para actualizar un producto específico por su ID
router.put('/:pid', updateProduct);

// Ruta para eliminar un producto específico por su ID
router.delete('/:pid', deleteProduct);

module.exports = router;