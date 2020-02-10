const upload = require('./uploadRoute')
const usuarioRoute = require('./usuarioRoute')

module.exports = (app) => {

    upload(app)
    usuarioRoute(app)

}