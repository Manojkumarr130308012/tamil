const citySchema = require('../model/city');
const errorHandler = require('../utils/error.handler');

class cityController{


	async add(farm){
		try{
			let response = await citySchema.create(farm);
			return { status: "success",   msg:"city Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await citySchema.find({});
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
			let response = await citySchema.find({'_id':id});
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
			let response = await citySchema.deleteOne({_id: id});
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
            let response = await citySchema.update({_id: id}, body);
            return { status: "success", msg:"city Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
		return  await citySchema.aggregate([
				{$lookup:
					  {
						from: "countries",
						localField: "Country",
						foreignField: "_id",
						as: "CountryDetails"
					  }
				 },{$lookup:
					{
					  from: "states",
					  localField: "State",
					  foreignField: "_id",
					  as: "StateDetails"
					}
			   },{$lookup:
				{
				  from: "regions",
				  localField: "region",
				  foreignField: "_id",
				  as: "regionsDetails"
				}
		   },{$lookup:
			{
			  from: "districts",
			  localField: "district",
			  foreignField: "_id",
			  as: "districtsDetails"
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
	async fetchBycity(region){
		try{
			let response = await citySchema.find({'region':region});
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
}
module.exports = new cityController();