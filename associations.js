const {db,DataTypes,Op} = require('./connect');

//Associations

Batch.belongsTo(Course);
Batch.belongsTo(Center);
Batch.belongsTo(Season);

Course.hasMany(Batch);
Center.hasMany(Batch);
Season.hasMany(Batch);

// db.sync()
