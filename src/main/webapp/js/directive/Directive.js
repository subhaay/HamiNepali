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
				template : '{{mth}}' + ' {{date.getDate() | pad}}'
						+ ', {{date.getFullYear() | pad}}'
						+ ' {{date.getHours() | pad}}'
						+ ':{{date.getMinutes() | pad}}'
						+ ':{{date.getSeconds() | pad}}' + ' ET',
				controller : function($scope, $element) {
					var monthNames = [ "January", "February", "March", "April",
							"May", "June", "July", "August", "September",
							"October", "November", "December" ];
					$scope.date = new Date();
					$scope.mth = monthNames[$scope.date.getMonth()];

					var tick = function() {
						$scope.date = new Date();
						$timeout(tick, 1000);
					};
					$timeout(tick, 1000);
				}
			}
		} ]);