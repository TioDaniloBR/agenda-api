require('dotenv/config');

var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

require('./src/index')(app);

// const obj = {
//     name:"Atualização1111",
//     email:"teste",
//     phone:"teste"
// }

// const AgendaService = require( './src/services/agenda.service');
// const teste = async () => {
//     const agenda = await AgendaService.save(obj);
//     console.log(agenda)
// }
// teste();
// //AgendaService.getAll();
// const teste = async ()=>{

//     const agenda = await AgendaService.updateOneById(3, obj);
//     console.log(agenda);
// }
// teste();
 

//app.use(routes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}`);
    //let teste = conexao.connection;    
})

module.exports = app;