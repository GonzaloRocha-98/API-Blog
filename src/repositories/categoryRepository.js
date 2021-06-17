const Category = require('../models/Category');
const {Op} = require('sequelize');
class CategoryRepository {
    constructor(){

    }

    async getAllCategories(){
        return await Category.findAll();
    }

    async getCategoryById(id){
        return await Category.findByPk(id)
    }

    async getCategoryByName(name){
        return await Category.findOne({where: {nombre: name}})
    }

    async saveCategory(category){
        return await Category.create(category)
    }

    async updateCategory(category,id){
        return await Category.update(category, {
            where: {
                id
            }
        })
    }

    async deleteCategory(id){
        return await Category.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = CategoryRepository