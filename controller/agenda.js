const agendaSchema = require('../model/agenda');
const errorHandler = require('../utils/error.handler');

class agendaController{


	async add(farm){
		try{
			let response = await agendaSchema.create(farm);
			return { status: "success",   msg:"agenda Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await agendaSchema.find({});
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
			let response = await agendaSchema.find({'_id':id});
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
			let response = await agendaSchema.deleteOne({_id: id});
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
            let response = await agendaSchema.update({_id: id}, body);
            return { status: "success", msg:"agenda Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

    async fetchByEventandtrack(Event,track)
	{
		try{
			let response = await agendaSchema.find({'event':Event,'track':track});
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
    async fetchByEvent(Event)
	{
		try{
			let response = await agendaSchema.find({'event':Event});
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
	async aggregation(eventid,trackid) {
		try {
		return  await agendaSchema.aggregate([
            {
				$match: {
                    event: ObjectId(eventid),
                    track: ObjectId(trackid)
                }
            },
				{$lookup:
					  {
						from: "events",
						localField: "event",
						foreignField: "_id",
						as: "eventsDetails"
					  }
				 },{$lookup:
					{
					  from: "trackers",
					  localField: "track",
					  foreignField: "_id",
					  as: "trackDetails"
					}
			   },{$lookup:
                {
                  from: "speakers",
                  localField: "speaker1",
                  foreignField: "_id",
                  as: "speaker1Details"
                }
           }	,{$lookup:
            {
              from: "speakers",
              localField: "speaker2",
              foreignField: "_id",
              as: "speaker2Details"
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
module.exports = new agendaController();