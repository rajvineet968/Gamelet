const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public/css')))
app.use(express.static(path.join(__dirname, '/public/js')))
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/simon', (req, res) => {
    res.render("simon.ejs");
});

app.get('/dice', (req, res) => {
    res.render("dice.ejs");
});

app.get('/coin', (req, res) => {
    res.render("coin.ejs");
});
