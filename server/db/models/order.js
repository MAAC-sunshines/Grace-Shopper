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
      type: Sequelize.VIRTUAL,
      get: function() {
        LineOrder.findAll({
          orderId: this.id
        })
        .then(orders => {
          if (orders) {
            const total = orders.reduce(function (sum, line) {
              sum + line.itemPrice
            }, 0)
            return total
          }
        })
      }
    }

})

module.exports = Order;
