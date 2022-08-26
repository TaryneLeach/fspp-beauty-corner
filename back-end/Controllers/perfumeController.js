const express = require('express');
const perfumes = express.Router();

const {
	getAllPerfume,
	getOnePerfume,
	deletePerfume,
	createPerfume,
} = require('../queries/perfume.js');

// get all perfume

perfumes.get('/', async (req, res) => {
	const allPerfume = await getAllPerfume();
	if (allPerfume) {
		res.json(allPerfume);
	} else {
		res.status(404).send('Perfumes could not be found!');
	}
});

// get one perfume

perfumes.get('/:id', async (req, res) => {
	const { id } = req.params;
	const onePerfume = await getOnePerfume(id);
	if (onePerfume.id) {
		res.json(onePerfume);
	} else {
		res.status(400).send('Perfume could not be found!');
	}
});

// delete perfume

perfumes.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deleting = await deletePerfume(id);
	if (deleting.id) {
		res.json(deletePerfume);
	} else {
		res.status(404).send('Perfume deletion has failed!');
	}
});

// create a Perfume

perfumes.post('/new', async (req, res) => {
	const { body } = req.body
	const creating = await createPerfume(body);
	if (creating) {
		res.json({
			perfume: {
				item_name: creating.item_name,
				brand: creating.brand,
				scent_type: creating.scent_type,
                fragrance_description: creating.fragrance_description,
                key_notes: creating.key_notes,
                price: creating.price,
                is_long_lasting: creating.is_long_lasting,
				image: creating.image,
			}
		}) 
	} else {

	} res.status(500).json({ error: 'Perfume creation creation failed!' })
			
	res.status(500).json({ error: 'Perfume creation error' });
});

module.exports = perfumes;