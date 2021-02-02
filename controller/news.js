const newsSchema = require('../model/news');
const errorHandler = require('../utils/error.handler');
const countrySchema = require('../model/country');
const membershipcostSchema = require('../model/membershipcost');
const { response } = require('express');
class newsController{


	async add(farm){
		try{
			let response = await newsSchema.create(farm);
			return { status: "success",   msg:"News Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await newsSchema.find({});
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
			let response = await newsSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchdata1(){
		let live="Live";
		let nonline="Nonlive"
		try{
			
			 let response = await newsSchema.find({'live':nonline});
			 let live = await newsSchema.find({'live':live});
			return{
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

	async delete(id){
		try{
			let response = await newsSchema.deleteOne({_id: id});
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
            let response = await newsSchema.update({_id: id}, body);
            return { status: "success", msg:"News Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
		return  await newsSchema.aggregate([
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
	async aggregation1() {
		try {
		return  await newsSchema.aggregate([
			{ "$group": { "_id": "$live"}},
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
module.exports = new newsController();