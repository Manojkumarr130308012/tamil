const router = require('express').Router();
const eventimageController = require('../controller/eventimage');

router.post('/add', async (req, res) => {
	const response = await eventimageController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await eventimageController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await eventimageController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await eventimageController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await eventimageController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await eventimageController.aggregation(req.query.Event);
	res.send(response);
	
})
router.get('/fetchByevenid', async (req, res) => {
	const response = await eventimageController.fetchByEvent(req.query.Event);
	res.send(response); 
})
module.exports = router;