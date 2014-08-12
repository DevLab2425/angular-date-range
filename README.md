#angular-date-range
[![NPM version](https://badge.fury.io/js/angular-date-range.svg)](http://badge.fury.io/js/angular-date-range)
[![Bower version](https://badge.fury.io/bo/angular-date-range.svg)](http://badge.fury.io/bo/angular-date-range)
[![Github version](https://badge.fury.io/gh/angular-date-range.svg)](http://badge.fury.io/gh/angular-date-range)


A simple directive to produce a formatted date range display.

## Installation

Download [angular-date-range.min.js](#) or install with bower

```BASH
$ bower install angular-date-range --save
```

Load `angular-date-range.min.js`, then add the `date-range` module to your application.

```javascript
angular.module('yourApp', ['date-range']);
```

## Usage
### HTML
```html
<body ng-app="dateRangeExample">
	<div id="daterange-wrap" ng-controller="dateRangeCtrl">
		<span date-range start-date="{{startDate}}" end-date="{{endDate}}"></span>
	</div>
</body>
```

### Javascript
```javascript
angular.module('dateRangeExample', ['date-range'])
	.controller('dateRangeCtrl', ['$scope', function($scope){
		$scope.startDate = 'August 1, 2014';
		$scope.endDate = 'August 31, 2014';
	}]);
```

### Output
August 1 - 31, 2014

## Development

Testing is done using Karma Test Runner.

```BASH
$ grunt test
```
	
## Build

```BASH
$ grunt build
```