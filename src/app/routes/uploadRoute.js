const multer = require('multer')
const path = require('path')
const controller = require('../controllers/uploadController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'src/app/uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})

module.exports = (app) => {

    app.post('/upload', multer({ storage }).single('file'), controller.create)
    
    app.get('/upload/:id', controller.findById)

    app.get('/search/:dado', controller.find)

    app.get('/myuploads/:id', controller.myuploads)

    app.get('/download/:id', controller.download)

    app.get('/open-doc/:id', controller.openDoc)
}