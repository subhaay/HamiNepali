/**
 * Created with IntelliJ IDEA.
 * User: apokhrel
 * Date: 5/4/15
 * Time: 2:31 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('hamiNepali', ['ngRoute', 'ngResource']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the view1 page
        .when('/home', {
            templateUrl: 'partials/blogPage.html',
            controller: 'blogController'
        })

        // route for the contact page
        .otherwise({redirectTo: '/home'});
});
