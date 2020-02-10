import axios from 'axios'

export default class UsuarioService {

    constructor() {
        this._url = 'http://localhost:3001'
    }

    async login(dados) {

        return await new Promise((resolve, reject) => {

            axios.post(`${this._url}/login`, dados)
                .then(success => {

                    if (success.data === "Nenhum usuário encontrado.")
                        return reject('E-mail/Senha Incorretos.')

                    localStorage.setItem('token', JSON.stringify(success.data))
                    return resolve(success.data)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async create(dados) {

        return await new Promise((resolve, reject) => {

            axios.post(`${this._url}/usuario`, dados)
                .then(success => {
                    return resolve("Usuário cadastrado com sucesso!")
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async find() {

        return await new Promise((resolve, reject) => {

            axios.get(`${this._url}/usuario`)
                .then(success => {
                    return resolve(success.data)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }



}