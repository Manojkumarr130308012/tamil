const memberpaymentSchema = require('../model/memberpayment');
const errorHandler = require('../utils/error.handler');

class memberpaymentController{


	async add(farm){

    let memberid=farm.memberid;
    let razorpayid=farm.razorpayid;
    let date_ob = new Date();

// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();
    // console.log(year + "-" + month + "-" + date);
    let cdateTime=year + "-" + month + "-" + date;

    let memberpayment={
        "memberid": ""+memberid,
        "razorpayid": ""+razorpayid,
        "dateTime": ""+cdateTime
         }


		try{
			let response = await memberpaymentSchema.create(memberpayment);
            return { 
              status: "success", 
              msg:"Member Paymet  successfully",
              result: response, message: "Added Successfully"
             };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await memberpaymentSchema.find({});
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
			let response = await memberpaymentSchema.find({'_id':id});
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
			let response = await memberpaymentSchema.deleteOne({_id: id});
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
            let response = await memberpaymentSchema.update({_id: id}, body);
            return { status: "success", msg:"State Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	
	async fetchByCountry(country1){
		try{
			let response = await memberpaymentSchema.find({'Country':country1});
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
	async aggregation() {
		try {
		return await memberpaymentSchema.aggregate([
				{$lookup:
					  {
						from: "countries",
						localField: "Country",
						foreignField: "_id",
						as: "CountryDetails"
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
module.exports = new memberpaymentController();