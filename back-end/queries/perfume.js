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



const createPerfume = async (perfume) => {
	try {
		return await db.one(
			'INSERT INTO perfume (item_name, brand, scent_type, fragrance_description, key_notes, price, is_long_lasting, image, where_to_purchase) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
			[
				perfume.item_name,
				perfume.brand,
				perfume.scent_type,
				perfume.fragrance_description,
				perfume.key_notes,
                perfume.price,
                perfume.is_long_lasting,
				perfume.image,
				perfume.where_to_purchase,
			]
		);
	} catch (error) {
		console.log(error.message || error)
		return error;
	}
}
	const upDatePerfume = async (id,perfume) => {
	try {
		return await db.one(
			'UPDATE  perfume  SET item_name = $1, brand = $2, price = $3, scent_type = $4, fragrance_description = $5, key_notes = $6, is_long_lasting = $7, image = $8,where_to_purchase = $9 WHERE id=$10  RETURNING *',
			[
				perfume.item_name,
				perfume.brand,
				perfume.price,
				perfume.scent_type,
				perfume.fragrance_description,
				perfume.key_notes,
				perfume.is_long_lasting,
				perfume.image,
				perfume.where_to_purchase,
				id,
			]
		);
	} catch (error) {
		console.log(error.message || error)
		return error;
	}

	}

	const deletePerfume = async (id) => {
		try {
			return await db.one('DELETE FROM perfume WHERE id=$1 RETURNING *', id);
		} catch (error) {
			return error;
		}
	};

module.exports = {
	getAllPerfume,
	getOnePerfume,
	createPerfume,
	upDatePerfume,
	deletePerfume,
};