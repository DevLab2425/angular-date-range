describe('Angular Date Range Directive', function(){
	var $scope, $compile;
	
	var baseTemplate = '<date-range></date-range>';
	
	beforeEach(module('date-range'));
	
	beforeEach(inject(function($rootScope, _$compile_){
		$scope = $rootScope.$new();
		$compile = _$compile_;
	}));
	
	function compileDirective(template, scope){
		var elm = angular.element(template);
		$compile(elm)(scope);
		scope.$apply();
		return elm;
	}
	
	describe('Default Dates', function(){
		var elm; 
		
		beforeEach(function(){
			elm = compileDirective(baseTemplate, $scope);
		});
		
		it('should display January only once ', function(){
			expect(elm.text()).toContain('January');
			expect(elm.text().indexOf('January')).toBe(0);
		});
		
		it('should display the date span as 1 - 31', function(){
			expect(elm.text()).toContain('1 - 31');
		});
		
		it('should display a condensed date "January 1 - 31, 1970"', function(){
			expect(elm.text()).toBe('January 1 - 31, 1970');
		});
	});
	
});