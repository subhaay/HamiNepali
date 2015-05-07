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

        .when('/contribute', {
            templateUrl: 'partials/contribute.html',
            controller: 'blogController'
        })

        .when('/members', {
            templateUrl: 'partials/members.html',
            controller: 'blogController'
        })

        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'blogController'
        })

        .when('/contactUs', {
            templateUrl: 'partials/contactUs.html',
            controller: 'blogController'
        })

        // route for the view1 page
        .when('/blog/:id', {
            templateUrl: 'partials/blogDetails.html',
            controller: 'detailController'
        })

        // route for the contact page
        .otherwise({redirectTo: '/home'});
});
