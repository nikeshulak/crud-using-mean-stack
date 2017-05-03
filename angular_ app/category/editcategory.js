angular.module("editcategory", []).config(function($stateProvider) {
    $stateProvider.state('editcategory', {
        url: '/editcategory/:_id',
        templateUrl: "category/addcategory.tpl",
        controller: "EditCategoryController"

    });
}).controller("EditCategoryController", function($scope, AddCategoryService, $state,$stateParams,$rootScope) {
    $scope.category = AddCategoryService.getById($rootScope.record, $stateParams._id);

    $scope.editcategoryMode=true;//editMode

    $scope.updateCategory = function(category) {
        console.log('inside editcategory controller');
        console.log(category);
        AddCategoryService.updateCategory(category).then(function(resolve){
           //$scope.record.push(category);
             $state.go('category');
        }, function(reject){
            $state.go('category');
        });
       
        
    }
});





