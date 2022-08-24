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
			'INSERT INTO makeup (item_name, brand, category, price, is_vegan, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[
				makeup.item_name,
				makeup.brand,
				makeup.category,
				makeup.price,
				makeup.is_vegan,
				makeup.image,
			]
		);
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllMakeup,
	getOneMakeup,
	deleteMakeup,
	createMakeup,
};
