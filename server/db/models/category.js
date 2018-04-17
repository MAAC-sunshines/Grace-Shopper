const Sequelize = require('sequelize');
const db = require('../db');

const Category = db.define('category', {
    name: {
        type: Sequelize.ENUM,
        values: ['string', 'woodwind', 'percussion', 'brass', 'keyboard'],
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Category;
