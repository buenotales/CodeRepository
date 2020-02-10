const express = require('express')
const cors = require('cors')
const routes = require('../app/routes')
const requireDir = require('require-dir')
const mongo_connect = require('./mongo-connect')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(morgan('common', {
//     stream: {
//         write: (mensagem) => {
//             logger.info(mensagem)
//         }
//     }n
// }))

mongo_connect()

requireDir('../app/models/')

routes(app)

module.exports = app
