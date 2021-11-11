const router = require("express").Router();
const Book = require("../models/Book.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/lista-de-libros", (req, res, next) => {

  Book.find()
    .then(allTheBooks => res.render("book-list", { allTheBooks }))
    .catch(err => console.log(err))

});


//Los dos puntos indican que se debe recoger esa parte de la URL como un param
router.get("/detalles/:id", (req, res, next) => {

  //Se puede acceder a los params mediante req.params
  // const idParam = req.params.id
  const { id } = req.params

  Book.findById(id)
    .then(book => res.render("book-details", book))
    .catch(err => console.log(err))

});

//1. Crear la vista del formulario

router.get("/nuevo-libro", (req, res) => {
  res.render("new-book")
})

//4. Crear el endpoint para crear libros.

router.post("/nuevo-libro", (req, res) => {
  //autor
  //5. Realizar las operaciones en la BBDD o la lógica de negocio
  Book.findOneAndUpdate(req.body)
    //6. Decidir que vista vamos a renderizar
    .then(book => res.render("book-details", book))
    .catch(err => console.log(err))



})


module.exports = router;
