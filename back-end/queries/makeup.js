const db = require('../db/dbConfig.js');

const getAllMakeup = async () => {
	try {
		return await db.any('SELECT * FROM makeup');
	} catch (error) {
		return error;
	}
};

const getOneMakeup = async (id) => {
	try {
		return await db.one('SELECT * FROM makeup WHERE id=$1', id);
	} catch (error) {
		return error;
	}
};

const deleteMakeup = async (id) => {
	try {
		return await db.one('DELETE FROM makeup WHERE id=$1 RETURNING *', id);
	} catch (error) {
		return error;
	}
};


const createMakeup = async (makeup) => {
	try {
		return await db.one(
			'INSERT INTO makeup (item_name, brand, category, price, is_vegan, image, where_to_purchase) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
			[
				makeup.item_name,
				makeup.brand,
				makeup.category,
				makeup.price,
				makeup.is_vegan,
				makeup.image,
				makeup.where_to_purchase
			]
		);
	} catch (error) {
		console.log(error.message || error)
		return error;
	}

}
	const upDateMakeup = async (id, makeup) => {
	try {
		return await db.one(
			'UPDATE  makeup  SET item_name = $1, brand = $2, category = $3, price =$4, is_vegan = $5, image = $6, where_to_purchase = $7 WHERE id= $8  RETURNING *',
			[
				makeup.item_name,
				makeup.brand,
				makeup.category,
				makeup.price,
				makeup.is_vegan,
				makeup.image,
				makeup.where_to_purchase,
				id
			]
		);
		
	} catch (error) {
		console.log(error.message || error)
		return error;
	}

}



module.exports = {
	getAllMakeup,
	getOneMakeup,
	createMakeup,
	upDateMakeup,
	deleteMakeup,
};
