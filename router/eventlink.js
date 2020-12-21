const router = require('express').Router();
const eventlinkController = require('../controller/eventlink');

router.post('/add', async (req, res) => {
	const response = await eventlinkController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await eventlinkController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await eventlinkController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await eventlinkController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await eventlinkController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await eventlinkController.aggregation(req.query.Event);
	res.send(response);
	
})
router.get('/fetchByevenid', async (req, res) => {
	const response = await eventlinkController.fetchByEvent(req.query.Event);
	res.send(response); 
})
module.exports = router;