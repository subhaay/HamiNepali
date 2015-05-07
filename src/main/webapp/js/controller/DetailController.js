/**
 * Created with IntelliJ IDEA.
 * User: apokhrel
 * Date: 5/7/15
 * Time: 4:14 PM
 * To change this template use File | Settings | File Templates.
 */
app.controller("detailController", function ($scope, $routeParams, $location, blogFactory) {
    $scope.blog = {};
    $scope.retrievedProduct = {};
    init();

    function init() {
        blogFactory.getBlog($routeParams.id)
            .success(function (data) {
                $scope.blog = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

});
