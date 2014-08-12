angular.module('dateRangeExample', ['date-range'])
	.controller('dateRangeCtrl', ['$scope', function($scope){
		$scope.startDate = 'August 1, 2014';
		$scope.endDate = 'August 31, 2014';
	}]);