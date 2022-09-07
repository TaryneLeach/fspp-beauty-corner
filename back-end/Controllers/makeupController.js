const express = require('express');
const makeups = express.Router();

const {
	getAllMakeup,
	getOneMakeup,
	createMakeup,
	upDateMakeup,
	deleteMakeup,
} = require('../queries/makeup.js');

// get all makeup

makeups.get('/', async (req, res) => {
	const allMakeup = await getAllMakeup();
	if (allMakeup) {
		res.status(200).json({
			success: true,
			payload: allMakeup,
		});
	} else {
		res.status(404).send('Makeup items could not be found!');
	}
});

// get one makeup item
makeups.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneMakeup = await getOneMakeup(id);
	if (oneMakeup.id) {
		res.status(200).json({
			success: true,
			payload: oneMakeup,
		});
	} else {
		res.status(400).send('Makeup item could not be found!');
	}
});



// create a makeup item
makeups.post('/new', async (red, res) => {
	const { body } = req.body;
	const creating = await createMakeup(body);
	if (creating.id) {
		res.status(200).json({
			success: true,
			payload: {
				id: creating.id,
				item_name: creating.item_name,
				brand: creating.brand,
				category: creating.category,
				is_vegan: creating.is_vegan,
				image: creating.image,
				where_to_purchase: creating.where_to_purchase,
			},
		});
	} else {
		res.status(500).json({ error: 'Makeup creation creation error!' });
	}
});
// update
makeups.put('/:id', async (req, res) => {
	const { id }  = req.params 
	const { body } = req.body;
	const updating = await upDateMakeup(id,body);
	if (updating.id) {
		res.status(200).json({
			success: true,
			payload: {
				id: updating.id,
				item_name: updating.item_name,
				brand: updating.brand,
				category: updating.category,
				is_vegan: updating.is_vegan,
				image: updating.image,
				where_to_purchase: updating.where_to_purchase,
				id: updating.id
			},

		});
	} else {
		res.status(500).json({ error: 'Makeup update error!' });
	}


// delete makeup item
makeups.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deleting = await deleteMakeup(id);
	if (deleting.id) {
		res.status(200).json({ success: true, payload: deleting });
	} else {
		res.status(404).json({ success: false, payload: { id: undefined } });
	}
});
});

module.exports = makeups;
