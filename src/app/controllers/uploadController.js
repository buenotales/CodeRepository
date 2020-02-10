const dao = require('../dao/uploadDao')
const fs = require('fs')

class UploadController {

    async create(req, res) {

        let upload = { autor: req.body.autor, descricao: req.body.descricao, conteudo: req.body.conteudo, linguagem: req.body.linguagem, arquivo: req.file.path }

        dao.create(upload)
            .then(success => res.status(200).json("Upload realizado com sucesso."))
            .catch(error => {
                fs.unlinkSync(req.file.path)
                res.send()
            })
    }

    async findById(req, res) {

        dao.findById(req.params.id)
            .then(success => res.status(200).json(success))
            .catch(error => res.send())

    }

    async download(req, res) {

        dao.findById(req.params.id)
            .then(success => res.status(200).download(success.arquivo))
            .catch(error => res.send())

    }

    //Só funciona para arquivos com texto(qualquer extensão)
    async openDoc(req, res) {

        dao.findById(req.params.id)
            .then(success => fs.readFile(success.arquivo, 'utf-8', (err, data) => res.status(200).end(data)))
            .catch(error => res.send())

    }

    async find(req, res) {

        await dao.find(req.params.dado)
            .then(success => res.status(200).json(success))
            .catch(error => res.send())

    }

    async myuploads(req, res) {

        await dao.myuploads(req.params.id)
            .then(success => res.status(200).json(success))
            .catch(error => res.send())

    }

    //Logica funciona porem nao grava na variavel files
    async findInFile(req, res) {

        const dir = './src/app/uploads/'

        let files = []

        await fs.readdir(dir, (err, paths) => {

            paths.forEach(file => {

                fs.readFile(dir + file, 'utf-8', (err, data) => {

                    if (err) throw err;

                    if (data.search(req.params.dado) !== -1)
                        files.push(file)

                })

            })

        })

        console.log(files)        

        res.send()
    }

}

module.exports = new UploadController