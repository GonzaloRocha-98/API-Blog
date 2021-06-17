const {check} = require('express-validator');
const AppError = require('../../errors/appError');
const CategoryService = require('../../services/categoryServices');
const {validationResult} = require('../commons');

const _nameRequired = check('nombre', 'Name required').not().isEmpty();

const _idRequired = check('id', 'Id required').not().isEmpty();
const _idExist = check('id').custom(
      async (id = '') => {
          const categoryFound = await CategoryService.getCategoryById(id);
          if(!categoryFound){
              throw new AppError('The id is not exist', 400);
          }
      }
  );

const getByIdRequestValidations = [
    _idRequired,
    _idExist,
    validationResult
]

const postRequestValidations = [
    _nameRequired,
    validationResult
]

const patchRequestValidations = [
    _idRequired,
    _idExist,
    validationResult
]

const deleteRequestValidations = [
    _idRequired,
    _idExist,
    validationResult
]

module.exports = {
    getByIdRequestValidations,
    postRequestValidations,
    patchRequestValidations,
    deleteRequestValidations
}