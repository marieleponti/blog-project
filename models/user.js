import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require:true},
    savedPosts :{type:[String],require:false},
    repostedPosts : {type:[String], require:false},
    postIds:{type:[String], require:false},
})

var User = mongoose.model('User', userSchema);
export default User;