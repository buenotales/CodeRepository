const winston = require('winston')

module.exports =  logger = new winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: '',
            level: 'info',
            maxsize: 100000,
            maxFiles: 10
        })
    ]
})