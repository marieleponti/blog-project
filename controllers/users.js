import User from '../models/user.js';

export const signUp= async (req, res)=>{
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
       res.status(201).json({data: result});
    }catch(err){
        res.status(409).json({message: err.message})
    }
}

export const signIn = async(req, res)=>{
    if(!"email" in req.body || !"password" in req.body) {
        return res.status(404).json({message: "Missing email or password"})
    }
     const { email, password } = req.body;
    try{
        const oldUser = await User.findOne({email: email});
        if(!oldUser) {
            return res.status(404).json({message: "user does not exist"});
        }
        const isPasswordCorrect = oldUser.password === password;
        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credential"})
        }
        res.status(201).json({data : oldUser}) 

    }catch(err){
        res.status(409).json({message: err.message})
    }
    
}