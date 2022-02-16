import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPostById = async(req,res) =>{
    if(!"id" in req.params){
        res.status(400).json({message: "missing id"});
    }
    const { id } = req.params;
    try{
       const postMessage = await PostMessage.findById( id );
       if(!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).send(`No post with id:${id}`);
       }
       res.status(200).json(postMessage)

    }catch(err){
       res.status(404).json({message: err.message})
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
    if(!"userId" in post){
        return res.status(400).json({message: "missing userId "})
    }
    const newPostMessage = new PostMessage({...post,creator: post.userId, createdAt: new Date().toISOString()});
    try{
        await newPostMessage.save();
        res.status(201).json({data: newPostMessage})
    }catch(err){
        res.status(404).json({message: " failed to save post"})
    }
}

export const updatePost = async (req, res) =>{
    res.status(200).json({data: "update post success"})
}

export const deletePost = async (req, res) =>{
    res.status(200).json({data:" delete post by id success"})
}

export const savePost = async (req, res)=>{
    res.status(200).json({data:"save post success"})
}