'use strict';
/**
 * Search module
 * @author Gagandeep Kaur
 */
angular.module('myApp.search', ['ngRoute'])
//setup  route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'search/index.html',
    controller: 'SearchCtrl'
  });
}])
/**
 * Search Controller
 * sets the data for people to display 
 */
.controller('SearchCtrl', ['$scope',function($scope) {
	/*
	* People array 
	*/
	$scope.people = [
		{
			name: 'Eric',
			age: '32',
			image: 'eric.png'
		}, 
		{
			name: 'Hayley',
			age: '21',
			image: 'hayley.png'
		}, 
		{
			name: 'Lucy',
			age: '26',
			image: 'lucy.png'
		}, 
		{
			name: 'Rory',
			age: '25',
			image: 'rory.png'
		},
		{
			name: 'Sean',
			age: '25',
			image: 'sean.png'
		},
		{
			name: 'Yaw',
			age: '25',
			image: 'yaw.png'
		}
	];
}]);

