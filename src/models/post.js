const Sequelize = require('sequelize'),
      sequelize = require('./config');


const Post = sequelize.define("Post", {
    PostId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Title: Sequelize.STRING,
    Description: Sequelize.STRING,
    UserId: Sequelize.INTEGER
});

module.exports = Post