const router = require('express').Router();
const memberController = require('../controller/member');

router.post('/add', async (req, res) => {
	const response = await memberController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchdata1', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberController.aggregation1(req.body);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await memberController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await memberController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await memberController.aggregation();
	res.send(response);
	
})
router.post('/register', async (req, res) => {
    res.send(await memberController.register(req.body));
});
router.post('/login', async (req, res) => {
    res.send(await memberController.login(req.body));
});

router.get('/login1', async (req, res) => {
    res.send(await memberController.login1(req.query.Mobile,req.query.password));
});
router.get('/login2', async (req, res) => {
    res.send(await memberController.login2(req.query.Mobile));
});
module.exports = router;