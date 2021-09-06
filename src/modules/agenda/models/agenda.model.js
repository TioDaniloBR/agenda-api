var mongoose = require('../../../../mongoose/mongoose.connection');
var Schema = require('mongoose');

var AgendaSchema = Schema.Schema({
    name: {type: String, required: true},
    email: {type: String},
    phone: {type: String},
    createdAt: {type:Date, default: Date.now},
    updatedAt: {type:Date}
});

AgendaSchema.pre('findOneAndUpdate', async function(){
    this.set ({updatedAt: new Date()});
});
module.exports = mongoose.model('agendadanilo', AgendaSchema);