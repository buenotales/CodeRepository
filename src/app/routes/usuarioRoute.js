const controller = require('../controllers/usuarioController')


module.exports = (app) => {

    app.post('/usuario', controller.create)
    app.get('/usuario', controller.find)

    app.post('/login', controller.login)
    
}