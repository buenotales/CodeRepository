// import $ from 'jquery']
import axios from 'axios'

export default class FormService {

    constructor() {
        this._url = 'http://localhost:3001'
    }

    async add(dados) {

        return await new Promise((resolve, reject) => {

            axios.post(`${this._url}/upload`, dados)
                .then(res => {
                    return resolve(res.data)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async getById(id) {

        return await new Promise((resolve, reject) => {

            axios.get(`${this._url}/upload/${id}`)
                .then(res => {

                    if (res.data.length === 0)
                        return reject()

                    return resolve(res.data)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async get(dado) {

        return await new Promise((resolve, reject) => {

            axios.get(`${this._url}/search/${dado}`)
                .then(res => {
                    return resolve(res.data)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async myuploads() {

        let id = JSON.parse(localStorage.getItem('token'))._id

        return await new Promise((resolve, reject) => {

            axios.get(`${this._url}/myuploads/${id}`)
                .then(res => {
                    return resolve(res.data)
                })
                .catch(error => {
                    return reject(error)
                })

        })
    }

    async download(id) {

        window.open(`${this._url}/download/${id}`, '_blank')
    }

    async open(id) {

        window.open(`${this._url}/open-doc/${id}`, '_blank')
    }



}