const mysql = require('mysql');
const conexion=mysql.createConnection({
    host: 'localhost',
    user: 'livimoros',
    password: 'livimoros',
    database: 'pruebacrud',
    multipleStatements: true

});

conexion.connect((error)=>{
if(error){
    console.log('error');
}else{
    console.log('correcto');
}

})
module.exports=conexion;