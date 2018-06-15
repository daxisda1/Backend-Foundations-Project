const Sequelize = require('sequelize'),
    path = require('path');


const sequelize = new Sequelize(null, null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../data/app.sqlite'),
    operatorsAliases: false
});

// Sync all models that aren't already in the database
sequelize.sync()

module.exports = sequelize