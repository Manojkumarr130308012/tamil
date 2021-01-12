const memberSchema = require('../model/member');
const errorHandler = require('../utils/error.handler');
const countrySchema = require('../model/country');
const membershipcostSchema = require('../model/membershipcost');
const cloudinary = require("../utils/cloudinary");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
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
	async upload1(member,cost){
		
		// let user = new fileupload({
		// 	Name: farm.body.Name,
		// 	photo: result.secure_url,
		// 	cloudinary_id: result.public_id,
		//   });
		 
		try{
			let response = await memberSchema.create(member);
			return { 
				response:response,
				Status:'true',
				msg:'Member add Registered Successfully',
				Payment:cost	
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

	async fetchdatachapter(Chapter){
		try{


			return await memberSchema.aggregate( [	
				{
				$match: {
					Chapter: ObjectId(Chapter)
				}
			},	
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
	},{$lookup:
		{
		  from: "chapters",
		  localField: "Chapter",
		  foreignField: "_id",
		  as: "ChapterNameDetails"
		}
	}
	])
			
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
            return { status: "success", msg:"Member Updated successfully",result: response, message: "Updated Successfully" };

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
},{$lookup:
	{
	  from: "boards",
	  localField: "board",
	  foreignField: "_id",
	  as: "boardDetails"
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

async aggregation1(Mobile) {

		try {
		let responce=await memberSchema.aggregate([
			{
				$match: {
					Mobile: Mobile
				}
			},
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
},{$lookup:
	{
	  from: "genders",
	  localField: "Gender",
	  foreignField: "_id",
	  as: "gendersDetails"
	}
}				 
				]);


				return responce;
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }


	async register(newGender,member){
		let offset = new Date().getTimezoneOffset(); 
		let formatted = -(offset / 60);
	   let Countrycode=newGender.Countrycode;
	   let Name=newGender.Name;
	   let Mobile=newGender.Mobile;
	   let Email=newGender.Email;
	   let Category=newGender.Category;
	   let password=newGender.password;
	   let photo=member.photo;
	   let cloudinary_id=member.cloudinary_id;
	   let date_ob = new Date();

	   // adjust 0 before single digit date
	   let date = ("0" + date_ob.getDate()).slice(-2);
	   
	   // current month
	   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	   
	   // current year
	   let year = date_ob.getFullYear();
		   // console.log(year + "-" + month + "-" + date);
		   let cdateTime=year + "-" + month + "-" + date;
	   
        try{
			let countryres = await countrySchema.find({'Countrycode':Countrycode});
			let costres = await membershipcostSchema.find({'membershiptype':"5fc22d68700dab00178d50a3",'membershipclassification':""+Category});
			 let Country=countryres[0]._id;
			 let cost=costres[0].amount;
           let member={
			"Country":""+Country,
			"State":"5fca137899eac60017fc2363",
			"region":"5fca155699eac60017fc236d",
			"district":"5fca157a99eac60017fc236e",
			"CityName": "5fca159c99eac60017fc236f",
			"Name":""+Name,
			"Gender":"5fb60d3932c37100176ce0af",
			"Chapter":"5fca14c699eac60017fc236a",
			"Category":""+Category,
			"MembershipType":"5fc22d68700dab00178d50a3",
			"Address":"null",
			"Email":""+Email,
			"Mobile":""+Mobile,
			"bussinessname":"null",
			"DOB":"null",
			"pincode":"null",
			"Photo":""+photo,
			"cloudinary_id":""+cloudinary_id,
			"Products":"null",
			"Keywords":"null",
			"Website":"null",
			"Interests":"null",
			"SocialMediaLinks":"null",
			"ValidUpto": "null",
			"CreatedOn":""+cdateTime,
			'UpdatedOn':"null",
			"password":""+password,
			"Countrycode":""+Countrycode,
			"description":"ggggg",
			"newseventnoti":"0",
			'status':"null",
			"offset":formatted
			 }
			 let response = await memberSchema.create(member);

        	return{
				response:response,
				Status:'true',
				msg:'Member add Registered Successfully',
				Payment:cost		
			}
        } catch(err){
            return {
                status: 'false',
				msg: 'Member creation failed',
				error: errorHandler.parseMongoError(err)
            }
        }
    }

	async login(responce){
        let Mobile=responce.Mobile;
        let password=responce.password;
        try{
            let user = await memberSchema.findOne({
                Mobile: Mobile,
                password: password,
			});
			
            if(!user){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }



    async login1(body){
       
        try{
            let user = await memberSchema.findOne({
                Mobile: body.Mobile,
                password: body.password,
			});

			let member={
				"fcmstatus":""+body.fcmstatus,
				"fcmtoken":""+body.fcmtoken,
				 }

			let response = await memberSchema.update({_id: user.id}, member);

            if(!user){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }

	async login2(Mobile){
       
        try{
            let user = await memberSchema.findOne({
                Mobile: Mobile
            });

            if(!user){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }

}
module.exports = new memberController();