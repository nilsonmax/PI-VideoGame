const express = require('express');
const { getAll, getId, postCreate, deleteVideogame } = require('../../controllers/Videogames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getAll)
router.get('/:id', getId)
router.post('/create', postCreate)
router.delete('/delete',deleteVideogame)

module.exports = router;