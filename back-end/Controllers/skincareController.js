const express = require('express');
const skincare = express.Router();
const db = require('../db/dbConfig.js');

const {
	getAllSkincare,
	getOneSkincare,
	createSkincare,
	deleteSkincare,
	upDateSkincare,
} = require('../queries/skincare.js');

// get all skincare
skincare.get('/', async (req, res) => {
	const allSkincare = await getAllSkincare();
	if (allSkincare) {
		res.status(200).json({
			success: true,
			payload: allSkincare,
		});
	} else {
		res.status(404).send('Skincare items could not be found!');
	}
});

// get single skincare item
skincare.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneSkincare = await getOneSkincare(id);
	if (oneSkincare.id) {
		res.status(200).json({
			success: true,
			payload: oneSkincare,
		});
	} else {
		res.status(400).send('Skincare item could not be found!');
	}
});

// create skincare item
skincare.post('/new', async (req, res) => {
	const creating = await createSkincare(req.body);

	if (creating) {
		res.status(200).json({
			success: true,
			payload: {
				item_name: creating.item_name,
				brand: creating.brand,
				product_type: creating.product_type,
				price: creating.price,
				is_clean_beauty: creating.is_clean_beauty,
				image: creating.image,
				where_to_purchase: creating.where_to_purchase,
			},
		});
	} else {
		res.status(500).json({
			error: 'Skincare creation failed! ',
		});
	}
});

module.exports = skincare;
