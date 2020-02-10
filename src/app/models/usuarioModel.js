const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true
    },
    permissao: {
        type: String,
        required: true
    },
    data_criacao: {
        type: Date,
        default: Date.now,
        required: true
    },
    data_modificacao: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model('usuario', UsuarioSchema);