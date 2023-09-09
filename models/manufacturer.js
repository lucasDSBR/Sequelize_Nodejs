const Sequelize = require('sequelize');
const database = require('../db');

const Manufacturer = database.define('manufacturer', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Manufacturer;