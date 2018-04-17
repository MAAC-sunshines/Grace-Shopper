const db = require('./server/db');
const { Instrument, Category } = require('./server/db/models');

const instruments = [
  {
    name: 'Fender Stratocaster',
    type: 'guitar',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd7Zb9NI_Wxl02evVl23rfZXvHgzzo97rjzKqMxmq5Wxxa9JG',
    cost: 515,
    categoryId: 1,
    description: 'Lorem ipsum'
  },
  {
    name: 'Alexa Bassoon',
    type: 'bassoon',
    imageUrl: 'https://www.forrestsmusic.com/images/V-49.jpg',
    cost: 327,
    categoryId: 2,
    description: 'Lorem ipsum'
  },
  {
    name: 'Alla Drum',
    type: 'drums',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8n5LoSVoCrpqEuIbUE-w7cg_H6XQTdXDQJxPBTy8uceGDPNc',
    cost: 314,
    categoryId: 3,
    description: 'Lorem ipsum'
  }, {
    name: 'Mahia Trumpet',
    type: 'trumpet',
    imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products3731-1200x1200-454812.jpg',
    cost: 274,
    categoryId: 4,
    description: 'Lorem ipsum'
  },
  {
    name: 'Cecelia Accordian',
    type: 'accordian',
    imageUrl: 'https://www.elderly.com//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p4067329.jpg',
    cost: 666,
    categoryId: 5,
    description: 'Lorem ipsum'
  }
]

const categories = [
  {
    name: 'string',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd7Zb9NI_Wxl02evVl23rfZXvHgzzo97rjzKqMxmq5Wxxa9JG',
    description: 'String instruments are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.'
  },
  {
    name: 'woodwind',
    imageUrl: 'https://www.forrestsmusic.com/images/V-49.jpg',
    description: 'Woodwind instruments are a family of musical instruments within the more general category of wind instruments. There are two main types of woodwind instruments: flutes and reed instruments (otherwise called reed pipes). Woodwinds produce sound by splitting an exhaled air stream on a sharp edge, such as a reed or a fipple.'
  },
  {
    name: 'percussion',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8n5LoSVoCrpqEuIbUE-w7cg_H6XQTdXDQJxPBTy8uceGDPNc',
    description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater; struck, scraped or rubbed by hand; or struck against another similar instrument.'
  },
  {
    name: 'brass',
    imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products3731-1200x1200-454812.jpg',
    description: `A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player's lips. Brass instruments are also called labrosones, literally meaning "lip-vibrated instruments".`
  },
  {
    name: 'keyboard',
    imageUrl: 'https://www.elderly.com//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p4067329.jpg',
    description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers. The most common of these are the piano, organ, and various electronic keyboards, including synthesizers and digital pianos.'
  }
]

//Here we would have associations

const seed = () =>
  Promise.all(categories.map(category =>
    Category.create(category)
  ))
    .then(() =>
      Promise.all(instruments.map(instrument =>
        Instrument.create(instrument)
      ))
    )
//   .then(() =>
//   Promise.all(users.map(user =>
//     User.create(user))
//   )


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
