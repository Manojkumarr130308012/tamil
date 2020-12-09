const router = require('express').Router();
const agendaController = require('../controller/agenda');

router.post('/add', async (req, res) => {
	const response = await agendaController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await agendaController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await agendaController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await agendaController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await agendaController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await agendaController.aggregation();
	res.send(response);
	
})
router.get('/fetchByevent', async (req, res) => {
	const response = await agendaController.fetchBystate(req.query.track);
	res.send(response); 
})
module.exports = router;