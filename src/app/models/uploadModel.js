const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema({

    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        // type: String,
        required: true
    },
    favoritos: [{
        type: String
    }],
    descricao: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    linguagem: [{
        type: String,
        required: true
    }],
    arquivo: {
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

module.exports = mongoose.model('upload', UploadSchema);