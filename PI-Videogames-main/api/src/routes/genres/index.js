const express = require('express');
const { getDataGenre } = require('../../controllers/Genre.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getDataGenre)
// router.use('/:id',getId)

module.exports = router;