var app = angular.module("registrationModule", ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', { templateUrl: '/App/Templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration', { templateUrl: '/App/Templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration/Courses', { templateUrl: '/App/Templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration/Instructors', { templateUrl: '/App/Templates/instructors.html', controller: 'InstructorsController' });
        $routeProvider.when('/Registration/CreateAccount', { templateUrl: '/App/Templates/createAccount.html', controller: 'AccountController' });
        $routeProvider.otherwise({ templateUrl: '/App/Templates/NotFound.html' });
        $locationProvider.html5Mode(true);
    });