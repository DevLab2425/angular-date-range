var DateRange = angular.module('date-range', []);

DateRange.directive('dateRange', ['$filter', function($filter){
		return {
			scope: {
				startDate: '@',
				endDate: '@'
			},
			template: '<span class="range">{{range}}</span>',
			restrict: 'AE',
			replace: false,
			link: function($scope, iElm, iAttrs, controller) {
				
				// DEFAULT VALUES IF ATTRIBUTES DON'T EXIST
				if( !iAttrs.startDate )	{iAttrs.startDate = 'January 1, 1970';}
				if( !iAttrs.endDate ) 	{iAttrs.endDate = 'January 31, 1970';}
				
				var output = '';
				var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

				var fromDate = new Date(iAttrs.startDate);
				var endDate = new Date(iAttrs.endDate);
				
				var from = {
					month: 	monthsOfYear[ fromDate.getMonth() ],
					day: 	fromDate.getDate(),
					year: 	fromDate.getFullYear()
				};
				var end = {
					month: 	monthsOfYear[ endDate.getMonth() ],
					day: 	endDate.getDate(),
					year: 	endDate.getFullYear()
				};
				
				if(from.month === end.month){
					// MMMM d - d, yyyy
					output = $filter('date')(fromDate, 'MMMM d') + ' - ' + $filter('date')(endDate, 'd, yyyy');
				}else{
					// MMMM d - MMMM d, yyyy
					output = $filter('date')(fromDate, 'MMMM d, yyyy') + ' - ' + $filter('date')(endDate, 'MMMM d, yyyy');
				}
				
				$scope.range = output;
			}
		};
	}]);