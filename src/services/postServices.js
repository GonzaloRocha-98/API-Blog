const PostRepository = require('../repositories/postRepository');
const repo = new PostRepository();

const getAllPosts = async() => {
    return await repo.getAllPosts()
}

const getPostById = async(id) => {
    return await repo.getPostById(id)
}

const createPost = async(post) =>{
    return await repo.savePost(post)
}

const updatePost = async (post, id)=> {
    return await repo.updatePost(post, id)
}

const deletePost = async (id)=> {
    return await repo.deletePost(id)
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}