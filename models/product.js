const Sequelize = require('sequelize');
const database = require('../db');
const Manufacturer = require('./manufacturer');
const CategoryProduct = require('./CategoryProduct');
const Category = require('./category');
const Product = database.define('product', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: Sequelize.DECIMAL,
	description: Sequelize.STRING
});

Product.belongsTo(Manufacturer, {
	constraint: true,
	foreignKey: 'idManufacturer'
});

Manufacturer.hasMany(Product, {
	foreignKey: 'idManufacturer'
});

Product.belongsToMany(Category, {
	through: {
		model: CategoryProduct
	},
	foreignKey: 'idProduct',
	constraint: true
});

Category.belongsToMany(Product, {
	through: {
		model: CategoryProduct
	},
	foreignKey: 'idCategory',
	constraint: true
});

module.exports = Product;