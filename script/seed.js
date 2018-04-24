/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const {Promise} = require('sequelize')
const db = require('../server/db')
const {User} = require('../server/db/models')

const { Instrument, Category } = require('../server/db/models');

const instruments = category => [
  {
    name: 'Fender Stratocaster',
    type: 'guitar',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd7Zb9NI_Wxl02evVl23rfZXvHgzzo97rjzKqMxmq5Wxxa9JG',
    cost: 515,
    categoryId: category.Strings.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Alexa Bassoon',
    type: 'bassoon',
    imageUrl: 'https://www.forrestsmusic.com/images/V-49.jpg',
    cost: 327,
    categoryId: category.Woodwinds.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Alla Drum',
    type: 'drums',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8n5LoSVoCrpqEuIbUE-w7cg_H6XQTdXDQJxPBTy8uceGDPNc',
    cost: 314,
    categoryId: category.Percussions.id,
    description: 'Lorem ipsum'
  }, {
    name: 'Mahia Trumpet',
    type: 'trumpet',
    imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products3731-1200x1200-454812.jpg',
    cost: 274,
    categoryId: category.Brass.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Cecilia Accordian',
    type: 'accordian',
    imageUrl: 'https://www.elderly.com//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p4067329.jpg',
    cost: 666,
    categoryId: category.Keyboards.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Selmer Prelude FL711 Student Flute',
    type: 'flute',
    imageUrl: 'https://media.musicarts.com/is/image/MMGS7/Replacement-Cases-Flute-or-Piccolo-Plastic-Case-B-Foot-Flute/471814000901000-00-250x250.jpg',
    cost: 16,
    categoryId: category.Woodwinds.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Hohner Hohnica 1303 Piano Accordion',
    type: 'accordian',
    imageUrl: 'https://www.musicjunction.com.au/wp-content/uploads/2015/09/Accordion-Case-2.jpg',
    cost: 1300,
    categoryId: category.Keyboards.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Ludwig 5-Piece Evolution Drum Set w/ 22" Bass Drum',
    type: 'drums',
    imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/6-Piece-Fiber-Drum-Case-Set-Rock/543547000000036-00-500x500.jpg',
    cost: 3132,
    categoryId: category.Percussions.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Fender Deluxe Strat Electric Guitar',
    type: 'guitar',
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/GC-SGS-Deluxe-ABS-Electric-Guitar-Case/545881000000000-00-500x500.jpg',
    cost: 1300,
    categoryId: category.Strings.id,
    description: 'Lorem ipsum'
  },
  {
    name: 'Yamaha Custom G CSG-IIIHL Bb Clarinet',
    type: 'clarinet',
    imageUrl: 'https://media.musicarts.com/is/image/MMGS7/Replacement-Cases-Plastic-Clarinet-Case-Standard/471811000000000-00-250x250.jpg',
    cost: 2,
    categoryId: category.Woodwinds.id,
    description: 'Lorem ipsum'
  }
]

const categories = [
  {
    name: 'Strings',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd7Zb9NI_Wxl02evVl23rfZXvHgzzo97rjzKqMxmq5Wxxa9JG',
    description: 'String instruments are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.'
  },
  {
    name: 'Woodwinds',
    imageUrl: 'https://www.forrestsmusic.com/images/V-49.jpg',
    description: 'Woodwind instruments are a family of musical instruments within the more general category of wind instruments. There are two main types of woodwind instruments: flutes and reed instruments (otherwise called reed pipes). Woodwinds produce sound by splitting an exhaled air stream on a sharp edge, such as a reed or a fipple.'
  },
  {
    name: 'Percussions',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8n5LoSVoCrpqEuIbUE-w7cg_H6XQTdXDQJxPBTy8uceGDPNc',
    description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater; struck, scraped or rubbed by hand; or struck against another similar instrument.'
  },
  {
    name: 'Brass',
    imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products3731-1200x1200-454812.jpg',
    description: `A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player's lips. Brass instruments are also called labrosones, literally meaning "lip-vibrated instruments".`
  },
  {
    name: 'Keyboards',
    imageUrl: 'https://www.elderly.com//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p4067329.jpg',
    description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers. The most common of these are the piano, organ, and various electronic keyboards, including synthesizers and digital pianos.'
  }
]

const users = [
  {
    email: 's.alexa.moy@gmail.com',
    password: '123',
    firstName: 'Alexa',
    lastName: 'Moy',
    admin: true
  },
  {
    email: 'alla@alla.com',
    password: '123',
    firstName: 'Alla',
    lastName: 'Yakubova',
    admin: true
  },
  {
    email: 'mahia@mahia.com',
    password: '123',
    firstName: 'Mahia',
    lastName: 'Mutushy',
    admin: false
  },
  {
    email: 'cecilia@cecilia.com',
    password: '123',
    firstName: 'Cecilia',
    lastName: 'Song-Avery',
    admin: false
  }
]

//Here we would have associations

const seed = () =>
  Promise.map(categories, category =>
    Category.create(category)
  )
  .then(
    categories => categories.reduce(
      (cats, cat) => {
        cats[cat.name] = cat
        return cats
      }, {}
    )  
  )
  .then(categories =>
    Promise.all(instruments(categories).map(instrument =>
      Instrument.create(instrument)
    ))
  )
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  ))


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

// async function seed () {
//   await db.sync({force: true})
//   console.log('db synced!')
//   // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
//   // executed until that promise resolves!

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])
//   // Wowzers! We can even `await` on the right-hand side of the assignment operator
//   // and store the result that the promise resolves to in a variable! This is nice!
//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }

// // Execute the `seed` function
// // `Async` functions always return a promise, so we can use `catch` to handle any errors
// // that might occur inside of `seed`
// seed()
//   .catch(err => {
//     console.error(err.message)
//     console.error(err.stack)
//     process.exitCode = 1
//   })
//   .then(() => {
//     console.log('closing db connection')
//     db.close()
//     console.log('db connection closed')
//   })

// /*
//  * note: everything outside of the async function is totally synchronous
//  * The console.log below will occur before any of the logs that occur inside
//  * of the async function
//  */
// console.log('seeding...')
