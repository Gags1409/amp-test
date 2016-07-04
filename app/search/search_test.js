'use strict';

describe('myApp.search module', function() {
    beforeEach(module('myApp.search'));

    var $controller;

	beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));
  
    describe('SearchCtrl ', function() {
		var $scope, controller;

		beforeEach(function() {
			$scope = {};
			controller = $controller('SearchCtrl', { $scope: $scope });
		});
		it('controller should be defined', function() {
			expect(controller).toBeDefined();
		});
		
		it('people array should be defined and greater than 0', function() {
			expect($scope.people).toBeDefined();
			expect($scope.people.length).toBeGreaterThan(0); 
		});
		
		it('people array should be equal to the given array', function() {
			var people = [
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
			expect($scope.people).toEqual(people);
		});
		
		
		it('any people object should have name , age and image properties', function() {
			var obj = $scope.people[0];
			var actual = Object.keys(obj).sort();
			var expected = [
			  'name',
			  'age',
			  'image'
			].sort();
			expect(actual).toEqual(expected);
		});
		
		it('any people object should have defined name , age and image', function() {
			var obj = $scope.people[0];
			expect(obj.name).toBeDefined();
			expect(obj.age).toBeDefined();
			expect(obj.image).toBeDefined();			
		});

   
  });
});