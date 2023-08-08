const express = require('express');
const router = express.Router();
const controllers = require(`./controller`);

//Ejercicio 1
router.get(`/api`, controllers.getApi);
//Ejercicio 2
router.get(`/api/suma`, controllers.getApiSuma);
//Ejercicio 3
router.get(`/api/usuario/:usuario`, controllers.getApiUsuario);
//Ejercicio 4
router.get(`/api/swapi/:idPersonaje`, controllers.getApiPersonaje);
//Ejercicio 5
router.put(`/api/body`, controllers.putBody)


module.exports = router;