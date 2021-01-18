const busiopcommentSchema = require('../model/busiopcomments');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const bussopSchema = require('../model/bussop');
const ObjectId = mongoose.Types.ObjectId;
class bussinessopcommentController{


	async add(farm){

        let date_ob = new Date();

		// adjust 0 before single digit date
		let date = ("0" + date_ob.getDate()).slice(-2);
		
		// current month
		let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
		
		// current year
		let year = date_ob.getFullYear();
			// console.log(year + "-" + month + "-" + date);
			let cdateTime=year + "-" + month + "-" + date;
        let bizop={
			"member":farm.member,
			"busiop":farm.busiop,
			"comments":farm.comments,
			"date":cdateTime,
			"status": "Open"
			 }
		try{
			let response = await busiopcommentSchema.create(bizop);
			return { status: "success",   msg:"Comments Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await busiopcommentSchema.find({});
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
			let response = await busiopcommentSchema.find({'_id':id});
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
			let response = await busiopcommentSchema.deleteOne({_id: id});
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

	async update(id,busiop,body) {

        try {
            let response = await bussopSchema.update({_id: busiop}, body);
            let response = await busiopcommentSchema.update({_id: id}, body);
            return { status: "success", msg:"Comments Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

    async fetchBybussop(busiop){
		try{
			let response = await busiopcommentSchema.find({'busiop':busiop});
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
    
	async aggregation(busiop) {
		try {
		return  await busiopcommentSchema.aggregate([
            {
				$match: {
                    busiop: ObjectId(busiop),
                    status: "Open"
                }
            },
				{$lookup:
					  {
						from: "members",
						localField: "member",
						foreignField: "_id",
						as: "memberDetails"
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
module.exports = new bussinessopcommentController();