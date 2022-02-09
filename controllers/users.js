import User from '../models/user.js';

export const signIn= async (req, res)=>{
    if(!"firstName" in req.body ||
       !"lastName" in req.body ||
       !"email" in req.body || 
       !"password"in req.body ){
        res.status(400).json({message: "Please provide first name, last name,email and password"})
     }
    const { firstName, lastName, email, password } = req.body;
    try{
       const oldUser = await User.findOne({email: email});
       if(oldUser){
          return res.status(400).json({message: "User already exist"})
       }
       const result = new User({firstName,lastName,email,password});
       await result.save();
       res.staus(201).json({data: result});
    }catch(err){
        res.status(409).json({message: err.message})
    }
}

export const signUp = async(req, res)=>{
    res.status(200).json({data: "sign up success"})
}