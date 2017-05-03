
angular.module('app').factory('AddCategoryService',function($http,$q){
	return{
		saveCategory:function(category){
			 var deferred = $q.defer();

			$http.post(config.serverUrl+config.create,{category : category},{//create
						headers:{
							'Content-Type' : 'application/json; charset=UTF-8'
						}
				})
				.success(function(){
						deferred.resolve('successful');
				})
				.error(function(){
						deferred.reject('ERROR');
				});
				return deferred.promise;			
		},


		updateCategory:function(category){
				var deferred = $q.defer();
				$http.post(config.serverUrl + config.update,{category : category},{//update
						headers:{
							'Content-Type' : 'application/json; charset=UTF-8'
						}
				})
				.success(function(){
						deferred.resolve('successful');
				})
				.error(function(){
						deferred.reject('ERROR');
				});
			
			return deferred.promise;	
		},
		
		deleteCategory:function(category){
			    var deferred = $q.defer();
				$http.delete(config.serverUrl + config.delete + '/' +category,{},{//delete
						headers:{
							'Content-Type' : 'application/json; charset=UTF-8'
						}
				})
				.success(function(){
		 				deferred.resolve('successful');
			    })
			    .error(function(){
						deferred.reject('ERROR');
				});
				
				return deferred.promise;	
		},

		getById: function(arr, id) {
					console.log(id);
    			for (var d = 0, len = arr.length; d < len; d += 1) {
        				if (arr[d]._id === id) {
            							return arr[d];
        				}
    			}
		}

	}
})



