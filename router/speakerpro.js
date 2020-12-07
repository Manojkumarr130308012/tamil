const router = require('express').Router();
const speakerproController = require('../controller/speakerpro');

router.post('/add', async (req, res) => {
	const response = await speakerproController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await speakerproController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await speakerproController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await speakerproController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await speakerproController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;