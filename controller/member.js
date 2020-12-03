const memberSchema = require('../model/member');
const errorHandler = require('../utils/error.handler');
const countrySchema = require('../model/country');
class memberController{


	async add(farm){
		try{
			let response = await memberSchema.create(farm);
			return { status: "success",   msg:"member Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await memberSchema.find({});
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
			let response = await memberSchema.find({'_id':id});
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
			let response = await memberSchema.deleteOne({_id: id});
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
            let response = await memberSchema.update({_id: id}, body);
            return { status: "success", msg:"city Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
		return  await memberSchema.aggregate([
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
	  from: "membershiptypes",
	  localField: "MembershipType",
	  foreignField: "_id",
	  as: "MembershipTypeDetails"
	}
},{$lookup:
	{
	  from: "chapters",
	  localField: "Chapter",
	  foreignField: "_id",
	  as: "ChapterNameDetails"
	}
},{$lookup:
	{
	  from: "membershipclasses",
	  localField: "Category",
	  foreignField: "_id",
	  as: "membershipclassesDetails"
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



	async register(newGender){

       let Countrycode=newGender.Countrycode;

        try{
			let response = await countrySchema.find({'Countrycode':Countrycode});
        
        	return response.CountryName;
        } catch(err){
            return {
                status: 'error',
                msg: 'User creation failed'
            }
        }
    }





}
module.exports = new memberController();