angular.module("home", []).config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: "home/home.tpl",
        controller: "HomeController",
        
        resolve: {
            data: ['$http', function($http) {
                  // console.log(config.serverUrl + config.read);//showing
                  return  $http.get(config.serverUrl + config.read);
            }]
        }
});
}).controller("HomeController", function(data,$scope,$rootScope) {
    
    $rootScope.record=data.data.data;
    // console.log(JSON.stringify(data.data.data));//showing
    // console.log($rootScope.record);//showing
});
