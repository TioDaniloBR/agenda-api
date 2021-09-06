var Agenda = require('../models/agenda.model');

class AgendaService {
    
    constructor(){
        
    }

    async save(req){
         var {body} = req;
        var dados = [];
        var error = null;

        try{
            await Agenda.create(body, (err, data)=>{
                dados.push(data);
                error = err;
            });
            if(error){
                return "erro: " + error;
            }
        }catch(error){
            console.log(error);
        }
       
        return dados;
    }

    async getAll(){
       var dados = [];
       var error = null;
       try{
           await Agenda.find( (err, data)=>{
               dados = data;
               error = err;
           });
           if(error){
               return "erro: " + error;
           }
       }catch(error){
           console.log(error);
       }
        return dados;
       
    }
    async getOneById(req){
       var dados = [];
       var error = null;
       const {id} = req.params;
       try{
           await Agenda.findOne({_id:id}, (err, data)=>{
               dados.push(data);
               error = err;
           }).lean();
           if(error){
               return "erro: " + error;
           }
           return dados; 
       }catch(error){
        console.log(error);
       }
    }
       

    async getOneByName(req){
        var name = req.params.name
        var dados = [];
        var error = null;
        try{
            await Agenda.findOne({name:name}, (err, data)=>{
                dados.push(data);
                error = err;
            });
            if(error){
                return "erro: " + error;
            }
            return dados;
        }catch(error){
            console.log(error);
        }
     }

    async deleteOneById(req){
        let dados = [];
        let error = null;
        const { body } = req;
        const { _id } = body

        try{
            await Agenda.findOneAndDelete({_id:_id},(err, data) => {
                dados.push(data);
                error = err;
            });
    
            if(error){
                return "erro: " + error;
            }
            return dados;
        }catch(error){
            console.log(error);
        }

    }

    async updateOneById(req){
        let dados = [];
        let error = null;
        const { body } = req;
        const { _id } = body

        try{
            await Agenda.findOneAndUpdate({_id:_id},{$set:body},(err, data) => {
                dados.push(data);
                error = err;
            });
    
            if(error){
                return "erro: " + error;
            }
        }catch(error){
            console.log(error);
        }

        return dados;
    }
}

module.exports = new AgendaService();