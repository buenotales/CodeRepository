const dao = require('../dao/usuarioDao')

class UsuarioController {

    async create(req, res) {

        await dao.create(req.body)
            .then(success => res.status(200).json(success))
            .catch(error => res.send())

    }
    async login(req, res) {

        await dao.login(req.body)
            .then(success => res.status(200).json(success))
            .catch(error => res.send())

    }
    async find(req, res) {

        await dao.find()
            .then(success => res.status(200).json(success))
            .catch(error => res.send())

    }

}

module.exports = new UsuarioController