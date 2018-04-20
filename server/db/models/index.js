//const User = require('./user')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
// module.exports = {
//   User
// }

const Instrument = require('./instrument');
const Category = require('./category');
const Order = require('./order');
const LineOrder = require('./LineOrder');
const User = require('./user');
Instrument.belongsTo(Category);
Category.hasMany(Instrument);
Order.belongsTo(User, { allowNull: true });
Order.belongsToMany(Instrument, { through: LineOrder });


module.exports = {
  Instrument,
  Category,
  User,
  Order,
  LineOrder
};
