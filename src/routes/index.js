const express = require('express'),
      postCtrl = require('../controllers/post');
      userCtrl = require('../controllers/user')

      
const Router = express.Router();

Router.get('/', (req, res) => {
    res.redirect('/posts')
})

Router.get('/posts', postCtrl.getAll);
Router.get('/posts', postCtrl.getAll);
Router.get('/posts/edit/:id', postCtrl.edit);
Router.get('/posts/delete/:id', postCtrl.remove);
Router.get('/posts/add', postCtrl.add);
Router.post('/posts', postCtrl.create);
Router.put('/posts', postCtrl.update);

Router.get('/signin', userCtrl.signIn);

module.exports = Router;