const {db} = require('./connect')
const {Center,Course,Batch,Season,Teacher} = require('./model');

const seed = async () => {
    try {
        db.sync({alter: true});

        await Center.bulkCreate([
            {id:'PP',name: 'Pitampura',city: 'New Delhi'},
            {id:'NO',name: 'Noida',city: 'New Delhi'},
            {id:'GN',name: 'Greater Noida',city: 'New Delhi'},
            {id:'MA',name: 'Mathikere',city: 'Bangalore'}
        ],{
            ignoreDuplicates: true
        });

        await Course.bulkCreate([
        {id: 'AD',name: 'Android Development'},
        {id: 'WD',name: 'Web Development'}
        ],{
            ignoreDuplicates: true
        });

        await Season.bulkCreate([
            {id: 'SS',name: 'Spring'},
            {id: 'WI',name: 'Winter'},
            {id: 'SU',name: 'Summer'}
        ], {
            ignoreDuplicates: true
        })
    }
    catch(e) {
        console.log(e);
    }
}

seed();