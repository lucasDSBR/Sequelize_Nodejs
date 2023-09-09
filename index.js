(async () => {
	const database = require('./db');
	const Product = require('./models/product');
	const Manufacturer = require('./models/manufacturer');
	const Category = require('./models/category');

	await database.sync();


	// const NewManufacturer = await Manufacturer.create({
	// 	name: 'Mac'
	// });
	// const NewProduct = await Product.create({
	// 	name: 'Iphone',
	// 	price: 4000,
	// 	description: 'test test',
	// 	idManufacturer: NewManufacturer.id
	// });

	const NewCategory = await Category.create({ name: 'Tec2'});
	const product3 = await Product.findByPk(1);

	await product3.setCategorye([NewCategory]);



	// //Find All
	// const products = await Product.findAll();
	// // console.log(products);

	// //Find By PK
	// const product = await Product.findByPk(2);

	// //Find with Where
	// const productWithWhere = await Product.findAll({
	// 	where: {
	// 		price: 400
	// 	}
	// })

	// //Update
	// const productForUpdate = await Product.findByPk(2);
	// productForUpdate.description = 'I update the produtc';
	// await productForUpdate.save();

	// //Delete
	// const produtcForDelete = await Product.findByPk(2);
	// await produtcForDelete.destroy();
	// //Or
	// await Product.destroy({ where: { price: 50000 }})

	const product = await Product.findByPk(1, { include: Manufacturer});
	console.log(product.manufacturer.name);


	const manufacturerProducts = await Manufacturer.findByPk(1, { include: Product});
	console.log(manufacturerProducts.products);

})();