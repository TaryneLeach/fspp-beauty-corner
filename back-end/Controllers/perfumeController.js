const express = require('express');
const perfumes = express.Router();
const db = require('../db/dbConfig.js');

const {
	getAllPerfume,
	getOnePerfume,
	createPerfume,
	upDatePerfume,
	deletePerfume,
} = require('../queries/perfume.js');

// get all perfume

perfumes.get('/', async (req, res) => {
	const allPerfume = await getAllPerfume();
	if (allPerfume) {
		res.status(200).json({
			success: true,
			payload: allPerfume,
		});
	} else {
		res.status(404).send('Perfumes could not be found!');
	}
});

// get one perfume

perfumes.get('/:id', async (req, res) => {
	const { id } = req.params;
	const onePerfume = await getOnePerfume(id);
	if (onePerfume.id) {
		res.status(200).json({
			success: true,
			payload: onePerfume,
		});
	} else {
		res.status(400).send('Perfume could not be found!');
	}
});



// create a Perfume

perfumes.post('/new', async (req, res) => {
// console.log(req)
	const creating = await createPerfume(req.body);
	if (creating) {
		res.status(200).json({
			success: true,
			payload: {
				item_name: creating.item_name,
				brand: creating.brand,
				scent_type: creating.scent_type,
				fragrance_description: creating.fragrance_description,
				key_notes: creating.key_notes,
				price: creating.price,
				is_long_lasting: creating.is_long_lasting,
				image: creating.image,
				where_to_purchase: creating.where_to_purchase,
			},
		});
	} else {
		res.status(500).json({ error: 'Perfume creation failed!' });
	}
	

	
});


// update
perfumes.put('/:id/edit', async (req, res) => {
	const { id } = req.params

	const updating = await upDatePerfume(id, req.body);
	if (updating.id) {
		res.status(200).json({
			success: true,
			payload: {
				
				item_name: updating.item_name,
				brand: updating.brand,
				scent_type: updating.scent_type,
				fragrance_description: updating.fragrance_description,
				key_notes: updating.key_notes,
				price: updating.price,
				is_long_lasting: updating.is_long_lasting,
				image: updating.image,
				where_to_purchase: updating.where_to_purchase,
				id: updating.id
			},

		});
	} else {
		res.status(500).json({ error: 'Perfume update error!' });
	}
});

// delete perfume

perfumes.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deleting = await deletePerfume(id);
	if (deleting.id) {
		res.status(200).json({ success: true, payload: deleting });
	} else {
		res.status(404).json({ success: false, payload: { id: undefined } });
	}
});
module.exports = perfumes;
