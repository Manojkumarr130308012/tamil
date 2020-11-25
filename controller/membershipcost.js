const membershipcostSchema = require('../model/membershipcost');
const errorHandler = require('../utils/error.handler');

class membershipcostController{


	async add(farm){
		try{
			let response = await membershipcostSchema.create(farm);
			return { status: "success",   msg:"Country Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await membershipcostSchema.find({});
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
			let response = await membershipcostSchema.find({'_id':id});
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
			let response = await membershipcostSchema.deleteOne({_id: id});
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
            let response = await membershipcostSchema.update({_id: id}, body);
            return { status: "success", msg:"Country Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
    async aggregation() {
		try {
		return  await membershipcostSchema.aggregate([
				{$lookup:
					  {
						from: "membershiptypes",
						localField: "membershiptype",
						foreignField: "_id",
						as: "membershiptypeDetails"
					  }
				 },{$lookup:
					{
					  from: "membershipclasses",
					  localField: "membershipclassification",
					  foreignField: "_id",
					  as: "membershipclassificationDetails"
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
module.exports = new membershipcostController();