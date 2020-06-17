const {db,DataTypes,Op} = require('./connect');

const Course = db.define('course',{
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20)
    }
});

const Teacher = db.define('teacher', {
    name: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
});

const Center = db.define('center', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
});

const Season = db.define('season', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
});

const Batch = db.define('batch', {
    code: {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end: DataTypes.DATE
});

// db.sync()

exports = module.exports = {
    Season,
    Center,
    db,
    Course,
    Teacher,
    Batch
}