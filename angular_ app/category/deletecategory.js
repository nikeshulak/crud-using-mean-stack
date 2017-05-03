angular.module("deletecategory", []).config(function($stateProvider) {
    $stateProvider.state('deleteCategory', {
        url: '/deletecategory/:_id',
        templateUrl: "category/deletecategory.tpl",
        controller: "DeleteCategoryController"

    });
}).controller("DeleteCategoryController", function($scope, AddCategoryService, $state,$stateParams,$rootScope) {

    $scope.category = AddCategoryService.getById($rootScope.record, $stateParams._id);
    $scope.editcategoryMode=false;

    $scope.deleteCategory = function(category) {
        AddCategoryService.deleteCategory(category).then(function(resolve){
           //$scope.record.push(category);
             $state.go('category');
        }, function(reject){
            $state.go('category');
        });
        
        
    }
});