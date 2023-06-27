const React = require('react');
const Def = require('../default');

function index (data) {
  let placesFormatted = places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name}/>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to be Happy or Dance About</h1>
            <div className="row">
            {placesFormatted}
            </div>
        </main>
    </Def>
)
};

let places = [{
  name: 'Jolibee',
  city: 'Las Vegas',
  state: 'NV',
  cuisines: 'Filipino, American',
  pic: 'https://sa.kapamilya.com/absnews/abscbnnews/media/2015/business/11/02/jollibee-logo.jpg'
}, {
  name: 'Ichiza Izakaya',
  city: 'Las Vegas',
  state: 'NV',
  cuisines: 'Japanese',
  pic: 'https://lasvegastoppicks.com/wp-content/uploads/2013/02/003_3-600x400.jpg'
}, {
  name: 'Six Beans Coffee',
  city: 'Barstow',
  state: 'California',
  cuisines: 'coffee, pastries',
  pic: 'https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c9/c5/51/c9c551dd-b4ac-1478-395b-2eb7d2e43e4e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'
}, {
  name: 'Pappadeaux Seafood Kitchen',
  city: 'Phoenix',
  state: 'Arizona',
  cuisines: 'Cajun',
  pic: 'https://img2.10bestmedia.com/Images/Photos/108426/p-pappadeaux-seafood-kitchen-166993-10150305443720978-133486205977-7888957-361239144-n_54_990x660_201405311940.jpg'
}];

module.exports = index