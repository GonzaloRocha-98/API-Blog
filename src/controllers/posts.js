const express = require('express');
const PostService = require('../services/postServices');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllPosts = (req, res) => {  
    const post = PostService.getAllPosts()
    res.json(post);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const getPost = (req, res) => {  
  const post = PostService.getPost()
  res.json(post);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createPost = (req, res) => {
  const post   = req.body;
  post.id = 1000;
  const result ={
    message: 'post created',
    post
  };
  res.status(201).json(result);
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePost = (req, res) => {
  const {id} = req.params;
  const post = req.body;
  post.id = id;
  const result = {
    message: 'post updated',
    post,
  };
  res.json(result);
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deletePost = (req, res) => {
  const id = req.params.id;
  //const { id } = req.params;

  const result = {
    message: `post with id: ${id} deleted`
  }

  res.json(result);
};

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
}
 
