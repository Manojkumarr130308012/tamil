const router = require('express').Router();
const iniativebannerController = require('../controller/iniativebanner');

router.post('/add', async (req, res) => {
	const response = await iniativebannerController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await iniativebannerController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await iniativebannerController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await iniativebannerController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await iniativebannerController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await iniativebannerController.aggregation(req.query.Event);
	res.send(response);
})
router.get('/fetchByevenid', async (req, res) => {
	const response = await iniativebannerController.fetchByEvent(req.query.Event);
	res.send(response); 
})
module.exports = router;