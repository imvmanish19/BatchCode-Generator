const express = require('express');
const app = express();
const {Center,Season,Course,Batch} = require('./model')
const {db} = require('./connect');

app.set('view engine','hbs');
app.set('views','public')

app.get('/batchcode',async (req,res) => {
    try {
        const centers = await Center.findAll();
        const seasons = await Season.findAll();
        const courses = await Course.findAll();
        const years = [2020,2021,2022];
        res.render('index',{
            centers,
            seasons,
            courses,
            years
        })
    }
    catch(e) {
        console.error(e);
    }
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/batchcode',async (req,res,next) => {
    let batchcode = '';
    //WDPP18S1 Format
    batchcode+=req.body.course
    batchcode+=req.body.center
    batchcode+=req.body.year.substr(2)
    batchcode+=req.body.season
    batchcode+=req.body.batchno;
    res.send(batchcode)
    try {
        const batch = Batch.create({
            code: batchcode,
            year: req.body.year,
            start: Date.parse(req.body.start),
            end: Date.parse(req.body.end),
            seasonId: req.body.season,
            courseId: req.body.course,
            centerId: req.body.course
        });
    }
    catch(e) {
        console.error(e);
    }
});

app.get('/batchdata',async (req,res) => {
    const data = await Batch.findAll()
    res.render('table',{
        data
    })
});

module.exports = {
    app
}