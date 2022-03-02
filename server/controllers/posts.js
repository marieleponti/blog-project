import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPostById = async(req, res)=>{
    if(!"id" in req.params){
        res.status(400).json({message: "missing id"})
    }
    const { id } = req.params;
    try{
        const postMessage = await PostMessage.findById( id );
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`No post with id:${id}`);
        }
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
    if(!"userId" in post){
        return res.status(400).json({message: "missing user id"});
    }
    const newPostMessage = new PostMessage({...post,creator: req.userId, createdAt: new DataTransfer().toISOString()});
    try{
        await newPostMessage.save();
        res.status(201).json({data: newPostMessage});
    }catch(err){
        res.status(409).json({message: "failed to save post"})
    }
}

export const updatePost = async (req, res) => {
    if(!"id" in req.params) {
        return res.status(401).json({message: "please provide an id"})
    }
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(403).json({message: "invalid id"});
    }
    const body = req.body;
    const updatedPost = {category: "category" in body ? body.category: "general", 
    public: "public" in body ? body.public: false,
    title: "title" in body ? body.title: "no title",
    image: "image" in body ? body.image: null,
    message:"message" in body ? body.message : "",
    creator: "creator" in body ? body.creator: "",
    tags: "tags" in body ? body.tags:[]}

    try{
        await PostMessage.findByIdAndUpdate(id, updatedPost);
        res.status(200).json({data: updatedPost});
    }catch(error){
        res.status(403).json({message: error.message})
    }
}

export const getPostById = async(req,res) =>{
    res.status(200).json({data:"get post by Id success"})
}

export const createPost = async (req, res) =>{
    res.status(200).json({data:"create post success"})
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