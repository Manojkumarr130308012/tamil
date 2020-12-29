const bussopSchema = require('../model/bussop');
const errorHandler = require('../utils/error.handler');
const memberSchema = require('../model/member');
class bussopController{


	async add(buss){
        let memberid=buss.member;
        let member = await memberSchema.find({'_id':member});
        let bussop={
			"member":""+memberid,
			"date":""+buss.date,
			"chapter":""+member[0].Chapter,
			"city":""+member[0].CityName,
			"district": ""+member[0].district,
			"region":""+member[0].region,
			"state":""+member[0].State,
			"country":""+member[0].Country,
			"title":""+buss.title,
			"description":""+buss.description,
			"quantity":""+buss.quantity,
			"ordervalue":""+buss.ordervalue,
			"image1":""+buss.image1,
			"image2":""+buss.image2,
			"image3":""+buss.image3,
			"status":""+buss.status,
			 }
		try{
			let response = await bussopSchema.create(bussop);
			return { status: "success",   msg:"bussop Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await bussopSchema.find({});
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
			let response = await bussopSchema.find({'_id':id});
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
			let response = await bussopSchema.deleteOne({_id: id});
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
            let response = await bussopSchema.update({_id: id}, body);
            return { status: "success", msg:"bussop Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

}
module.exports = new bussopController();