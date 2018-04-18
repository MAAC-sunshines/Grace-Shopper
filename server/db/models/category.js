const Sequelize = require('sequelize');
const db = require('../db');

const Category = db.define('category', {
    name: {
        type: Sequelize.ENUM,
        values: ['String', 'Woodwind', 'Percussion', 'Brass', 'Keyboard'],
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
