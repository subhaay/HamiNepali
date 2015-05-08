// filters
app.filter('pad', function() {
	return function(num) {
		return (num < 10 ? '0' + num : num);
	};
})
// directives
app.directive('ngClock', [
		"$timeout",
		function($timeout) {
			return {
				restrict : 'E',
				template : '{{date.getHours() | pad}}'
						+ ':{{date.getMinutes() | pad}}'
						+ ':{{date.getSeconds() | pad}}' + ' EST',
				controller : function($scope, $element) {
					$scope.date = new Date();

					var tick = function() {
						$scope.date = new Date();
						$timeout(tick, 1000);
					};
					$timeout(tick, 1000);
				}
			}

		} ]);