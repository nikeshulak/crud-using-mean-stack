 //node module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*Database Collection Schema*/
 var categorySchema = mongoose.Schema({

    name : { type:String },
    remarks: { type:String }
  });

/*Instance of my collection*/
 var categorys = mongoose.model('categorys', categorySchema);

/*Method that fire's Database Queries*/
 module.exports={
	//get all categorys
	categoryList : function(condition, fields, callback){
		if(!fields)
			fields = {};
		
	categorys.find(condition, fields, callback);
	console.log("Category List");
	},

	//update category
	categoryEdit : function(condition, data, callback){
		categorys.update(condition, data, callback);
	},

	//save category
	categoryAdd : function(data, callback){
		new categorys(data).save(callback);
	},

	//delete category
	categoryDelete :function(condition, callback){
		categorys.remove(condition, callback);
	},
	schema : categorys
}
