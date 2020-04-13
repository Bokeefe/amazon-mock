const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.json('hello there');
})

app.post('/', (req, res) => {
    console.log(req.body.name)
    res.json(`your name is ` + req.body.name)
})

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('listening on port:', port);
    }
});