const {Router} = require('express');
const {
    getAllPosts,
    getPostById, 
    createPost, 
    updatePost, 
    deletePost
    } = require('../controllers/posts');
const router = Router();
const {
    postRequestValidations,
    getByIdRequestValidations,
    patchRequestValidations,
    deleteRequestValidations
} = require('../middleware/posts');

router.get('/', getAllPosts);
router.get('/:id', getByIdRequestValidations, getPostById);
router.post('/', postRequestValidations, createPost);
router.patch('/:id', patchRequestValidations, updatePost);
router.delete('/:id', deleteRequestValidations, deletePost);

module.exports = router;