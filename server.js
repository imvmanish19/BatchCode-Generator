const express = require('express');
const app = express();

app.set('view engine','hbs');
app.set('views','public')

module.exports = {
    app
}