const Post = require('../models/post');





const getAll = (req, res) => {
    //console.log(':)')

   Post.findAll().then( posts => res.render('posts', {posts}));
}



const getOne = (req, res) => {
    res.render('posts')
}
const add = (req, res) => {
    res.render('post-add')
}
const create = (req, res) => {
    let post = new Post();

    post.Title = req.body.Title;
    post.Description = req.body.Description;
    post.UserId = req.body.UserId;

    console.log('[post]:',post)


    post.save( (err, savedPost) => {
        if( err) res.status(500).send({message: err});
        res.redirect('/posts');
    } )
    res.render('posts')
}
const edit = (req, res) => {
    Post.findById(req.params.id, {raw: true})
        .then(post => {
            console.log('[post]', post);
            res.render('post-add', {post, isEditing: true})
        })
    
}
const update = (req, res, next) => {
    Post.update(
        {Title: req.body.Title, Description: req.body.Description},
        {where: {PostId: req.body.PostId}}
    ).then( () => res.redirect('/posts'))
    
}
const remove = (req, res) => {
    Post.destroy({where: {
        PostId: req.params.id
    }}).then( () => res.redirect('/posts'));
}

module.exports = {
    getAll,
    getOne,
    add,
    create,
    edit,
    update,
    remove
}
