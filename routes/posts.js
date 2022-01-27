import express from 'express';
import auth from "../middleware/auth.js";
import { getPostById, createPost, updatePost,deletePost, savePost } from '../controllers/posts.js';
const router = express.Router();

router.get('/read/:id', getPostById); // read anyone’ public posts
router.post('/create/', auth, createPost); // create posts
router.patch('/update/:id',auth, updatePost);  //edit own posts
router.delete('/delete/:id', auth, deletePost);  // delete own posts 
router.patch ('/save/:id',auth,savePost);      // save and share posts ???? 

export default router;