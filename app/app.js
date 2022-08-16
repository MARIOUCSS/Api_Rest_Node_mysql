

const express=require('express');
const port=(process.env.POR||3000);

//Inicio
const app=express()

//settings
app.set('port',port)
//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require('./routes/CarrosRutas'))
module.exports=app;