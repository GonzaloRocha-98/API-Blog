const winston = require('winston');
const config = require('../../config');

const transports = [];
transports.push(
    new winston.transports.Console(),
);

const logger = winston.createLogger({
    level: config.log.level,            
    format: winston.format.simple(),             
    transports
})
module.exports = logger;