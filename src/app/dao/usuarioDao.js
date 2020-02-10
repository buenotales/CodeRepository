const usuarioModel = require('../models/usuarioModel')

class UsuarioDao {

    // constructor() {
    //     this._model = uploadModel
    // }

    async create(dado) {        

        return await new Promise((resolve, reject) => {

            usuarioModel.create(dado)
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async login(dado) {        

        return await new Promise((resolve, reject) => {

            usuarioModel.findOne({
                email: dado.email,
                senha: dado.senha
            })
                .then(success => {

                    if(success === null)
                        return resolve("Nenhum usuário encontrado.")

                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

    async find() {        

        return await new Promise((resolve, reject) => {

            usuarioModel.find()
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }

}

module.exports = new UsuarioDao