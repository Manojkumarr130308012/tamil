const bussopSchema = require('../model/bizop');
const errorHandler = require('../utils/error.handler');
const memberSchema = require('../model/member');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class bussopController{


	async add(buss){

		let colors = ['0xff0297db', '0xff9dd3af', '0xfff6abaf']
        let memberid=buss.member;
		let member = await memberSchema.find({'_id':memberid});
		let date_ob = new Date();

		// adjust 0 before single digit date
		let date = ("0" + date_ob.getDate()).slice(-2);
		
		// current month
		let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
		
		// current year
		let year = date_ob.getFullYear();
			// console.log(year + "-" + month + "-" + date);
			let cdateTime=year + "-" + month + "-" + date;
		let colorid= Math.floor(Math.random() * (2 - 0) ) + 0
		
        let bussop={
			"member":""+memberid,
			"date":""+cdateTime,
			"chapter":""+member[0].Chapter,
			"city":""+member[0].CityName,
			"district": ""+member[0].district,
			"region":""+member[0].region,
			"state":""+member[0].State,
			"country":""+member[0].Country,
			"title":""+buss.title,
			"description":""+buss.description,
			"quantity":""+buss.quantity,
			"ordervalue":""+buss.ordervalue,
			"image1":""+member[0].Photo,
			"image2":""+buss.image2,
			"image3":""+buss.image3,
			"status":"Open",
			"color":""+colors[colorid],
			 }
		try{
			let response = await bussopSchema.create(bussop);
			return { status: "success",   msg:"Bizop Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await bussopSchema.find({});
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
			let response = await bussopSchema.find({'_id':id});
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
			let response = await bussopSchema.deleteOne({_id: id});
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
            let response = await bussopSchema.update({_id: id}, body);
            return { status: "success", msg:"Bizop Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	


	async aggregation(memberid) {
		try {
		let result=await bussopSchema.aggregate([
			{
				$match: {
					member: ObjectId(memberid)
				}
			}, {
				$group: {
				  _id:'$status',
				  total: {
					$sum: 1
				  }
				}
			  }, {$sort:{"_id":1}}
				]);

				return {
					result: result,

				};
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
	async aggregation1() {
		try {
			return await bussopSchema.aggregate([
			{
				$match: {
					status: "Open"
				}
			},{$lookup:
				{
				  from: "members",
				  localField: "member",
				  foreignField: "_id",
				  as: "Memberdetails"
				}
		   }]);
				
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
	async aggregation2(memberid) {
		try {
			return await bussopSchema.aggregate([
			{
				$match: {
					status: "Open",
					member: ObjectId(memberid)
				}
			},{$lookup:
				{
				  from: "members",
				  localField: "member",
				  foreignField: "_id",
				  as: "Memberdetails"
				}
		   }]);
				
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }

	async aggregation3(memberid) {
		try {
			let open=await bussopSchema.aggregate([
			{
				$match: {
					status: "Open",
					member: ObjectId(memberid)
				}
			}]);

			let close=await bussopSchema.aggregate([
				{
					$match: {
						status: "Open",
						member: ObjectId(memberid)
					}
				}]);
			return {
				open: open
			};	
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
}



module.exports = new bussopController();