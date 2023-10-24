var express = require('express');
var router = express.Router();

//Función para determinar si es PAR o IMPAR
const esPar = (number) => { 
  return number % 2 == 0 ? "par" : "impar";
}

/* GET users listing. */
 
router.get('/', function(req, res, next) {
  res.send('¿Es par o impar?');
});

//Recibir variable number por medio POST enviado desde el body

router.post('/', (req, res) => {
  let number = parseInt(req.body["number"]);
  res.send(`El número ${number} es ${esPar(number)}`)
})


module.exports = router;
