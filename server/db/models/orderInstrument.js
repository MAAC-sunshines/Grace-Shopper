const Sequelize = require('sequelize');
const db = require('../db');

const OrderInstrument = db.define('orderInstrument', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    purchasePrice: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    purchaseDate: {
        type: Sequelize.STRING
    }
})

module.exports = OrderInstrument;
