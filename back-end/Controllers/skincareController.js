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

// updating skincare

skincare.put("/:id/edit", async (req, res) => {
	const { id } = req.params

	const updating = await upDateSkincare(id, req.body);
	if (updating.id) {
		res.status(200).json({
			success: true, payload: {
				item_name: updating.item_name,
				brand: updating.brand,
				product_type: updating.product_type,
				price: updating.price,
				is_clean_beauty: updating.is_clean_beauty,
				image: updating.image,
				where_to_purchase: updating.where_to_purchase,
				id: updating.id

			},
		})
	}  else {
		res.status(500).json({ error: 'Skincare update error!' });
	}
});


// deleting skincare

skincare.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deleting = await deleteSkincare(id);
	if (deleting.id) {
		res.status(200).json({
			success: true,
			payload: deleting,
		});
	} else {
		res.status(404).json({
			success: false,
			payload: {
				id: undefined,
			},
		});
	}
});

module.exports = skincare;
