/**
 * Created with IntelliJ IDEA.
 * User: apokhrel
 * Date: 5/4/15
 * Time: 4:07 PM
 * To change this template use File | Settings | File Templates.
 */
app.factory('blogFactory', ['$http', function($http) {

    var urlBase = '/data/blogList.json';
    var urlDonors = '/data/donors.json';
    var blogFactory = {};

    blogFactory.getAllBlogs = function () {
        return $http.get(urlBase)
    };

    blogFactory.getAllDonors = function () {
        return $http.get(urlDonors)
    };

/*    productFactory.getProduct = function (id) {
        return $http.get(urlBase + '/get/' + id)
    };

    productFactory.removeProduct = function (id) {
        return $http.delete(urlBase + '/remove/' + id)
    };

    productFactory.addProduct = function (product) {
        return $http.post(urlBase + '/add', product);
    };*/

    return blogFactory;

}]);
