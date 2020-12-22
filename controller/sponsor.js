const sponsorSchema = require('../model/sponsor');
const errorHandler = require('../utils/error.handler');

class sponsorController{


	async add(farm){
		try{
			let response = await sponsorSchema.create(farm);
			return { status: "success",   msg:"Sponsor Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await sponsorSchema.find({});
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
			let response = await sponsorSchema.find({'_id':id});
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
			let response = await sponsorSchema.deleteOne({_id: id});
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
            let response = await sponsorSchema.update({_id: id}, body);
            return { status: "success", msg:"Sponsor Updated successfully",result: response, message: "Sponsor Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }


    async fetchByEvent(Event)
	{
		try{
			let response = await sponsorSchema.find({'Event':Event});
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
module.exports = new sponsorController();