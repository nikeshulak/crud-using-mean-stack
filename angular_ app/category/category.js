angular.module("category", []).config(function($stateProvider) {
    $stateProvider.state('category', {
        url: '/category',
        templateUrl: "category/category.tpl",
        controller: "CategoryController",
        
        resolve: {
            data: ['$http', function($http) {
                    // console.log(config.serverUrl + config.read);//showing
                  return  $http.get(config.serverUrl + config.read);                  
            }]
        }
    });
}).controller("CategoryController", function(data,$scope,$rootScope) {
    //not coming here
    console.log('test category controller');//not showing

    $rootScope.record=data.data.data;
    
    /*$rootScope.record=[{"_id":"5906eb7c50d3da2c0874a69c","name":"Entertainment","remarks":"Remarks","__v":0},{"_id":"5909722f3d96cdbe03a19e33","name":"Design and Printing","remarks":"Designers","__v":0},{"_id":"590978763d96cdbe03a19e34","name":"New category","remarks":"Test","__v":0}];*/

    /*$rootScope.record.id = "5906eb7c50d3da2c0874a69c";
    $rootScope.record.name = "Entertainment";*/

    console.log(data);//not showing
    console.log($rootScope.record);//not showing
});
