const router = require('express').Router();
const bussinessopController = require('../controller/bizopcomments');

router.post('/add', async (req, res) => {
	const response = await bussinessopController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussinessopController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussinessopController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await bussinessopController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await bussinessopController.update(req.query.id,req.query.busiop, req.body);
	res.send(response);
})

router.get('/fetchBybussop', async (req, res) => {
	const response = await bussinessopController.aggregation(req.query.busiop);
	res.send(response); 
})
module.exports = router;