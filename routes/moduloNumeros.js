var express = require('express');
var router = express.Router();

//Función para calcular el módulo
const calcularModulo = (n1, n2) => { 
  return modulo = n1%n2;
}

/* GET users listing. */
 
router.get('/', function(req, res, next) {
  res.send('¿Cuánto es el módulo entre dos números?');
});

//Recibir las variables numero_1 y numero_2 por medio POST enviado desde el body

router.post('/', (req, res) => {
  let n1 = parseInt(req.body["numero_1"]);
  let n2 = parseInt(req.body["numero_2"]);
  res.send(`El módulo entre ${n1} y ${n2} es ${calcularModulo(n1, n2)}`)
})

module.exports = router;