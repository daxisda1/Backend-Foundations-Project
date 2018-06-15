const User = require('../models/user');

const signIn = (req, res) => {
    //console.log(':)')

   User.findAll().then( users => res.render('signin', {users}));
}


module.exports = {
    signIn
}