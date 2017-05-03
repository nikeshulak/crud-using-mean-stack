angular.module("addcategory", []).config(function($stateProvider) {
    $stateProvider.state('addcategory', {
        url: '/addcategory',
        templateUrl: "category/addcategory.tpl",
        controller: "AddCategoryController"

    });
}).controller("AddCategoryController", function($scope, AddCategoryService, $state) {
    $scope.category = {};
    $scope.editcategoryMode=false;
    $scope.addCategory = function(category) {
        AddCategoryService.saveCategory(category).then(function(resolve){
           
           // $scope.record.push(category);
             $state.go('category');
        }, function(reject){
             $state.go('category');
           
        });
        
    }

    
});




