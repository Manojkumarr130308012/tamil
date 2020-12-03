const router = require('express').Router();
const eventsController = require('../controller/events');

router.post('/add', async (req, res) => {
	const response = await eventsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await eventsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await eventsController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await eventsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await eventsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await eventsController.aggregation();
	res.send(response);
	
})
router.post('/register', async (req, res) => {
    res.send(await eventsController.register(req.body));
});
router.post('/login', async (req, res) => {
    res.send(await eventsController.login(req.body));
});

router.get('/login1', async (req, res) => {
    res.send(await eventsController.login1(req.query.Mobile,req.query.password));
});
router.get('/login2', async (req, res) => {
    res.send(await eventsController.login2(req.query.Mobile));
});
module.exports = router;