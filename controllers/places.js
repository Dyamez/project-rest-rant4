const router = require('express').Router();
const places = require('../models/places');

router.get('/', (req, res) => {
    res.render('places/index', { places })
});

router.post('/', (req, res) => {
  console.log(req.body)
  Place.create(req.body)
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
  res.redirect('/places')
})

//show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})
  
module.exports = router;