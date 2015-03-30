'use strict';

angular.module('workshopApp', [
	'ngRoute',
	'workshopApp.view'
]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view'});
	}]);