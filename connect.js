const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const Op = Sequelize.Op;

const db = new Sequelize('testdb2','alien','helloworld',{
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
.then(() => console.log("Connected Successfully"))
.catch((e) => console.error(e));

exports = module.exports ={
    db,
    DataTypes,
    Op
}