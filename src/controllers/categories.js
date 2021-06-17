const express = require('express');
const CategoryService = require('../services/categoryServices');
const Succes = require('../handlers/successHandler')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllCategories = async (req, res, next) => {  
  try {
    const categories = await CategoryService.getAllCategories()
    res.json(new Succes(categories));
    
  } catch (error) {
    next(error)
  }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const getCategory = async (req, res, next) => {  
  try {
    let {id} = req.params;
    const category = await CategoryService.getCategoryById(id)
    res.json(new Succes(category));
    
  } catch (error) {
    next(error)
  }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createCategory = async (req, res, next) => {
  try {
    let category  = req.body;
    const categoryCreated = await CategoryService.createCategory(category);
    res.status(201).json(new Succes(categoryCreated));
    
  } catch (error) {
    next(error)
  }
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updateCategory = async (req, res, next) => {
  try {
    let {id} = req.params;
    let category = req.body;
    const categoryUpdated = await CategoryService.updateCategory(category, id)
    res.json(new Succes(categoryUpdated));
    
  } catch (error) {
    next(error)
  }
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deleteCategory = async (req, res, next) => {
  try {
    let {id} = req.params;
    const categoryDeleted = await CategoryService.deleteCategory(id)
    res.json(new Succes(categoryDeleted));
    
  } catch (error) {
    next(error)
  }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}
 
