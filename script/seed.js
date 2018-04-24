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
  },
  {
    name: 'Epiphone Sheraton-II PRO Semi-Hollow Body Electric Guitar',
    type: 'guitar',
    imageUrl: 'https://www.politusic.com/wp-content/uploads/2014/06/crossrock-electric-guitar-case.jpg',
    cost: 799,
    categoryId: category.Strings.id,
    description: `Epiphone takes their deluxe semi to all new heights with the release of the Sheraton-II PRO. The Sheraton-II PRO offers several upgrades to provide superior performance and enhanced aesthetics. These upgrades include a pair of Epiphone's new critically acclaimed ProBucker humbucking pickups with coil-tapping, a Graphtech NuBone XL nut, old-school "top-hat" knobs with metal inserts, an ivory toggle cap and the addition of a beautiful Wine Red finish.`
  },
  {
    name: 'Martin 000X1AE Acoustic-Electric Guitar',
    type: 'guitar',
    imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/Dreadnought-Dreadnought-12-Flat-Top-Guitar-Case-Black/J12843000001000-00-500x500.jpg',
    cost: 599,
    categoryId: category.Strings.id,
    description: `The Martin 000X1AE features a solid Sitka spruce top, mahogany pattern HPL back and sides and Martin's D1 style bracing for stability and resonance. The back and sides are constructed of patented high-pressure laminate (HPL).`
  },
  {
    name: 'Fender American Professional Stratocaster Electric Guitar',
    type: 'guitar',
    imageUrl: 'https://www.theflightcasecompany.com/pub/media/catalog/product/cache/image/1000x1240/e9c3970ab036de70892d86c6d221abfe/e/c/ec-115gd-strat-2.jpg',
    cost: 1549,
    categoryId: category.Strings.id,
    description: `Often copied, but never surpassed, the Stratocaster is arguably the world's most-loved electric guitar. Electrifying the music world since its debut in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster isn't a re-imagining of the classic design; it's the authentic original model, evolved.`
  },
  {
    name: 'Taylor GS Mini Mahogany Top Acoustic Guitar',
    type: 'guitar',
    imageUrl: 'https://images.samash.com/sa/YAG/YAG3HCXXX-P.fpx?cvt=jpg',
    cost: 459,
    categoryId: category.Strings.id,
    description: `The Taylor GS Mini Mahogany is the ultimate musical companion, wherever you go — or stay. Inspired by the big, bold sound of Taylor's Grand Sypmhony body shape, the Mini scales things down without skimping on sound, packing lots of tone into a comfortable size and giving you a guitar that's incredibly fun to play. `
  },
  {
    name: 'Martin 0XK Soprano Ukulele',
    type: 'guitar',
    imageUrl: 'https://city-green.s3.amazonaws.com/17%2F17001482%2F17001482-8-150323144428.jpg',
    cost: 239,
    categoryId: category.Strings.id,
    description: `Martin has long been renowned for its ukuleles, but this is the first uke we&apos;ve offered in the X-Series. The Soprano-size body is fashioned from HPL (high pressure wood laminate) in a Koa-like finish as is the one-piece top. Features include Sitka Spruce bracing, Mahogany end-blocks, Cedar ribbons, Morado fingerboard and bridge, bone nut and saddle, Grover tuning machines and a new dovetail joint similar to that used in traditional Martin uke construction. `
  },
  {
    name: 'F.R. Pfretszchner Model 55 Step-up European Violin',
    type: 'violin',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0182/0563/products/dartopen.jpg?v=1383428876',
    cost: 578,
    categoryId: category.Strings.id,
    description: `Made for the advancing beginner, the F.R. Pfretszchner model 55 violins are assembled in Romania. The violin is hand rubbed with a golden brown spirit varnish.  This fully carved instrument’s spruce top as well as the maple that is on the back, sides and ribs are sourced from the Carpathian Mountains.  All F.R. Pfretszchner instruments are fully setup in a specialty workshop in the USA using only premium parts. A Deaspue bridge is cut and fitted to the violin to the proper heights.  The violin is fitted with a German-made Wittner Ultra Tailpiece, and the pegs, fingerboard, and chinrest are all made of fine ebony. When testing the instrument, our technicians found that it sounded best with the new Thomastik Alphayue strings, a new synthetic-core set made by the company that produces the ever-popular Dominant professional line. The outfit includes a lightweight shaped violin case, a fiberglass bow, and American-made rosin.`
  },
  {
    name: 'Benjamin Adams VN100 Student Violin ',
    type: 'violin',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1099/2996/products/gewa_oxford_black_interior_1024x1024.jpg?v=1511331469',
    cost: 169,
    categoryId: category.Strings.id,
    description: `The BAVN100 model is a limited edition Full Size (4/4) violin that includes a case and bow at an unbeatable price for the quality, available while supplies last.  It has a solid spruce top, maple back and sides, four fine tuners, an ebony fingerboard, and hardwood chinrest and pegs.`
  },
  {
    name: 'Bach TB200B Intermediate Tenor Trombone',
    type: 'trombone',
    imageUrl: 'https://assets.bigcartel.com/product_images/185737523/3k_case_open.jpg?auto=format&fit=max&h=1000&w=1000',
    cost: 2409,
    categoryId: category.Brass.id,
    description: `Key of Bb/F, .525" medium-large bore, 8" two-piece yellow brass bell with engraving, F rotor mechanism, ball bearing rotor linkage, traditional wrap, chrome-plated nickel silver seamless inner slide, brass outer slide, chrome-plated handgrip, tubular brass body braces, genuine Vincent Bach mouthpiece, wood shell case.`
  },
  {
    name: 'Hans Hoyer G10A-L2 "Geyer" Double F/Bb French Horn',
    type: 'horn',
    imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/JW-2081-ABS-Series-Fixed-Bell-French-Horn-Case/H75528000000000-00-500x500.jpg',
    cost: 5999,
    categoryId: category.Brass.id,
    description: `The G10A-L2 "Geyer" Double F/Bb French Horn features  four in-line valves allow for optimum air flow and thus allow the player flexible and unimpeded fluidity throughout the entire range. The well balanced design is very similar to the originals of the 1950’s with rich tone colors and similar resistance. Careful attention is given to the positioning of the braces as well as the ergonomic arrangement of the valve and thumb levers. `
  },
  {
    name: 'Selmer Paris Selmer Reference 54 Model 74 Tenor Saxophone',
    type: 'saxophone',
    imageUrl: 'https://www.thomann.de/pics/bdb/163405/452700_800.jpg',
    cost: 9429,
    categoryId: category.Brass.id,
    description: `Based on the legendary design of the Mark VI, the 54 Tenor is an exceptional performer. It has the dark, rich sound you expect plus a wide open tone reminiscent of the Mark VI. The low end is absolutely effortless and the tone remains consistent even in the upper register.`
  },
  {
    name: 'Casio CTK2550 Portable Keyboard',
    type: 'keyboard',
    imageUrl: 'https://static.keymusic.com/products/133383/XL/gator-gk-76-keyboard-case-6.jpg',
    cost: 111,
    categoryId: category.Keyboards.id,
    description: `Whether you're just starting out, or using batteries to write your next hit on a tour bus, the CTK-2550 delivers hundreds of Tones and Rhythms to jump-start your creativity. It's a perfect introduction to music-making, and a great-sounding way to have fun.`
  },
  {
    name: 'Schumann Piano, Model G80A',
    type: 'keyboard',
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/0f/a3/c1/0fa3c19cf927536457c3ee610319cbff.jpg',
    cost: 4900,
    categoryId: category.Keyboards.id,
    description: `Serial #867001 This Schumann baby grand is an excellent starter piano. Enjoy it as your permanent home piano or trade it up to a higher grade instrument, perhaps a Yamaha or Hoffmann baby grand. You’ll have a full ten years in which to decide. So long as the trade up piano is at least twice the price of this one, you’ll get your full purchase price credited in the trade.`
  },
  {
    name: 'Pearl Flutes PFP165E Piccolo with Grenadilla Head',
    type: 'piccolo',
    imageUrl: 'http://mouthpieceexpress.com/catalog/images/m_yamaha/YACPCC32II.jpg',
    cost: 1496,
    categoryId: category.Woodwinds.id,
    description: `The PFP-165 Piccolo is the next generation in world renown Pearl piccolos. Using the same Grenaditte body as the PFP105 that users have come to embrace as a free blowing 'easy to play' piccolo, Pearl has added a Grenadilla head to the new 165. While Grenaditte has many of the tonal qualities of Grenadilla, the addition of the genuine wood head joint greatly improves the warmth and tonal quality. The Grenadilla head also works wonders for intonation and blending into an orchestral environment.`
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
