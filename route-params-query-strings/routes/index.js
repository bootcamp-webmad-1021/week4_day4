const router = require("express").Router()

// Index page
router.get("/", (req, res, next) => {
  res.render("index");
});


// Route params
router.get('/vuelos/origen/:origin/destino/:destination/fecha/:departure_date', (req, res) => {

  const { origin, destination, departure_date } = req.params

  console.log('---------')
  console.log('Este es el objeto req.params:', req.params)
  console.log('Debes enviar a la BBDD como origen', origin)
  console.log('Debes enviar a la BBDD como destino', destination)
  console.log('Debes enviar a la BBDD como fecha ida', departure_date)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')

})


// Query strings
router.get('/tienda', (req, res) => {
  http://localhost:3000/tienda?prenda=pantalon&temporada=verano&talla=M&color=rojo
  console.log('---------')
  console.log('Este es el objeto de Query Strings:', req.query)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')

})


// Search form: render
router.get('/buscador', (req, res) => res.render('search-form'))


// Search from: manage
router.get('/resultados', (req, res) => {
  console.log("He sido llamado por el formulario y me ha enviado esta query: ", req.query)
  const searchDetails = req.query

  res.render('search-results', searchDetails)

})





// Login form: render
// Este es el endpoint que te pinta la página del login
router.get('/iniciar-sesion', (req, res) => res.render('login-form'))

// Login form: manage
// Este es el endpoint que recibe los datos de la página de arriba
router.post('/iniciar-sesion', (req, res) => {

  //const username = req.body.username
  //const password = req.body.password
  const { username, password } = req.body

  console.log('---------')
  console.log('Este es el objeto req.body:', req.body)
  console.log('Debes enviar a la BBDD como nombre de usuario', username)
  console.log('Debes enviar a la BBDD como nombre de password', password)
  console.log('---------')

  res.render('login-results', req.body)
})


module.exports = router