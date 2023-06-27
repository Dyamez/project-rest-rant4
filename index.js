require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))

app.use('/places', require('./controllers/places'));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
   {/*  res.status(404).send('<h1>404 Page</h1>') */}
   res.render('error404')
});
/*
app.get('/', (req, res) => {        //followup
    let places = []
    res.render('places/index', { places })
});
*/
app.listen(process.env.PORT);