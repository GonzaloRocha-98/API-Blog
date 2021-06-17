const Post = require('../models/Post');
const {Op} = require('sequelize');
class PostRepository {
    constructor(){

    }

    async getAllPosts(){
        return await Post.findAll();
    }

    async getPostById(id){
        return await Post.findByPk(id)
    }

    async savePost(post){
        return await Post.create(post)
    }

    async updatePost(post,id){
        return await Post.update(post, {
            where: {
                id
            }
        })
    }

    async deletePost(id){
        return await Post.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = PostRepository