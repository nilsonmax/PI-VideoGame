const express = require('express');
const Videogames = require('../routes/videogames')
const Genres = require('../routes/genres')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', Videogames)
router.use('/genres', Genres)

module.exports = router;
