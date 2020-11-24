const router = require('express').Router();
const regionController = require('../controller/region');

router.post('/add', async (req, res) => {
	const response = await regionController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await regionController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await regionController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await regionController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await regionController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await regionController.aggregation();
	res.send(response);
	
})
router.get('/fetchBystate', async (req, res) => {
	const response = await regionController.fetchBystate(req.query.State);
	res.send(response); 
})
module.exports = router;