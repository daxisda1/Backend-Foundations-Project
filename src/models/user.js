const Sequelize = require('sequelize'),
      sequelize = require('./config');


const User = sequelize.define("User", {
    UserId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    FirstName: Sequelize.STRING,
    LastName: Sequelize.STRING,
    username: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: Sequelize.STRING
});

module.exports = User