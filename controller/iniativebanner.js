const iniativebannerSchema = require('../model/iniativebanner');
const errorHandler = require('../utils/error.handler');

class iniativebannerController{

	async add(farm){
		try{
			let response = await iniativebannerSchema.create(farm);
			return { status: "success",   msg:"advertise Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await iniativebannerSchema.find({});
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
			let response = await iniativebannerSchema.find({'_id':id});
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
			let response = await iniativebannerSchema.deleteOne({_id: id});
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
            let response = await iniativebannerSchema.update({_id: id}, body);
            return { status: "success", msg:"advertise Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	
	async fetchByEvent(Event)
	{
		try{
			let response = await iniativebannerSchema.find({'Event':Event});
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
	async aggregation(eventid) {
		try {
		return  await iniativebannerSchema.aggregate([
            // {
			// 	$match: {
			// 		Event: ObjectId(eventid)
            //     }
            // },
            {$lookup:
					  {
						from: "events",
						localField: "Event",
						foreignField: "_id",
						as: "EventsDetails"
					  }
				 },			 
				]);
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }

}
module.exports = new iniativebannerController();