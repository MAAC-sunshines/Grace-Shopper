//const crypto = require('crypto')
const Sequelize = require('sequelize');
const db = require('../db');

const Instrument = db.define('instrument', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'http://airguitarcanada.org/wp-content/uploads/2017/07/AGC-Championships-15July2017-605-1024x684.jpg'
  },
  cost: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  hooks: {
    beforeCreate: function() {

    }
  }
});


module.exports = Instrument;

