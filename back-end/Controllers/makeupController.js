const express = require('express');
const makeups = express.Router();

const {
	getAllMakeup,
	getOneMakeup,
	deleteMakeup,
	createMakeup,
} = require('../queries/makeup.js');

// get all makeup

makeups.get('/', async (req, res) => {
	const allMakeup = await getAllMakeup();
	if (allMakeup) {
		res.json(allMakeup);
	} else {
		res.status(404).send('Makeup items could not be found!');
	}
});

// get one makeup item
makeups.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneMakeup = await getOneMakeup(id);
	if (oneMakeup.id) {
		res.json(oneMakeup);
	} else {
		res.status(400).send('Makeup item could not be found!');
	}
});

// delete makeup item
makeups.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deleting = await deleteMakeup(id);
	if (deleting.id) {
		res.json(deleteMakeup);
	} else {
		res.status(404).send('Makeup deletion has failed!');
	}
});

// create a makeup item
makeups.post('/new', async (red, res) => {
	const { body } = req.body;
	const creating = await createMakeup(body);
	if (creating.id) {
		res.json({
			makeup: {
				id: creating.id,
				item_name: creating.item_name,
				brand: creating.brand,
				category: creating.category,
				is_vegan: creating.is_vegan,
				image: creating.image,
			},
		});
	} else {
		res.status(500).json({ error: 'Makeup creation creation error!' });
	}
});

module.exports = makeups;
