const express = require('express');
const { getAll, getId, postCreate } = require('../../controllers/Videogames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getAll)
router.get('/:id', getId)
router.post('/create', postCreate)

module.exports = router;