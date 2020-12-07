const speakerproSchema = require('../model/speakerpro');
const errorHandler = require('../utils/error.handler');

class speakerproController{


	async add(farm){
		try{
			let response = await speakerproSchema.create(farm);
			return { status: "success",   msg:"Speaker Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await speakerproSchema.find({});
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
			let response = await speakerproSchema.find({'_id':id});
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
			let response = await speakerproSchema.deleteOne({_id: id});
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
            let response = await speakerproSchema.update({_id: id}, body);
            return { status: "success", msg:"Speaker Updated successfully",result: response, message: "Speaker Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

}
module.exports = new speakerproController();