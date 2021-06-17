const CategoryRepository = require('../repositories/categoryRepository');
const repo = new CategoryRepository();

const getAllCategories = async() => {
    return await repo.getAllCategories()
}

const getCategoryById = async(id) => {
    return await repo.getCategoryById(id)
}

const getCategoryByName = async(name) => {
    return await repo.getCategoryByName(name)
}

const createCategory = async(category) =>{
    return await repo.saveCategory(category)
}

const updateCategory = async (category, id)=> {
    return await repo.updateCategory(category, id)
}

const deleteCategory = async (id)=> {
    return await repo.deleteCategory(id)
}

module.exports = {
    getCategoryByName,
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}