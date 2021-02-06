const eventsSchema = require('../model/events');
const errorHandler = require('../utils/error.handler');
const countrySchema = require('../model/country');
const membershipcostSchema = require('../model/membershipcost');
const { response } = require('express');
class eventsController{


	async add(farm){
		try{
			let response = await eventsSchema.create(farm);
			return { status: "success",   msg:"Events Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await eventsSchema.find({});
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


	async fetch1(){


		let date_ob = new Date();

		// adjust 0 before single digit date
		let date = ("0" + date_ob.getDate()).slice(-2);
		
		// current month
		let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
		
		// current year
		let year = date_ob.getFullYear();
			// console.log(year + "-" + month + "-" + date);
			let cdateTime=year + "-" + month + "-" + date;
		 FromDate =cdateTime;
		try{
			let response = await eventsSchema.find({$gte: FromDate});
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
	async upcomingfetch(){
		try{
			let response = await eventsSchema.find({});
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
			let response = await eventsSchema.find({'_id':id});
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
			let response = await eventsSchema.deleteOne({_id: id});
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
            let response = await eventsSchema.update({_id: id}, body);
            return { status: "success", msg:"city Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
		return  await eventsSchema.aggregate([
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
	   },{$lookup:
		{
		  from: "cities",
		  localField: "CityName",
		  foreignField: "_id",
		  as: "CityNamesDetails"
		}
   },{$lookup:
	{
	  from: "chapters",
	  localField: "Chapter",
	  foreignField: "_id",
	  as: "ChapterNameDetails"
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
module.exports = new eventsController();