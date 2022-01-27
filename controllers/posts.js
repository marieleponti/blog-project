
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