/**
 * Created with IntelliJ IDEA.
 * User: apokhrel
 * Date: 5/4/15
 * Time: 2:32 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created by hackintosh on 11/10/2014.
 */
app.controller("blogController", function ($scope, $location, blogFactory) {
    $scope.blogs;

    getBlogs();

    function getBlogs() {
        blogFactory.getAllBlogs()
            .success(function (data) {
                $scope.blogs = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load the blog: ' + error.message;
            });
    }


});


