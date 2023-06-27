const router = require('express').Router();
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
});

router.get('/new', (req, res) => {
    res.render('places/new')
});
/*
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
});
*/

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      req.body.pic = 'https://place-puppy.com/300x300'
    }
    if (!req.body.city) {
      req.body.city = 'Death Valley'
    }
    if (!req.body.state) {
      req.body.state = 'Parts Unknown'
    }
    places.push(req.body)
    //res.send('POST /places')
    res.redirect('/places')
  })
  
module.exports = router;