const db = require('../db/dbConfig.js');

const getAllPerfume = async () => {
	try {
		return await db.any('SELECT * FROM perfume');
	} catch (error) {
		return error;
	}
};

const getOnePerfume = async (id) => {
	try {
		return await db.one('SELECT * FROM perfume WHERE id=$1', id);
	} catch (error) {
		return error;
	}
};

const deletePerfume = async (id) => {
	try {
		return await db.one('DELETE FROM perfume WHERE id=$1 RETURNING *', id);
	} catch (error) {
		return error;
	}
};

const createPerfume = async (perfume) => {
	try {
		return await db.one(
			'INSERT INTO makeup (item_name, brand, scent_type, fragrance_description, key_notes, price, is_long_lasting, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
			[
				perfume.item_name,
				perfume.brand,
				perfume.scent_type,
				perfume.fragrance_description,
				perfume.key_notes,
                perfume.price,
                perfume.is_long_lasting,
				perfume.where_to_purchase
			]
		);
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllPerfume,
	getOnePerfume,
	deletePerfume,
	createPerfume,
};