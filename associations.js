const {db,DataTypes,Op} = require('./connect');
const {Batch,Center,Course,Teacher,Season} = require('./model')
//Associations

Batch.belongsTo(Course);
Batch.belongsTo(Center);
Batch.belongsTo(Season);

Course.hasMany(Batch);
Center.hasMany(Batch);
Season.hasMany(Batch);

// db.sync({force: true})
