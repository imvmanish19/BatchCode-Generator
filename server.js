const express = require('express');
const app = express();
const {Center,Season,Course} = require('./model')

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
});

module.exports = {
    app
}