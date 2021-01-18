const busiopcommentSchema = require('../model/busiopcomments');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class bussinessopcommentController{


	async add(farm){
		try{
			let response = await busiopcommentSchema.create(farm);
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

	async update(id, body) {

        try {
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
                    busiop: ObjectId(busiop)
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