const {check} = require('express-validator');
const AppError = require('../../errors/appError');
const CategoryService = require('../../services/categoryServices');
const PostService = require('../../services/postServices')
const {validationResult} = require('../commons');
const path = require('path');

const _titleRequired = check('titulo', 'Title required').not().isEmpty();
const _contentRequired = check('contenido', 'Content required').not().isEmpty();
const _imageRequired = check('imagen', 'Image required').not().isEmpty();
const _categoryRequired = check('categoria', 'Category required').not().isEmpty();

// category field in body is a name, i get the category with that name and create in req 
const _categoryExist = check('categoria').custom(async(name = '', {req}) =>{
    const category = await CategoryService.getCategoryByName(name)
    if(!category){
        throw new AppError(`Category ${name} not exist`, 400);
    }
    req.category = category;
});

const _imageType = check('imagen').custom(
    async(url) => {
        const fileTypes = /jpg|jpeg|png/; 
        if (!fileTypes.test(path.extname(url))) {
            throw new AppError('File type is not supported', 400);
        }
    }
);

const _idRequired = check('id', 'Id required').not().isEmpty();
const _idExist = check('id').custom(
      async (id = '') => {
          const postFound = await PostService.getPostById(id);
          if(!postFound){
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
    _titleRequired,
    _contentRequired,
    _imageRequired,
    _imageType,
    _categoryRequired,
    _categoryExist,
    validationResult
]


const _imageOptionalType = check('imagen').optional().custom(
    async(url) => {
        const fileTypes = /jpg|jpeg|png/; 
        if (!fileTypes.test(path.extname(url))) {
            throw new AppError('Fyle type is not supported', 400);
        }
    }
);

const _categoryOptionalExist = check('categoria').optional().custom(async(name = '', {req}) =>{
    const category = await CategoryService.getCategoryByName(name)
    if(!category){
        throw new AppError(`Category ${name} not exist`, 400);
    }
    req.category = category;
});

const patchRequestValidations = [
    _idRequired,
    _idExist,
    _imageOptionalType,
    _categoryOptionalExist,
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