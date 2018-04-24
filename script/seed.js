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
    cost: 51500,
    categoryId: category.Strings.id,
    description: `The Fender Standard Stratocaster Electric Guitar stays true to many of the original specs that put the Strat on the map in 1954. This Stratocaster features an alder body with the legendary 'comfort contour' design that was way ahead of its time. The body is outfitted with a trio of single-coil pickups that deliver those clear, bell-like, bright Strat tones that were the driving force behind an endless list of guitar legends. A parchment colored pickguard adds an old school vibe to this modern day classic.`
  },
  {
    name: 'Alexa Bassoon',
    type: 'bassoon',
    imageUrl: 'https://www.forrestsmusic.com/images/V-49.jpg',
    cost: 3275,
    categoryId: category.Woodwinds.id,
    description: `Bassoon, French basson, German Fagott, the principal bass instrument of the orchestral woodwind family. The bassoon’s reed is made by bending double a shaped strip of cane. Its narrow conical bore leads from the curved metal crook, onto which the double reed is placed, downward through the wing, or tenor, joint (on which are the left-hand finger holes) to the butt joint (on which are the right-hand holes). The bore then doubles back, ascending through the butt to the long joint and bell, where the holes are controlled by keywork for the left thumb.`
  },
  {
    name: 'Alla Drum',
    type: 'drums',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8n5LoSVoCrpqEuIbUE-w7cg_H6XQTdXDQJxPBTy8uceGDPNc',
    cost: 3149,
    categoryId: category.Percussions.id,
    description: `Made of 9mm poplar shells, the Pearl Roadshow 5-Piece Drum Set w/ Hardware & Cymbals has everything that the beginning drummer needs to get started right out of the box! The set comes equipped with sturdy double-braced hardware and includes a drum throne, bass drum pedal, sticks and stick bag.  Also included in this full-featured package are a 16" crash/ride cymbal and 14" hi-hat — the cornerstone cymbals of any drum kit.`
  }, {
    name: 'Mahia Trumpet',
    type: 'trumpet',
    imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products3731-1200x1200-454812.jpg',
    cost: 2745,
    categoryId: category.Brass.id,
    description: `This trumpet model features a reversed leadpipe and yellow brass bell for quicker response and playing agility. The combination of a heavy mouthpiece receiver and removal of the third valve water key results in a superb balance of playability and tonal quality. With this model, musicians will be able to produce a firm sound in all dynamic ranges, from delicate pianissimo to powerful fortissimo.`
  },
  {
    name: 'Cecilia Accordian',
    type: 'accordian',
    imageUrl: 'https://www.elderly.com//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/4/p4067329.jpg',
    cost: 666,
    categoryId: category.Keyboards.id,
    description: 'This chromatic accordion has 22 keys, 8 bass buttons, and comes complete with straps and a deluxe carry bag. It features metal bellow corners, bellow straps with tuck-away snaps, and an adjustable bass side strap for comfort.'
  },
  {
    name: 'Selmer Prelude FL711 Student Flute',
    type: 'flute',
    imageUrl: 'https://media.musicarts.com/is/image/MMGS7/Replacement-Cases-Flute-or-Piccolo-Plastic-Case-B-Foot-Flute/471814000901000-00-250x250.jpg',
    cost: 16,
    categoryId: category.Woodwinds.id,
    description: `The Prelude FL711 Flute is designed for the beginning player of any age. A great value, the Selmer Prelude FL711 Flute provides easy sound production, allowing for a focused and centered sound from the beginner's embouchure. The ergonomic key design with offset G enables correct and comfortable hand position. Designed as an affordable option for beginning band students, the Prelude instruments combine value and performance. All instruments are built to stringent specifications and include a case and cloth.`
  },
  {
    name: 'Hohner Hohnica 1303 Piano Accordion',
    type: 'accordian',
    imageUrl: 'https://www.musicjunction.com.au/wp-content/uploads/2015/09/Accordion-Case-2.jpg',
    cost: 1300,
    categoryId: category.Keyboards.id,
    description: `A perfect starting point for beginners or students! Hohner's 1303 red piano accordion from their Hohnica beginner series is a perfect first step for children, beginners, and students to begin learning this instrument!  At only about 13lbs, it is easy for anyone to handle, and has 12 bass buttons and 25 piano keys ranging from G to G.`
  },
  {
    name: 'Ludwig 5-Piece Evolution Drum Set w/ 22" Bass Drum',
    type: 'drums',
    imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/6-Piece-Fiber-Drum-Case-Set-Rock/543547000000036-00-500x500.jpg',
    cost: 3132,
    categoryId: category.Percussions.id,
    description: 'The Element Evolution Series features Poplar Shells with a single 45 degree bearing edge. Bass Drum shells are 7 ply, while the Toms and Snare Drum are 6 ply. This particular shell design produces a great deal of punch at medium to high volume.'
  },
  {
    name: 'Fender Deluxe Strat Electric Guitar',
    type: 'guitar',
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/GC-SGS-Deluxe-ABS-Electric-Guitar-Case/545881000000000-00-500x500.jpg',
    cost: 1300,
    categoryId: category.Strings.id,
    description: 'Melding classic Fender style and sound with upgraded modern components, the Deluxe Stratocaster is perfect for players who need a wide variety of authentic Fender tones on tap. The ash body bears a highly durable gloss polyurethane finish that will easily stand up to hard playing, keeping the instrument like new for years to come. Classic aesthetic touches include nickel/chrome hardware and a three-ply B/W/B pickguard, along with aged white pickup covers, control knobs and switch tip. A contoured neck heel and 4-bolt asymmetrical neck plate make it easy to comfortably reach the upper registers of the neck. The flatter 12”-radius fingerboard makes it easy to play fast leads and perform deep bends without fretting out.'
  },
  {
    name: 'Yamaha Custom G CSG-IIIHL Bb Clarinet',
    type: 'clarinet',
    imageUrl: 'https://media.musicarts.com/is/image/MMGS7/Replacement-Cases-Plastic-Clarinet-Case-Standard/471811000000000-00-250x250.jpg',
    cost: 2,
    categoryId: category.Woodwinds.id,
    description: 'The YCL-CSG features a newly improved bore design. With this bore design, we have found the sound to be warmer with a larger spectrum of tone colors and shadings. The player will also notice better flexibility and improved intonation.'
  },
  {
    name: 'Gon Bops Signature Series Roberto Quintero Bongo',
    type: 'drum',
    imageUrl: 'https://mthumbs.static-thomann.de/thumb/padthumb600x360/pics/bdb/148532/10489858_800.jpg',
    cost: 349,
    categoryId: category.Percussions.id,
    description: 'Featuring premium fiberglass shells, Gon Bops California Series Contour Hardware, and custom Remo Skyndeep Heads; you get a bongo that is rich with cutting highs. Overall balanced tone to project on the loudest stages and work nicely in a recording situation. Its a 7" and 8.5" paired bongo, great for any percussionist out there!'
  },
  {
    name: 'Gon Bops Signature Series Roberto Quintero Conga',
    type: 'drum',
    imageUrl: 'https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/1126039_12412_popup.jpg',
    cost: 699,
    categoryId: category.Percussions.id,
    description: 'Crafted from premium fiberglass shells with Gon Bops California Series Contour Hardware. Combined with custom Remo Skyndeep heads, these congas produce deep, resonant bass tones and loud, cutting highs. The sound is perfectly balanced to project on the loudest stages while recording beautifully in the studio. Percussionist at all levels will appreciate its outstanding sound, unmatched quality and light weight.'
  },
  {
    name: 'Meinl Percussion Traditional Wood Tambourine - Brass Jingles',
    type: 'tambourine',
    imageUrl: 'http://percustudio.com/site/public/loja_produtos/MPAB10.jpg',
    cost: 69,
    categoryId: category.Percussions.id,
    description: 'The Traditional wood tambourine comes in a sturdy wooden frame with brass delivering warm attack with sentitive cutting sounds. You can choose between a single row or a double row of jingles giving making the Traditional Wood Tambourine a very diverse series for the most demanding moments. Its beautiful African Brown is sleak and timeless and feels comfortable when playing. This is great for church events, live performances, acoustic settings and so much more!'
  },
  {
    name: 'Boomwhackers Boomophone XTS Whack Pack',
    type: '',
    imageUrl: 'https://static.bax-shop.es/image/product/258463/615495/c40aab49/450x450/1459934810Boomwhackers_BW_bag.jpg',
    cost: 55,
    categoryId: category.Percussions.id,
    description: 'Boomwhackers Tuned Percussion Tubes are lightweight, hollow, color-coded, plastic tubes, tuned to musical pitches by length. They are used as musical instruments in the percussion family. Boomwhackers produce musical tones when struck together, on the floor, or against nearly any surface. They can also be grouped together and struck with mallets in different configurations, in specialized holders, similar to a horizontally-aligned xylophone.'
  }
]

// ,
//   {
//     name: '',
//     type: '',
//     imageUrl: '',
//     cost: ,
//     categoryId: category..id,
//     description: ''
//   }

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
