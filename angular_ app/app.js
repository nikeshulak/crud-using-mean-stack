angular.module("app", ['ui.router', 
	'home', 'add', 'edit', 'delete', 
	'category', 'addcategory', 'editcategory', 'deletecategory'
	])
	.config(function() {})
	
	.controller('IndexController', function($state) {
													// console.log('Index');//not showing
		                     	$state.go('home');
		                     })

	.controller('CategoryController', function($state) {
													// console.log('Category');//showing
		                     	$state.go('category');
		                     })