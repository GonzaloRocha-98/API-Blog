
const {validationResult} = require('express-validator');
const logger = require('../loaders/logger');
const AppError = require('../errors/appError');


const _validationResult = (req, res, next)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new AppError('Validation errors:', 400, errors.errors);  
    }
    next();                   
}


module.exports = {
    validationResult: _validationResult
}