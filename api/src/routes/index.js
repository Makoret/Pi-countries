const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require('./country')
const vacationRoute = require('./vacation')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/country', countryRoute)
router.use('/vacation', vacationRoute)


module.exports = router;
