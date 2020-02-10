const uploadModel = require('../models/uploadModel')

class UploadDao {

    async create(dados) {

        return await new Promise((resolve, reject) => {

            uploadModel.create(dados)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async findById(id) {

        return await new Promise((resolve, reject) => {

            uploadModel.findById(id)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async find(dado) {

        return await new Promise((resolve, reject) => {

            // uploadModel.find({ $or: [{ descricao: dado }, { conteudo: dado }] })
            //     .then(success => {
            //         return resolve(success)
            //     })
            //     .catch(error => {
            //         return reject(error)
            //     })

            uploadModel.find({
                $or: [
                    // {
                    //     autor: {
                    //         $regex: dado,
                    //         $options: 'ig',
                    //     }
                    // },
                    {
                        descricao: {
                            $regex: dado,
                            $options: 'ig',
                        }
                    },
                    {
                        conteudo: {
                            $regex: dado,
                            $options: 'ig',
                        }
                    },
                    {
                        linguagem: {
                            $regex: dado,
                            $options: 'ig',
                        }
                    },
                    {
                        arquivo: {
                            $regex: dado,
                            $options: 'ig',
                        }
                    }
                ]
            })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async myuploads(id) {

        return await new Promise((resolve, reject) => {

            uploadModel.find({ autor: id })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

}

module.exports = new UploadDao