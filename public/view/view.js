'use strict';

angular.module('workshopApp.view', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view/view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', [function() {

	}]);