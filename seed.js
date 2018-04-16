const db = require('./server/db');
const Instrument = require('./server/db/models/instrument');

const instruments = [
  {
    name: 'Fender Stratocaster',
    type: 'guitar',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd7Zb9NI_Wxl02evVl23rfZXvHgzzo97rjzKqMxmq5Wxxa9JG',
    cost: 515,
    category: 'string',
    description: 'Lorem ipsum'
  },
  {
    name: 'Alexa Bassoon',
    type: 'bassoon',
    imageUrl: 'https://www.forrestsmusic.com/images/V-49.jpg',
    cost: 327,
    category: 'woodwind',
    description: 'Lorem ipsum'
  },
  {
    name: 'Alla Drum',
    type: 'drums',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8n5LoSVoCrpqEuIbUE-w7cg_H6XQTdXDQJxPBTy8uceGDPNc',
    cost: 314,
    category: 'percussion',
    description: 'Lorem ipsum'
  },{
    name: 'Mahia Trumpet',
    type: 'trumpet',
    imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products3731-1200x1200-454812.jpg',
    cost: 274,
    category: 'brass',
    description: 'Lorem ipsum'
  },
  {
    name: 'Cecelia Accordian',
    type: 'accordian',
    imageUrl: 'https://www.elderly.com//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p4067329.jpg',
    cost: 666,
    category: 'keyboard',
    description: 'Lorem ipsum'
  }
]

//Here we would have associations 

const seed = () =>
  Promise.all(instruments.map(instrument =>
    Instrument.create(instrument))
  )
//   .then(() =>
//   Promise.all(users.map(user =>
//     User.create(user))
//   )
);

const main = () => {
  console.log('Syncing our awesome db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding this great databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while doing the seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();

// {
//     name: '',
//     type: '',
//     imageUrl: '',
//     cost: ,
//     category: '',
//     description: 'Lorem ipsum'
//   },