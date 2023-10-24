var express = require('express');
var router = express.Router();

//Función para sumar n primeros números
const sumaNPrimeros = (n) => { 
  return suma = Math.round((n*(n+1))/2);
}

/* GET users listing. */
 
router.get('/', function(req, res, next) {
  res.send('¿Cuánto es la suma de los n primeros números enteros?');
});

//Recibir variable n por medio POST enviado desde el body

router.post('/', (req, res) => {
  let n = parseInt(req.body["n"]);
  res.send(`La suma de los ${n} primeros números enteros es ${sumaNPrimeros(n)}`)
})

module.exports = router;
