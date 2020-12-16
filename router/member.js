const router = require('express').Router();
const memberController = require('../controller/member');
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");
const countrySchema = require('../model/country');
const membershipcostSchema = require('../model/membershipcost');
const memberSchema = require('../model/member');
const fs = require('fs')
router.post('/add', upload.single("image"), async (req, res) => {

	let photo;
	let cloudinary_id;
	try {
		if (fs.existsSync(req.file.path)) {
			const result = await cloudinary.uploader.upload(req.file.path);
			this.photo=""+result.secure_url;
			this.cloudinary_id=""+result.public_id;
		}
	  } catch(err) {

      console.log("pathg","file not")
		// console.error(err)
		this.photo="https://i.dlpng.com/static/png/6342390_preview.png";
		this.cloudinary_id="static";
	  }

	  let member={
		"Country":""+req.body.Country,
		"State":""+req.body.State,
		"region":""+req.body.region,
		"district":""+req.body.district,
		"CityName": ""+req.body.CityName,
		"Name":""+req.body.Name,
		"Gender":""+req.body.Gender,
		"Chapter":""+req.body.Chapter,
		"Category":""+req.body.Category,
		"MembershipType":""+req.body.MembershipType,
		"Address":""+req.body.Address,
		"Email":""+req.body.Email,
		"Mobile":""+req.body.Mobile,
		"bussinessname":""+req.body.bussinessname,
		"DOB":""+req.body.DOB,
		"pincode":""+req.body.pincode,
		"Photo":""+this.photo,
		"cloudinary_id":""+this.cloudinary_id,
		"Products":""+req.body.Products,
		"Keywords":""+req.body.Keywords,
		"Website":""+req.body.Website,
		"Interests":""+req.body.Interests,
		"SocialMediaLinks":""+req.body.SocialMediaLinks,
		"ValidUpto": ""+req.body.ValidUpto,
		"CreatedOn":""+req.body.CreatedOn,
		'UpdatedOn':""+req.body.UpdatedOn,
		"password":""+req.body.password,
		"Countrycode":"+91",
		"fcmstatus":"gg",
		"fcmtoken":"ggg",
		'status':""+req.body.status
		 }



	const response = await memberController.add(member);
	res.send(response);

})
router.post('/register1', upload.single("image"),async (req, res) => {
	let photo;
	let cloudinary_id;
	const file = req.image;
	
	try {
		if (fs.existsSync(file)) {
			const result = await cloudinary.uploader.upload(file);
			this.photo=""+result.secure_url;
			this.cloudinary_id=""+result.public_id;
		}
	  } catch(err) {

      console.log("pathg","file not")
		// console.error(err)
		this.photo="https://i.dlpng.com/static/png/6342390_preview.png";
		this.cloudinary_id="static";
	  }


	
	let Countrycode=req.body.Countrycode;
	let Name=req.body.Name;
	let Mobile=req.body.Mobile;
	let Email=req.body.Email;
	let MembershipType=req.body.MembershipType;
	let Category=req.body.Category;
	let password=req.body.password;

	let date_ob = new Date();

	// adjust 0 before single digit date
	let date = ("0" + date_ob.getDate()).slice(-2);
	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);	
	// current year
	let year = date_ob.getFullYear();
		// console.log(year + "-" + month + "-" + date);
		let cdateTime=year + "-" + month + "-" + date;
		let countryres = await countrySchema.find({'Countrycode':Countrycode});
		let costres = await membershipcostSchema.find({'membershiptype':""+MembershipType,'membershipclassification':""+Category});
		 let Country=countryres[0]._id;
		 let cost=costres[0].amount;
	   let member={
		"Country":""+Country,
		"State":"5fca137899eac60017fc2363",
		"region":"5fca155699eac60017fc236d",
		"district":"5fca157a99eac60017fc236e",
		"CityName": "5fca159c99eac60017fc236f",
		"Name":""+Name,
		"Gender":"5fb60d3932c37100176ce0af",
		"Chapter":"5fca14c699eac60017fc236a",
		"Category":""+Category,
		"MembershipType":""+MembershipType,
		"Address":"null",
		"Email":""+Email,
		"Mobile":""+Mobile,
		"bussinessname":"null",
		"DOB":"null",
		"pincode":"null",
		"Photo":""+this.photo,
		"cloudinary_id":""+this.cloudinary_id,
		"Products":"null",
		"Keywords":"null",
		"Website":"null",
		"Interests":"null",
		"SocialMediaLinks":"null",
		"ValidUpto": "null",
		"CreatedOn":""+cdateTime,
		'UpdatedOn':"null",
		"password":""+password,
		"Countrycode":""+Countrycode,
		"fcmstatus":"ffffff",
		"fcmtoken":"gggg",
		'status':"null"
		 }

	const response = await memberController.upload1(member,cost);
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

router.get('/fetchdatabychapter', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberController.fetchdatachapter(req.query.Chapter);
	res.send(response);
})

router.get('/fetchdata1', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberController.aggregation1(req.query.Mobile);
	res.send(response);
})


router.delete('/delete', async (req, res) => {
	let user = await memberSchema.findById(req.query.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
	const response = await memberController.delete(req.query.id);
	res.send(response);
})
router.put('/update',upload.single("image"),async (req, res) => {
	let photo;
	let cloudinary_id;
	let user = await memberSchema.findById(req.query.id);
	
	try {
		if (fs.existsSync(req.file.path)) {
			await cloudinary.uploader.destroy(user.cloudinary_id);

			const result = await cloudinary.uploader.upload(req.file.path);
			this.photo=""+result.secure_url;
			this.cloudinary_id=""+result.public_id;
		}
	  } catch(err) {

      console.log("pathg","file not")
		// console.error(err)
		this.photo="https://i.dlpng.com/static/png/6342390_preview.png";
		this.cloudinary_id="static";
	  }

	// let memberid=user.cloudinary_id;
	// console.log("memberid",""+user.Country);


console.log("memddddddddddberid",req.body.Country || user.Country);
	let body={
			"Country":req.body.Country || user.Country,
			"State":req.body.State || user.State,
			"region":req.body.region || user.region,
			"district":req.body.district || user.district,
			"CityName": req.body.CityName || user.CityName,
			"Name":req.body.Name || user.Name,
			"Gender":req.body.Gender || user.Gender,
			"Chapter":req.body.Chapter || user.Chapter,
			"Category":req.body.Category || user.Category,
			"MembershipType":req.body.MembershipType || user.MembershipType,
			"Address":req.body.Address || user.Address,
			"Email":req.body.Email || user.Email,
			"Mobile":req.body.Mobile || user.Mobile,
			"bussinessname":req.body.bussinessname || user.bussinessname,
			"DOB":req.body.DOB || user.DOB,
			"pincode":req.body.pincode || user.pincode,
			"Photo":this.Photo || user.Photo,
			"cloudinary_id":this.cloudinary_id || user.cloudinary_id,
			"Products":req.body.Products || user.Products,
			"Keywords":req.body.Keywords || user.Keywords,
			"Website":req.body.Website || user.Website,
			"Interests":req.body.Interests || user.Interests,
			"SocialMediaLinks":req.body.SocialMediaLinks || user.SocialMediaLinks,
			"ValidUpto": req.body.ValidUpto || user.ValidUpto,
			"CreatedOn":req.body.CreatedOn || user.CreatedOn,
			'UpdatedOn':req.body.UpdatedOn || user.UpdatedOn,
			"password":req.body.password || user.password,
			"Countrycode":req.body.Countrycode || user.Countrycode,
			'status':req.body.status || user.status
			 }
    const response = await memberController.update(req.query.id,body);
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
    res.send(await memberController.login1(req.query.Mobile,req.query.password,req.query.fcmstatus,req.query.fcmtoken));
});
router.get('/login2', async (req, res) => {
    res.send(await memberController.login2(req.query.Mobile));
});
module.exports = router;