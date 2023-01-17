const db = require('../db/dbConfig.js');

const getAllSkincare = async () => {
	try {
		return await db.any('SELECT * FROM skincare');
	} catch (error) {
		return error;
	}
};

const getOneSkincare = async (id) => {
	try {
		return await db.one('SELECT * FROM skincare WHERE id=$1', id);
	} catch (error) {
		return error;
	}
};

const deleteSkincare = async (id) => {
	try {
		return await db.one('DELETE FROM skincare WHERE id=$1 RETURNING *', id);
	} catch (error) {
		return error;
	}
};

const createSkincare = async (skincare) => {
	try {
		return await db.one(
			'INSERT INTO skincare (item_name, brand, product_type, price, is_clean_beauty, image, where_to_purchase) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
			[
				skincare.item_name,
				skincare.brand,
				skincare.product_type,
				skincare.price,
				skincare.is_clean_beauty,
				skincare.image,
				skincare.where_to_purchase,
			]
		);
	} catch (error) {
		console.log(error.message || error);
		return error;
	}
};

const upDateSkincare = async (skincare) => {
	try {
		return await db.one(
			'UPDATE INTO skincare (item_name, brand, product_type, price, is_clean_beauty, image, where_to_purchase) VALUES ($1, $2, $3, $4, $5, $6, $7 WHERE id= $8  RETURNING *',
			[skincare.item_name,
				skincare.brand,
				skincare.product_type,
				skincare.price,
				skincare.is_clean_beauty,
				skincare.image,
				skincare.where_to_purchase,
        id
      ]
		);
	} catch (error) {
		console.log(error.message || error);
		return error;
	}
};

module.exports = {
  getAllSkincare,
  getOneSkincare,
  createSkincare,
  deleteSkincare,
  upDateSkincare,
}
