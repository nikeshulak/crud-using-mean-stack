var mongoose = require('mongoose');
var categoryCollection = require('../model/categoryModel.js');
var ObjectId = require('mongoose').Types.ObjectId


/*******category listing service method**************/
exports.categoryListMethod =  function(req, res){
	
		categoryCollection.categoryList({}, {}, function(err, resultData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				res.send({'status' : 'success',  'data': resultData});

		}
		
	});
}

/*******category Add service method**************/
exports.categoryAddMethod = function(req, res){
	
		categoryCollection.categoryAdd(req.body.category, function(err, resultData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				
				res.send({'status' : 'success',  'data': resultData});	
		}
		
	});

}

/*******category Edit service method**************/
exports.categoryEditMethod  =  function(req, res){
		
		var category = {
					"_id" : ObjectId(req.body.category._id),
					"name" : req.body.category.name,
					"remarks" : req.body.category.remarks
		}

		categoryCollection.categoryEdit({"_id": category._id}, category, function(err, resultData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				res.send({'status' : 'success',  'data': resultData});	
		}
		
	});
}

/*******category delete service method**************/
exports.categoryDeleteMethod  =  function(req, res){
	
	categoryCollection.categoryDelete({'_id': ObjectId(req.params._id)},function(err, resultData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				res.send({'status' : 'success',  'data': resultData});	
		}
		
	});
}