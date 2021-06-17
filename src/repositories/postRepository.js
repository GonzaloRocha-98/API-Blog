const Post = require('../models/Post');
const {Op} = require('sequelize');
const Category = require('../models/Category');
class PostRepository {
    constructor(){

    }

    async getAllPosts(){
        return await Post.findAll({
            order: [['fechaDeCreacion', 'DESC']],
            attributes: ['id', 'titulo', 'imagen', 'categoria', 'fechaDeCreacion']
        });
    }

    async getPostById(id){
        return await Post.findByPk(id, {
            attributes: ['id', 'titulo', 'imagen', 'categoria', 'fechaDeCreacion']
        });
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