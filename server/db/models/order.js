const Sequelize = require('sequelize');
const db = require('../db');
const LineOrder = require('./lineOrder');

const Order = db.define('order', {
    status: {
      type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
      defaultValue: 'Created'
    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING,
    },
    zipcode: {
      type: Sequelize.STRING
    },
    orderTotal: {
      type: Sequelize.DECIMAL
    }

})

module.exports = Order;
