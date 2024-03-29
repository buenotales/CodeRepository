const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, "uploads/")
	},
	filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname))
        // cb(null, file.fieldname + '-' + Date.now())
	}
})

const upload = multer({storage})

app.get('/', (req, res) => {
	res.send('Bem Vindo')
})

app.post('/upload', upload.single('file'), (req, res) => {
	res.send('Arquivo recebido')
})

app.listen(3000, () => {
	console.log('Servidor rodando')
})