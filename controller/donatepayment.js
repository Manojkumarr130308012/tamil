const donatepaymentSchema = require('../model/donatepayment');
const errorHandler = require('../utils/error.handler');
const memberSchema = require('../model/member');
const mongoose = require('mongoose');
const donateSchema = require('../model/donate');
const ObjectId = mongoose.Types.ObjectId;

class donatepaymentController{


	async add(farm){

    let memberid=farm.memberid;
    let razorpayid=farm.razorpayid;
    let donateid=farm.donateid;
	let amount=farm.amount;
    let date_ob = new Date();


	// let response1 = await donateSchema.find({'_id':donateid});

    //      let collected=response1[0].collected;
    //      let donated=response1[0].Totalamount;
    //      let current=collected+amount;
	// 	 let avg=(current*100)/donated;

	// 	 let memberpayment={
	// 		"collected": current,
	// 		"percentage": avg,
	// 		 }


	// 		 let data = await donateSchema.update({_id: donateid}, memberpayment);


// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();
    // console.log(year + "-" + month + "-" + date);
    let cdateTime=year + "-" + month + "-" + date;

    let memberpayment={
        "memberid": ""+memberid,
        "razorpayid": ""+razorpayid,
        "donateid": ""+donateid,
        "dateTime": ""+cdateTime,
		"amount": ""+amount,
		"status": "success"
         }
		 let paymentid;






		try{
			let response = await donatepaymentSchema.create(memberpayment);
	
		// 	let member={
		// 		"payment": "Sucess",
		// 		 }

		// let response1= await memberSchema.update({_id: memberid}, member);

            return { 
              status: "success", 
              msg:"donate Payment  successfully",
              result: response, message: "Added Successfully"
			
             };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await donatepaymentSchema.find({});
			let count=Object.keys(response).length;
			return {
				response: response,
				count
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id){
		try{
			let response = await donatepaymentSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await donatepaymentSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await donatepaymentSchema.update({_id: id}, body);
            return { status: "success", msg:"donatepayment Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	
	async fetchByCountry(country1){
		try{
			let response = await donatepaymentSchema.find({'Country':country1});
			return {
				response: response
			};	
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async aggregation(donateid) {
		try {
		return  await donatepaymentSchema.aggregate([
            {
				$match: {
					donateid: ObjectId(donateid)
                }
            },
            {$lookup:
					  {
						from: "members",
						localField: "memberid",
						foreignField: "_id",
						as: "memberDetails"
					  }
				 },	  
				  {$lookup:
				{
					  from: "donates",
					  localField: "donateid",
					  foreignField: "_id",
					  as: "donateDetails"
					}
			   }		 
				]);
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }

}
module.exports = new donatepaymentController();