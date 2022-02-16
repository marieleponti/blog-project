import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    category: {type: String, require: true},
    public: {type:Boolean, require: false}, // TODO default: false
    title: {type: String, require: true},
    image:{type: String, require: false}, // TODO check how to add image to mangodb
    message: {type: String, require: true},
    creator:{type: String},     
    tags: {type: [String], require: false},
    createdAt: {
        type: Date,
        default: new Date()
    },
});
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

