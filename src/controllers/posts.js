const express = require('express');
const Post = require('../models/Post');
const PostService = require('../services/postServices');
const Succes= require('../handlers/successHandler');
const logger = require('../loaders/logger');
const { post } = require('../routes/posts');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllPosts = async (req, res, next) => {  
  try {
    
    const posts = await PostService.getAllPosts()
    res.json(new Succes(posts));
    
  } catch (error) {
    next(error)
  }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const getPostById = async (req, res, next) => {  
   try {
     let {id} = req.params;
     const post = await PostService.getPostById(id)
     res.json(new Succes(post));
     
   } catch (error) {
     next(error)
   }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createPost = async (req, res, next) => {
  try {
    const post  = req.body;
    post.categoria = req.category.id; //in the middleware was created req.category
    const postCreated = await PostService.createPost(post);
    res.status(201).json(new Succes(postCreated));
    
  } catch (error) {
    next(error)
  }
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePost = async (req, res, next) => {
  try {
    let {id} = req.params;
    let post = req.body;
    const postUpdated = await PostService.updatePost(post, id)
    res.json(new Succes(postUpdated));
  } catch (error) {
    next(error)
  }
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deletePost = async (req, res, next) => {
  try {
    let {id} = req.params;
    const postDeleted = await PostService.deletePost(id)
    res.json(new Succes(postDeleted));
    
  } catch (error) {
    next(error)
  }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
 
