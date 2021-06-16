const {Router} = require('express');
const {
    getAllPosts,
    getPost, 
    createPost, 
    updatePost, 
    deletePost
    } = require('../controllers/posts');
const router = Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPost);
router.post('/posts', createPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;