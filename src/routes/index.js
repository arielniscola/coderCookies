const { Router } = require('express')
const path = require('path')
const ProductosAleatorios = require('../contenedor/productosAleatorios')
const router = Router();
const products = new ProductosAleatorios();
//const authMiddleware = require('../middleware/auth')



router.get('/productos-test', async (req, res) => {
   products.dataCreate()
   return res.render('productoTabla', { productos: products.productos})

})

router.get('/', authMiddleware, (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/login', loginMiddleware,(req, res) => {
   res.sendFile(path.join(__dirname, '../public/login.html'))
})

router.post('/login', (req, res) => {
   try {
      req.session.username = req.body.username;
      console.log(req.body);
      res.redirect("/api/index")
   } catch (error) {
      res.json({error: true, message: error})
   }
})


function authMiddleware(req, res, next){
   if(req.session.username){
       next();
   }else {
       res.redirect("/login")
   }
}

function loginMiddleware(req, res, next){
   if(req.session.username){
      res.redirect('/');
   }else{
      next()
   }
}


module.exports = router