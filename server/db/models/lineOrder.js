const Sequelize = require('sequelize');
const db = require('../db');

const LineOrder = db.define('lineOrder', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    itemPrice: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    totalPrice: {
      type: Sequelize.VIRTUAL,
      get: function() {
        return this.getDataValue('itemPrice') * this.getDataValue('quantity')
      }
    }
})

module.exports = LineOrder;
