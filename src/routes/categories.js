const {Router} = require('express');
const {
    getAllCategories,
    getCategory, 
    createCategory, 
    updateCategory, 
    deleteCategory
    } = require('../controllers/categories');
const {
    getByIdRequestValidations,
    postRequestValidations,
    patchRequestValidations,
    deleteRequestValidations
} = require('../middleware/categories')
const router = Router();

router.get('/', getAllCategories);
router.get('/:id', getByIdRequestValidations, getCategory);
router.post('/', postRequestValidations, createCategory);
router.patch('/:id', patchRequestValidations, updateCategory);
router.delete('/:id', deleteRequestValidations, deleteCategory);

module.exports = router;