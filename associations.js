const {db,DataTypes,Op} = require('./connect');

const Student = db.create({
    name: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
    
});