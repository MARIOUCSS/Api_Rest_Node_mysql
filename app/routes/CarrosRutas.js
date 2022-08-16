const route=require('express').Router();
const {getcars}=require('../controllers/CarroControlador')
//En la ruta inicial vas a ejecutar el metodo get
//y vas a relaizar una determinada accion

route.route('/').get(getcars);


module.exports=route;