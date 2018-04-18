const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
})

module.exports = Order;
