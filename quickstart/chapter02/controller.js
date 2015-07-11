var aMailServices = angular.module('Amail', []);
function emailRouteConfig($routProvider) {
	$routProvider.when('/', {
		controller : ListController,
		templateUrl : 'list.html'
	}).when('/view/:id', {
		controller : DetailController,
		templateUrl : 'detail.html'
	}).otherwise({
		redirectTo : '/'
	})
}
aMailServices.config(emailRouteConfig);
function ListController($scope) {}
function DetailController($scope) {}