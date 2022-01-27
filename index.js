import express from 'express';
import mongoose  from 'mongoose';
// import cors from 'cors';
import postRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/posts', postRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 5000 ;
const password = "7K253KysEZsIkzQQ";
const name = "blogProject";
const DB_URL = `mongodb+srv://${name}:${password}@cluster0.qnlqs.mongodb.net/blogProject?retryWrites=true&w=majority;`

app.get("/", (req,res)=>{
    res.send('Hello to blog project api')
})

mongoose.connect(DB_URL)
        .then (() => app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`)))
        .catch ((error) => console.log(`${error} did not connect`)) ;

