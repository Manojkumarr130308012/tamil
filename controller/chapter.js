const chapterSchema = require('../model/chapter');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const memberSchema = require('../model/member');
class chapterController{


	async add(farm){
		try{
			let response = await chapterSchema.create(farm);
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
			let response = await chapterSchema.find({});
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
			let response = await chapterSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchdata1(district1){
		try{
			//  = await chapterSchema.find({'district':district});

			let response=await chapterSchema.aggregate( [{
			$match: {
				district: ObjectId(district1)
			}
		},
		{$lookup:
			{
			  from: "countries",
			  localField: "Country",
			  foreignField: "Countryid",
			  as: "CountryDetails"
			}
	   },{$lookup:
		  {
			from: "states",
			localField: "State",
			foreignField: "Stateid",
			as: "StateDetails"
		  }
	 },{$lookup:
{
from: "cities",
localField: "CityName",
foreignField: "Cityid",
as: "CityNamesDetails"
}
}]);



 let result = await memberSchema.aggregate([{
	$match: {
		district: ObjectId(district1)
	}
},{
 $lookup:
	  {
		from: "chapters",
		localField: "Chapter",
		foreignField: "_id",
		as: "ChapterNameDetails"
	  }  
  },
  {
	  $group:
	  {
		  _id:"$ChapterNameDetails.ChapterName",
			"numOfmembers":{$sum:1},
	  }
  },{$sort:{"_id.Chapter":1}}
]);
			
// 	console.log('hfjdhfjdhjhsjkdfjdddkdkj',result);
// 	let count=Object.keys(result).length;

			return{
				result: result,
				response: response
			}; 
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}



	async fetchdata2(Country,State){
		try{
			//  = await chapterSchema.find({'district':district});

			let response=await chapterSchema.aggregate( [{
			$match: {
				Country: ObjectId(Country),
				State: ObjectId(State)
			}
		},
		{$lookup:
			{
			  from: "countries",
			  localField: "Country",
			  foreignField: "Countryid",
			  as: "CountryDetails"
			}
	   },{$lookup:
		  {
			from: "states",
			localField: "State",
			foreignField: "Stateid",
			as: "StateDetails"
		  }
	 },{$lookup:
{
from: "cities",
localField: "CityName",
foreignField: "Cityid",
as: "CityNamesDetails"
}
}]);



 let result = await memberSchema.aggregate([{
	$match: {
		Country: ObjectId(Country),
				State: ObjectId(State)
	}
},{
 $lookup:
	  {
		from: "chapters",
		localField: "Chapter",
		foreignField: "_id",
		as: "ChapterNameDetails"
	  }  
  },
  {
	  $group:
	  {
		  _id:"$ChapterNameDetails.ChapterName",
			"numOfmembers":{$sum:1},
	  }
  },{$sort:{"_id.Chapter":1}}
]);
			
// 	console.log('hfjdhfjdhjhsjkdfjdddkdkj',result);
// 	let count=Object.keys(result).length;

			return{
				result: result,
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
			let response = await chapterSchema.deleteOne({_id: id});
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
            let response = await chapterSchema.update({_id: id}, body);
            return { status: "success", msg:"city Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	

	async fetchdatafilter(Country,State,CityName){
	
		try{
			 let response = await chapterSchema.find({$and:[{Country:{$regex: Country, $options: 'i'}},{State:{$regex: State, $options: 'i'}},{CityName:{$regex: CityName, $options: 'i'}}]});
			 let response1=await chapterSchema.aggregate( [
			{$lookup:
				{
				  from: "countries",
				  localField: "Country",
				  foreignField: "Countryid",
				  as: "CountryDetails"
				}
		   },{$lookup:
			  {
				from: "states",
				localField: "State",
				foreignField: "Stateid",
				as: "StateDetails"
			  }
		 },{$lookup:
	{
	from: "cities",
	localField: "CityName",
	foreignField: "Cityid",
	as: "CityNamesDetails"
	}
	}]);
			 return{
				response: response
			}; 
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async aggregation() {
		try {
		return  await chapterSchema.aggregate([
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
module.exports = new chapterController();